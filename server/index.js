const server = require('./server')
const position = require('./api/position')
const router = require('./router')
const requestHandlers = require('./requestHandler')

const handle = {}
handle['/'] = position.start
handle['/position'] = position.start
handle['/upload'] = requestHandlers.upload

server.start(router.route, handle)
