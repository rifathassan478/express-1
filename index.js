const express = require('express')
const phones = require('./phones.json')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/phones', (req, res) => {
	res.send(phones)
})

app.get('/api/:id', (req, res) => {
	res.send('Request parameter is: ' + req.params.id)
	res.send('Response is:', req.params.id)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
