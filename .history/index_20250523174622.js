const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/:id', (req, res) => {
	res.send('Request parameter is: ' + req.param)
	res.send('Response is:', req.params)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
