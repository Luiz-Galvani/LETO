import express from 'express'
import { neon } from '@neondatabase/serverless'
import dotenv from 'dotenv'
import { TasksService } from './task.service.js'
import { TasksRepository } from '../repositories/task.repository.js'

dotenv.config()

const router = express.Router()
const sql = neon(process.env.DATABASE_URL)
const repository = new TasksRepository(sql)
const service = new TasksService(repository)
//----------------GET----------------
router.get('/', async (req, res) => {
    try {
        const result = await service.findTasks()
        res.status(200).send(result)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})//----------------GET com ID----------------

router.get('/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const result = await service.findById(id)
        res.status(200).send(result)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})
//---------------POST----------------
router.post('/', async (req, res) => {
    try {
        const {roomsId, bedsId, unitsId, usersId, statusId} = req.body
        const result = await service.createTask(
            parseInt(roomsId),
            parseInt(bedsId),
            parseInt(unitsId),
            parseInt(usersId),
            parseInt(statusId)
        )
        res.status(201).send(result)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})
//----------------PUT----------------
router.put('/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const {roomsId, bedsId, unitsId, usersId, statusId, acceptedAt, completedAt} = req.body

        const result = await service.updateTask(
            id,
            parseInt(roomsId),
            parseInt(bedsId),
            parseInt(unitsId),
            parseInt(usersId),
            parseInt(statusId),
            acceptedAt ?? null,
            completedAt ?? null
        )

        res.status(200).send(result)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})
//----------------DELETE----------------
router.delete('/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const result = await service.removeTask(id)
        res.status(200).send(result)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})

export default router
