import http from 'http'

const server = http.createServer((req, res) => {
    
    if (req.method === 'GET' && req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' })
        res.end('API LETO rodando com sucesso! ')
    }

})
  /*   res.setHeader('Content-Type', 'application/json') */

    // GET /usuarios
 /*   if (req.method === 'GET' && req.url === '/usuarios') {
        res.writeHead(200)
        return res.end(JSON.stringify(usuarios))
    }
 */
server.listen(3000, () => {
    console.log(`Servidor rodando na porta ${server.address().port}`)
    console.log('Acesse http://localhost:3000 para verificar o status da API.')
})