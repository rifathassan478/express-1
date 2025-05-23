const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api', (req, res) => {

app.listen(port, (req, res) => {
  console.log(`Example app listening on port ${port}`)
  console.log('Request is ', req)
  console.log('Response is ', res)
})
