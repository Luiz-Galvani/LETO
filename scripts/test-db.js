import dotenv from 'dotenv'
import { neon } from '@neondatabase/serverless'

dotenv.config()

const url = process.env.DATABASE_URL || process.env.DB_HOST
if (!url) {
    console.error('Defina DATABASE_URL ou DB_HOST no arquivo .env')
    process.exit(1)
}

const sql = neon(url)

async function test() {
    try {
        const result = await sql`SELECT version()`
        const { version } = result[0] || {}
        console.log('✅ Conexão com o Neon estabelecida! Versão do banco:', version)
        process.exit(0)
    } catch (error) {
        console.error('Falha na conexão:', error.message || error)
        process.exit(1)
    }
}

test()
