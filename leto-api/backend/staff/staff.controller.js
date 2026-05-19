import express from 'express'
import { StaffService } from './staff.service.js'
import { StaffRepository } from '../repositories/staff.repository.js'
import { neon } from '@neondatabase/serverless'

const router = express.Router()

const sql = neon(process.env.DATABASE_URL)
const repository = new StaffRepository(sql)
const service = new StaffService(repository)

router.get('/', async (req, res) => {
    try {
        const result = await service.findStaff()
        res.status(200).send(result)
    } catch(error) {
        res.status(500).json({ error: error.message })
    }
})

router.post('/', async (req, res) => {
    try {
        const { name } = req.body;
        const result = await service.createStaff(name)
        res.status(201).send(result)
    } catch(error){
        res.status(500).json({ error: error.message })
    }
})

router.get('/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const result = await service.findById(id)
        res.status(200).send(result);
    } catch(error){
        res.status(500).json({ error: error.message })
    }
})

router.put('/:id', async (req, res) => {
    try {
        const { name } = req.body;
        const id = parseInt(req.params.id)
        const result = await service.updateStaff(id, name)
        res.status(200).send(result)
    } catch(error){
        res.status(500).json({ error: error.message })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const result = await service.removeStaff(id)
        res.status(200).send(result)
    } catch(error){
        res.status(500).json({ error: error.message })
    }
})

export default router;