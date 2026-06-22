(async () => {
  try {
    const res = await fetch('http://localhost:3000/user', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: 10, name: 'Teste 99', email: 'teste99@example.com', senha: '1234' })
    })
    const text = await res.text()
    try { console.log(JSON.parse(text)) } catch (e) { console.log(text) }
  } catch (e) {
    console.error(e)
  }
})()
