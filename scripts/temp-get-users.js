(async () => {
  try {
    const res = await fetch('http://localhost:3000/user')
    const text = await res.text()
    try { console.log(JSON.parse(text)) } catch (e) { console.log(text) }
  } catch (e) {
    console.error(e)
  }
})()
