import type { FastifyInstance } from 'fastify'
import { sayBye, sayHi } from '../controllers/incomes'

async function incomeRoutes(fastify: FastifyInstance) {
  fastify.get('/hi', sayHi)
  fastify.get('/bye', sayBye)
}

export default incomeRoutes
