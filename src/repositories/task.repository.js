import dotenv from 'dotenv'
import { neon } from '@neondatabase/serverless'
dotenv.config()

export class TasksRepository {

constructor(sqlConnection) {
    this.sql = sqlConnection
}

async create(roomsId, bedsId, unitsId, usersId, statusId, description) {
    const result = await this.sql`
    INSERT INTO tasks (rooms_id, beds_id, units_id, users_id, status_id, description, created_at)
    VALUES (${roomsId}, ${bedsId}, ${unitsId}, ${usersId}, ${statusId}, ${description ?? null}, NOW())
    RETURNING *
    `;
    return result[0];
}

async find() {
    return await this.sql`SELECT * FROM tasks`
}

async findOne(id) {
    return await this.sql`SELECT * FROM tasks WHERE id = ${id}`;
}



async update(id, roomsId, bedsId, unitsId, usersId, statusId, description, acceptedAt, completedAt) {
    const result = await this.sql`
    UPDATE tasks
    SET rooms_id = ${roomsId},
    beds_id = ${bedsId},
    units_id = ${unitsId},
    users_id = ${usersId},
    status_id = ${statusId},
    description = ${description},
    accepted_at = ${acceptedAt},
    completed_at = ${completedAt}
    WHERE id = ${id}
    RETURNING *
    `
    return result[0];

}

async remove(id) {
    const result = await this.sql`
    DELETE FROM tasks WHERE id = ${id}
    RETURNING *`
    return result[0];
}

} 