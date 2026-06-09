import express from "express";
import dotenv from "dotenv";
import { neon } from "@neondatabase/serverless";

import { BedsService } from "./beds.service.js";
import { BedsRepository } from "../../repositories/beds.repository.js";

dotenv.config();

const router = express.Router();

const sql = neon(process.env.DB_HOST);

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

// Buscar leito por id
router.get("/:id", async (req, res) => {
    try {

        const id = parseInt(req.params.id);

        const result = await service.findBedById(id);

        res.status(200).send(result);

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }
});

// Metodo Criar leito
router.post("/", async (req, res) => {
    try {

        const {
            units_id,
            patients_id,
            rooms_id,
            bed_code, // Corrigido para singular e sem bedscol
            bed_status
        } = req.body;

        const result = await service.createBed({
            units_id,
            patients_id,
            rooms_id,
            bed_code,
            bed_status
        });

        res.status(201).send(result);

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }
});

// Atualizar Leito
router.put("/:id", async (req, res) => {
    try {

        const id = parseInt(req.params.id);

        const {
            units_id,
            patients_id,
            rooms_id,
            bed_code, // Corrigido para singular e sem bedscol
            bed_status
        } = req.body;

        const result = await service.updateBed(id, {
            units_id,
            patients_id,
            rooms_id,
            bed_code,
            bed_status
        });

        res.status(200).send(result);

    } catch (error) {

        res.status(500).json({
            error: error.message
        });
    }
});

// Deletar Leito
router.delete("/:id", async (req, res) => {
    try {

        const id = parseInt(req.params.id);

        const result = await service.removeBed(id);

        res.status(200).send(result);

    } catch (error) {

        res.status(500).json({
            error: error.message
        });
    }
});

export default router;