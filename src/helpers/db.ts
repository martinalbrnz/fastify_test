// ESM
import fastifyMongo from '@fastify/mongodb'
import type { FastifyInstance } from 'fastify'
import fastifyPlugin from 'fastify-plugin'

async function dbConnector(fastify: FastifyInstance) {
  fastify.register(fastifyMongo, {
    url: fastify.config.DB_URI
  })
}

export default fastifyPlugin(dbConnector)
