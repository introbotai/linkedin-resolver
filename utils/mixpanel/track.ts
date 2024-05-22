/*
 *  Contains Mixpanel events and their payloads.
 *  Created On 22 May 2024
 */

import { getMixpanel } from './index.js'

interface SetProfile { id: string, name?: string, phone: string }

export function setProfile({ id, name, phone }: SetProfile): Promise<void> {
    return new Promise((resolve, reject) => {
        const payload = {
            $phone: phone
        }
    
        if (name) {
            payload['$name'] = name
        }
    
        // send to Mixpanel event
        const mp = getMixpanel()
        mp.people.set(id, payload, (err) => {
            if (err) return reject(err)
            resolve()
        })
    })
}

interface LinkedInClicked { id: string, pathName: string, target: string }

export function linkedInClicked({ id, target, pathName }: LinkedInClicked): Promise<void> {
    return new Promise((resolve, reject) => {
        const mp = getMixpanel()
    
        mp.track(
            'LinkedIn Clicked',
            {
                Target: target,
                distinct_id: id,
                PathName: pathName,
            },
            (err) => {
                if (err) return reject(err)
                resolve()
            }
        )
    })
}
