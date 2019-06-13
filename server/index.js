const server = require('./server')
const position = require('./api/position')
const router = require('./router')

const handle = {}
handle['/'] = position.start
handle['/position'] = position.start

server.start(router.route, handle)
