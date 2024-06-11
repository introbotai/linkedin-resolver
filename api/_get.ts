/*
 *  Redirects to a member's LinkedIn page.
 *  Created On 21 May 2024
 */

import { z } from 'zod'
import { type RouteConfig } from 'serverless-utilities'
import { type VercelRequest, type VercelResponse } from '@vercel/node'
import { db } from '../utils/db.js'
import * as mixpanel from '../utils/mixpanel/index.js'

const querySchema = z.object({
    id: z.string()
}).strict()

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

    const member = await db.person.findFirst({
        where: {
            id: {
                startsWith: startId,
            },
            name: {
                startsWith: name,
                mode: 'insensitive',
            }
        }
    })

    if (!member) {
        console.log('Profile was not found in our database')
        return res.status(404).send('Profile not found')
    }

    if (!member.linkedin) {
        console.log('Profile does not have a LinkedIn link')
        return res.status(404).send(`${member.name} hasn't provided a LinkedIn`)
    }

    // fire the required Mixpanel events
    await mixpanel.track.setProfile({ id: member.id, name: member.name, phone: member.phone })
    await mixpanel.track.linkedInClicked({
        pathName: id,
        id: member.id,
        target: member.linkedin,
    })

    // url encode the username because people have weird characters
    // in their usernames 🙄
    const linkedinUsername = encodeURIComponent(member.linkedin.split('/').pop())
    const hostname = member.linkedin.split('/').toSpliced(-1, 1)
    const target = `https://${hostname.join('/')}/${linkedinUsername}`
    res.setHeader('Location', target)

    console.log(`Redirecting to: ${target}`)
    return res.status(302).send('')
}

export const get: RouteConfig = {
    handler,
    validation: {
        query: querySchema,
    }
}
