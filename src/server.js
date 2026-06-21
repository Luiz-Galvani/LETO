import 'dotenv/config'
import express from 'express'
import staffController from './app/staff/staff.controller.js'
import taskController from './app/task/task.controller.js'
import userController from './app/user/user.controller.js'
import { neon } from '@neondatabase/serverless'

const app = express()
app.use(express.json())

// const sql = neon(process.env.DATABASE_URL)

app.get('/', (req, res) => {
    res.status(200).send('Servidor rodando!')
})

app.use('/user', userController)
app.use('/staff', staffController)
app.use('/tasks', taskController)

app.listen(process.env.PORT, () => {
    console.log(`Server running at http://localhost:${process.env.PORT}`)
})
