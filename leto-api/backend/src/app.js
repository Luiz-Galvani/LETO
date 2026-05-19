import express from 'express'

import userRoutes from './routes/userRoutes.js'

const app = express()

// permite receber JSON
app.use(express.json())

// rota principal
app.get('/', (req, res) => {
    res.send('API LETO rodando com sucesso!')
})

// rotas de usuários
app.use('/users', userRoutes)

export default app