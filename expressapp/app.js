const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, resp) => {
  resp.send('Dockerizing Node Application')
})

app.listen(port, () => {
  console.log(`⚡️[bootup]: Express App listening on port ${port}`)
})