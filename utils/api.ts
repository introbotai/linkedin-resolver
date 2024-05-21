import { type CORSConfig } from 'serverless-utilities'

export const cors: CORSConfig = {
    allowedOrigin: '*',
    allowCredentials: true,
    exposeHeaders: ['Location'],
    allowedMethods: ['delete', 'get', 'options', 'patch', 'post', 'put'],
    allowedHeaders: [
        'Origin',
        'Accept',
        'Content-Type',
        'Authorization',
        'X-Requested-With',
    ],
}