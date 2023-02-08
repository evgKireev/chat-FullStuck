const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)

const rooms = new Map()

app.get('/rooms', (req, res) => {
  res.json(rooms)
})

server.listen(9999, (err) => {
  if (err) {
    throw Error(err)
  }
  console.log('Start server')
})
