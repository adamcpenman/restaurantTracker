const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const server = express()

server.use(helmet())
server.use(cors())

server.get("/", (req, res) => {
    res.send("YOU CAN DO THIS")
})

module.exports = server;