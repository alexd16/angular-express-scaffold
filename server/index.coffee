express = require 'express'
app = express()
port = 3000

app.get '/', (req, res) -> res.send({ message: 'Hello World' })

app.listen port, () -> console.log("listening at port #{port}")