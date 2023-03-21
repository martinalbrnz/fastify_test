import type { FastifyInstance } from 'fastify'
import { sayBye, sayHi } from '../controllers/outcomes'

async function outcomesRoutes(fastify: FastifyInstance) {
  fastify.get('/hi', sayHi)
  fastify.get('/bye', sayBye)
}

export default outcomesRoutes

