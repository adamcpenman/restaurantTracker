const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const restRouter = require('./api/restaurants/rest-router')

const server = express()

server.use(helmet())
server.use(cors())

server.use(express.json())

server.use('/restaurants', restRouter)

server.get("/", (req, res) => {
    res.send("YOU CAN DO THIS")
})

module.exports = server;