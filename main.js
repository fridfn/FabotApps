const express = require('express')
const app = express()
const port = 3000

app.get('/', (request, respon) => {
 respon.send('ini adalah tampilan utama kita !!');
})

app.get('/hello', (req, res) => {
  res.send('Hello Worlds!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})