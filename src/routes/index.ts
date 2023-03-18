import type { FastifyInstance } from 'fastify'
import incomeRoutes from './income'
import outcomesRoutes from './outcomes'

async function routes(fastify: FastifyInstance) {
  fastify.register(incomeRoutes, { prefix: '/income' })
  fastify.register(outcomesRoutes, { prefix: '/outcomes' })
}

export default routes
