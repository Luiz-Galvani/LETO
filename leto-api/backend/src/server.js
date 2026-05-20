import dotenv from 'dotenv'
import express from 'express'
import staffController from './app/staff/staff.controller.js'
import { neon } from '@neondatabase/serverless'


dotenv.config()

const app = express()
app.use(express.json())

// const sql = neon(process.env.DATABASE_URL)

app.get('/', (req, res) => {
    res.status(200).send('Hello World')
})

app.use('/staff', staffController)

app.listen(process.env.PORT, () => {
    console.log(`Server running at http://localhost:${process.env.PORT}`)
})
