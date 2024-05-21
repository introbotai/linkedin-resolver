/*
 *  Initializes a Prisma client database instance.
 *  Created On 21 May 2024
 */

import { PrismaClient } from '@prisma/client'

export const db = new PrismaClient()
