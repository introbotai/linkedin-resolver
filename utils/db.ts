/*
 *  Database connection utility using Kysely for linkedin-resolver project
 *  Created On 21 May 2024
 */

import pg from 'pg'
import { customAlphabet } from 'nanoid'
import { Kysely, PostgresDialect } from 'kysely'
import type { DB } from '../prisma/types/database.js'

const { Pool } = pg

export const db = new Kysely<DB>({
    dialect: new PostgresDialect({
        pool: new Pool({
            connectionString: process.env.DATABASE_URL,
        }),
    }),
})

export const generateId = customAlphabet(
    '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
    6
)
