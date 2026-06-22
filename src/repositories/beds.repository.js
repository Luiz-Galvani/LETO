import dotenv from "dotenv";
import { neon } from "@neondatabase/serverless";

dotenv.config();

const sql = neon(process.env.DB_HOST);

export class BedsRepository {
    constructor(database = sql) {
        this.database = database;
    }

    // Criar leito
    async create(bedData) {

        const {
            bed_code, 
            units_id,
            patients_id,
            rooms_id,
            bed_status
        } = bedData;

        const result = await this.database`
            INSERT INTO beds (
                bed_code,
                units_id,
                patients_id,
                rooms_id,
                bed_status
            )

            VALUES (
                ${bed_code},
                ${units_id},
                ${patients_id},
                ${rooms_id},
                ${bed_status}
            )

            RETURNING *
        `;

        return result[0];
    }

    async find() {

        const result = await this.database`
            SELECT * FROM beds
        `;

        return result;
    }

    async findOne(id) {

        const result = await this.database`
            SELECT * FROM beds
            WHERE id = ${id}
        `;

        return result[0];
    }

    async update(id, bedData) {

        const {
            bed_code, 
            units_id,
            patients_id,
            rooms_id,
            bed_status
        } = bedData;


        const result = await this.database`
            UPDATE beds
            SET
                bed_code = ${bed_code},
                units_id = ${units_id},
                patients_id = ${patients_id},
                rooms_id = ${rooms_id},
                bed_status = ${bed_status}

            WHERE id = ${id}

            RETURNING *
        `;

        return result[0];
    }

    async remove(id) {

        const result = await this.database`
            DELETE FROM beds
            WHERE id = ${id}
            RETURNING *
        `;

        return result[0];
    }
}