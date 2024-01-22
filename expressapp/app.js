const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, resp) => {
  resp.send('Welcome to the most wonderful place in the world!')
})

app.listen(port, () => {
  console.log(`Express App listening on port ${port}`)
})