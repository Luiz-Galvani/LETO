import dotenv from 'dotenv'
import { neon } from '@neondatabase/serverless'

dotenv.config()

export class UserRepository {
    constructor(sqlConnection) {
        this.sql = sqlConnection
    }//funções de acesso ao banco de dados

    // Create USER
    async create(userData) {
        const {
            cpf,
            email,
            phone,
            password,
            first_name,
            last_name,
            birthday,
            gender
        } = userData

        const result = await this.sql
        ` 
            INSERT INTO users (
                cpf,
                email,
                phone,
                password,
                first_name,
                last_name,
                birthday,
                gender
            )

            VALUES (
                ${cpf},
                ${email},
                ${phone},
                ${password},
                ${first_name},
                ${last_name},
                ${birthday},
                ${gender}
            )

            RETURNING *`

        return result[0]
    } //cria um elemento na tabela users

    // Get USERS
    async find() {
        return await this.sql
        `SELECT * FROM users`
    }

    // Get USER por ID
    async findOne(id) {

        const result = await this.sql
        ` SELECT * FROM users
          WHERE id = ${id}`

        return result[0]
    }

    // Update USER
    async update(id, userData) {

        const {
            cpf,
            email,
            phone,
            password,
            first_name,
            last_name,
            birthday,
            gender
        } = userData

        const result = await this.sql
        ` UPDATE user
            SET
                cpf = ${cpf},
                email = ${email},
                phone = ${phone},
                password = ${password},
                first_name = ${first_name},
                last_name = ${last_name},
                birthday = ${birthday},
                gender = ${gender}

            WHERE id = ${id}
            RETURNING *`

        return result[0]
    }

    // Delete USER
    async remove(id) {

        const result = await this.sql
        `
            DELETE FROM user
            WHERE id = ${id}
            RETURNING *

        `

        return result[0]
    }
}