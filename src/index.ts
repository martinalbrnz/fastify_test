import fastifyEnv from '@fastify/env'
import fastify from 'fastify'
import dbConnector from './helpers/db'
import routes from './routes'

const server = fastify({
  logger: true,
})

const schema = {
  type: 'object',
  required: ['PORT', 'DB_URI'],
  properties: {
    PORT: {
      type: 'string',
      default: '8080'
    },
    DB_URI: {
      type: 'string'
    }
  }
}

const options = {
  dotenv: true,
  schema
}

server.register(fastifyEnv, options).ready((err) => { if (err) console.error(err) })
server.register(dbConnector)
server.register(routes)


server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})
