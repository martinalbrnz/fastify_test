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
      type: 'number',
      default: 8080
    },
    DB_URI: {
      type: 'string'
    }
  }
}

const options = {
  dotenv: true,
  schema,
  data: process.env
}

const initialize = async () => {
  server.register(fastifyEnv, options)
  await server.after()
  server.register(dbConnector)
  server.register(routes)
}

(async () => {
  try {
    initialize()
    await server.ready()
    await server
      .listen({ port: server.config.PORT }, (_, address) => console.log(`Server listening at ${address}`))
  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
})()
