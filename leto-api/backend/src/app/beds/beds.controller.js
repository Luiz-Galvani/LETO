import express from "express";
import dotenv from "dotenv";
import { neon } from "@neondatabase/serverless";

import { BedsService } from "./beds.service.js";
import { BedsRepository } from "../../repositories/beds.repository.js";

dotenv.config();

const router = express.Router();

const sql = neon(process.env.DATABASE_URL);

const repository = new BedsRepository(sql);
const service = new BedsService(repository);

// Buscar todos os leitos
router.get("/", async (req, res) => {
    try {

        const result = await service.findBeds();

        res.status(200).send(result);

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }
});

