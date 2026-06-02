import express from 'express'
import { neon } from '@neondatabase/serverless'
import { UserService } from './user.service.js'
import { UserRepository } from '../../repositories/user.repository.js'

const router = express.Router()

// conexão com o banco de dados
const sql = neon(process.env.DB_HOST)
const repository = new UserRepository(sql)
const service = new UserService(repository)

// Get USER
router.get('/', async (req, res) => {

    try {
        const result = await service.findUser()
        res.status(200).send(result)

    } catch (error) {
        res.status(500).json({error: error.message})
    }
})


// Get USER por ID
router.get('/:id', async (req, res) => {

    try {
        const id = parseInt(req.params.id)
        const result = await service.findById(id)
        res.status(200).send(result)

    } catch (error) {
        res.status(500).json({error: error.message})
    }
})

// Post USER
router.post('/', async (req, res) => {

    try {
        // dados enviados no body da req
        const userData = req.body
        const result = await service.createUser(userData)
        res.status(201).send(result)

    } catch (error) {
        res.status(500).json({error: error.message})
    }
})


// Update USER
router.put('/:id', async (req, res) => {

    try {
        // pega o id da url
        const id = parseInt(req.params.id)
        // pega os dados enviados no body
        const userData = req.body
        const result = await service.updateUser(
            id,
            userData
        )
        res.status(200).send(result)

    } catch (error) {

        res.status(500).json({error: error.message})
    }
})

// Delete USER
router.delete('/:id', async (req, res) => {

    try {
        const id = parseInt(req.params.id)
        const result = await service.removeUser(id)
        res.status(200).send(result)

    } catch (error) {
        res.status(500).json({error: error.message})
    }
})

export default router