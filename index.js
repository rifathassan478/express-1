const express = require('express')
const phones = require('./phones.json')
var cors = require('cors')
const app = express()
const port =  process.env.port || 3000

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/phones', (req, res) => {
	res.send(phones)
})

app.get('/phone/:id', (req, res) => {
	const id = parseInt(req.params.id);
	const phone = phones.find(ph => ph.id === id);
	res.send(phone);
	console.log('Showing phone', id);
})

app.post('/phones', (req, res) => {
	const newPhone = req.body;
	newPhone.id = phones.length + 1;
	phones.push(newPhone);
	res.send(newPhone);
})

app.get('/api/:id', (req, res) => {
	res.send('Request parameter is: ' + req.params.id)
	res.send('Response is:', req.params.id)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
