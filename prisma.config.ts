/*
 *  Prisma configuration file for linkedin-resolver project
 *  Created On 26 Dec 2024
 */

import { defineConfig, env } from 'prisma/config'

export default defineConfig({
    schema: 'prisma/schema.prisma',
    datasource: {
        url: env('DATABASE_URL'),
    },
    migrations: {
        path: 'prisma/migrations',
    },
})