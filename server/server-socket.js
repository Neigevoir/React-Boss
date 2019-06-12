const app = require('express')()
const server = require('http').createServer(app)
const io = require('socket.io')(server)

let arr = []
let user = 0

io.on('connection', socket => {
  console.log('Someone Connect Socket！')
  socket.emit('message', 'Socket Init')
  ++user
  socket.emit('userid', user)
  if (arr.length !== 0) {
    io.sockets.emit('communication', {
      id: user,
      data: arr
    })
  }
  socket.on('message', message => {
    if (message == 'success') {
      socket.emit('message', '那你很棒哦')
    }
    socket.emit('message', message)
  })
  socket.on('communication', data => {
    if (data) {
      arr.push(data)
      io.sockets.emit('communication', {
        id: user,
        data: arr
      })
    }
  })
})

server.listen(8000, '0.0.0.0', err => {
  err ? console.log(err) : console.log('Listening on %d', server.address().port)
})
