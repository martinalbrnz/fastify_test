import type { FastifyReply, FastifyRequest } from 'fastify'

export async function sayHi(req: FastifyRequest, res: FastifyReply) {
  console.log(req)
  res.send({ msg: 'Hi mom!' })
}

export async function sayBye(req: FastifyRequest, res: FastifyReply) {
  console.log(req)
  res.send({ msg: 'Bye mom!' })
}
