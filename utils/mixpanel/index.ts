/*
 *  Configures a Mixpanel client for each request.
 *  Created On 22 May 2024
 */

import Mixpanel from 'mixpanel'

let mp: Mixpanel.Mixpanel

export function getMixpanel() {
    if (mp) return mp
    
    const token = process.env.MIXPANEL_TOKEN as string

    if (!token) return

    console.log('Creating Mixpanel client')
    mp = Mixpanel.init(token, {
        keepAlive: true,
    })

    return mp
}

export * as track from './track.js'
