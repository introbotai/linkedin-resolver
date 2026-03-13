/*
 *  Redirects to a member's LinkedIn page.
 *  Created On 21 May 2024
 */

import { z } from 'zod'
import { type RouteConfig } from 'serverless-utilities'
import { type VercelRequest, type VercelResponse } from '@vercel/node'
import { db } from '../utils/db.js'
import * as mixpanel from '../utils/mixpanel/index.js'

const querySchema = z.strictObject({
    id: z.string(),
})

async function handler(req: VercelRequest, res: VercelResponse) {
    const { id } = req.query as z.infer<typeof querySchema>

    // prevent search engines from indexing this API
    res.setHeader('X-Robots-Tag', 'noindex')
    
    if (!id) {
        console.log('No ID was provided, so aborting request')
        return res.status(404).send('Profile not found')
    }

    const split = id.split('-')
    if (split.length != 2) {
        console.log('Malformed profile ID was given, aborting lookup')
        return res.status(400).send('Invalid profile ID provided')
    }

    const [name, startId] = split
    console.log(`Name: ${name} and ID starts with: ${startId}`)

    const persona = await db.selectFrom('Persona')
        .innerJoin('Member', 'Member.id', 'Persona.memberId')
        .select([
            'Persona.id',
            'Persona.name',
            'Persona.linkedin',
            'Persona.memberId',
            'Member.phone',
        ])
        .where('Persona.id', 'like', `${startId}%`)
        .where('Persona.name', 'ilike', `${name}%`)
        .executeTakeFirst()

    if (!persona) {
        console.log('Profile was not found in our database')
        return res.status(404).send('Persona not found')
    }

    if (!persona.linkedin) {
        console.log('Profile does not have a LinkedIn link')
        return res.status(404).send(`${persona.name} hasn't provided a LinkedIn`)
    }

    // ensure we only have one https:// prefix and handle potential query parameters
    // that might have been broken by manual encoding in the previous version.
    // we use the URL constructor to handle encoding of the path correctly
    // while preserving query parameters.
    const cleanUrl = (persona.linkedin || '').trim().replace(/^(https?:\/\/)+/i, '')
    const target = new URL(`https://${cleanUrl}`).toString()

    // fire the required Mixpanel events
    await mixpanel.track.setProfile({ 
        name: persona.name ?? undefined, 
        id: persona.memberId ?? undefined, 
        phone: persona.phone ?? undefined, 
    })
    await mixpanel.track.linkedInClicked({
        target,
        pathName: id,
        id: persona.memberId,
    })

    res.setHeader('Location', target)

    console.log(`Redirecting to: ${target}`)
    return res.status(302).send('')
}

export const get: RouteConfig = {
    handler,
    validation: {
        query: querySchema,
    },
}
