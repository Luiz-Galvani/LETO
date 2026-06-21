import dotenv from 'dotenv'
import { neon } from '@neondatabase/serverless'

dotenv.config()

export class UserRepository {
    constructor(sqlConnection) {
        this.sql = sqlConnection
    }

    // Create USER
    async create(userData) {
        const { id, name, email, senha } = userData

        const result = await this.sql`
            INSERT INTO "user" (
                id,
                name,
                email,
                senha
            ) VALUES (
                ${id},
                ${name},
                ${email},
                ${senha}
            ) RETURNING *`

        return result[0]
    }

    // Get USERS
    async find() {
        return await this.sql`SELECT * FROM "user"`
    }

    // Get USER por ID
    async findOne(id) {
        const result = await this.sql`SELECT * FROM "user" WHERE id = ${id}`
        return result[0]
    }

    async findByEmail(email) {
        const result = await this.sql`
            SELECT * FROM "user" WHERE email = ${email}`
        return result[0]
    }

    // Update USER
    async update(id, userData) {
        const { name, email, senha } = userData

        const result = await this.sql`
            UPDATE "user"
            SET
                name = ${name},
                email = ${email},
                senha = ${senha}
            WHERE id = ${id}
            RETURNING *`

        return result[0]
    }

    // Delete USER
    async remove(id) {
        const result = await this.sql`
            DELETE FROM "user" WHERE id = ${id} RETURNING *`
        return result[0]
    }
}