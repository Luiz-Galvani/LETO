import http from 'http'
import app from './app.js'

const server = http.createServer(app)

server.listen(3000, () => {
    console.log(`Servidor rodando na porta ${server.address().port}`)
    console.log('Acesse http://localhost:3000 para verificar o status da API.')
})


//PARA TESTAR O SERVIDOR, RODE O COMANDO: npm run dev ou npm run start