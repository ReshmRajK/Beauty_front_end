const express = require('express')
require('dotenv').config()

require('./connection/db_connection')
const route = require('./router/routing')

const server = express()
const cors = require('cors')

server.use(express.json())
server.use(cors())
server.use(route)

const port = 4000 || process.env.port


server.listen(port, () => {
    console.log(`server run at port number ${port}`);
})


