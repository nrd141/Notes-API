const Hapi = require('@hapi/hapi')
const routes = require('./routes')
console.log('Test')

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*']
      }
    }
  })
  server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      return 'Welcome to my Notes API, to properly use it please refer to the documentation on https://github.com/nrd141/Notes-API/blob/main/README.md'
    }
  })
  server.route(routes)
  await server.start()
  console.log(`Server berjalan pada ${server.info.uri}`)
}

init()
