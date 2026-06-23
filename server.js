import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import taskController from './src/app/task/task.controller.js'
import staffController from './src/app/staff/staff.controller.js'
import userController from './src/app/user/user.controller.js'
import bedsController from './src/app/beds/beds.controller.js'
import { neon } from '@neondatabase/serverless'

const app = express()
app.use(cors())
app.use(express.json())

// const sql = neon(process.env.DATABASE_URL)

app.get('/', (req, res) => {
    res.status(200).send('Servidor rodando!')
})

app.use('/user', userController)
app.use('/staff', staffController)
app.use('/tasks', taskController)
app.use('/beds', bedsController)
app.listen(process.env.PORT, () => {
    console.log(`Server running at http://localhost:${process.env.PORT}`)
})
