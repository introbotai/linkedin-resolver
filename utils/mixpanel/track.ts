/*
 *  Contains Mixpanel events and their payloads.
 *  Created On 22 May 2024
 */

import { getMixpanel } from './index.js'

export function setProfile({ id, name, phone }: { id: string, name?: string, phone: string }) {
    const payload = {
        $phone: phone
    }

    if (name) {
        payload['$name'] = name
    }

    // send to Mixpanel event
    const mp = getMixpanel()
    mp.people.set(id, payload)
}

export function linkedInClicked({ id, target, pathName }: { id: string, pathName: string, target: string }) {
    const mp = getMixpanel()
    
    mp.track('LinkedIn Clicked', {
        Target: target,
        distinct_id: id,
        PathName: pathName,
    })
}
