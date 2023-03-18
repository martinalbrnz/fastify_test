import type { FastifyInstance, FastifyPluginOptions } from 'fastify'
import incomesRoutes from './incomes'
import outcomesRoutes from './outcomes'

async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
  console.log(options)
  fastify.register(incomesRoutes, { prefix: '/incomes' })
  fastify.register(outcomesRoutes, { prefix: '/outcomes' })
}

export default routes
