import dotenv from "dotenv";
import { neon } from "@neondatabase/serverless";

dotenv.config();

const sql = neon(process.env.DATABASE_URL);

export class BedsRepository {
    constructor(database = sql) {
        this.database = database;
    }

    // Criar leito
    async create(bedData) {

        const {
            bedscol,
            units_id,
            patients_id,
            rooms_id,
            beds_code,
            bed_status
        } = bedData;

        const result = await this.database`
            INSERT INTO beds (
                bedscol,
                units_id,
                patients_id,
                rooms_id,
                beds_code,
                bed_status
            )

            VALUES (
                ${bedscol},
                ${units_id},
                ${patients_id},
                ${rooms_id},
                ${beds_code},
                ${bed_status}
            )

            RETURNING *
        `;

        return result[0];
    }

    // Buscar todos os leitos
    async find() {

        const result = await this.database`
            SELECT * FROM beds
        `;

        return result;
    }

    // Buscar leito por id
    async findOne(id) {

        const result = await this.database`
            SELECT * FROM beds
            WHERE id = ${id}
        `;

        return result[0];
    }

    // Atualizar leito
    async update(id, bedData) {

        const {
            bedscol,
            units_id,
            patients_id,
            rooms_id,
            beds_code,
            bed_status
        } = bedData;

        const result = await this.database`
            UPDATE beds
            SET
                bedscol = ${bedscol},
                units_id = ${units_id},
                patients_id = ${patients_id},
                rooms_id = ${rooms_id},
                beds_code = ${beds_code},
                bed_status = ${bed_status}

            WHERE id = ${id}

            RETURNING *
        `;

        return result[0];
    }

    // Deletar leito
    async remove(id) {

        const result = await this.database`
            DELETE FROM beds
            WHERE id = ${id}
            RETURNING *
        `;

        return result[0];
    }
}