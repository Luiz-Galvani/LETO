import dotenv from 'dotenv'
import { neon } from '@neondatabase/serverless'
dotenv.config()


const sql = neon(process.env.DATABASE_URL);

export const requestHandler = async (req, res) => {
    try {
        const result = await sql`SELECT version()`;
        const { version } = result[0];
        console.log('Neon Database Connected Successfully!')
        console.log('PostgreSQL Version: ', version)
    } catch(error){
        console.log('Neon Database Connection Failed: ', error)
    }
};