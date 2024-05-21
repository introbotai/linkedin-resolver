/*
 *  Resolves a to a LinkedIn profile, given their ID.
 *  Created On 21 May 2024
 */

import { func } from 'serverless-utilities'
import { get } from './_get.js'
import { cors } from '../utils/api.js'

export default func({
    cors,
    methods: {
        get,
    }
})
