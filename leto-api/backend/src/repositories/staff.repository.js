import dotenv from 'dotenv'
import { neon } from '@neondatabase/serverless'
dotenv.config()


export class StaffRepository{
    constructor(sqlConnection){
        this.sql = sqlConnection
    }

    async create(name){
        const result = await this.sql`INSERT INTO staff (name) VALUES (${name}) RETURNING *`;
        return result[0];
    }

    async find(){
        return await this.sql`SELECT * FROM staff`
    }

    async remove(id){
        const result = await this.sql`DELETE FROM staff where id = ${id} RETURNING *`
        return result[0];
    }

    async update(id, name){
        const result = await this.sql`UPDATE staff SET name = ${name} WHERE id = ${id} RETURNING *`
        return result[0];
    }

    async findOne(id){
        return await this.sql`SELECT * FROM staff where id = ${id}`;
    }
}