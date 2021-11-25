import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'

import { UsersRepository } from '../modules/users/repositories/implementations/UsersRepository'

interface IPayload {
  sub: string
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> {
  const authHeader = request.headers.authorization

  if (!authHeader) {
    throw new Error('Token missing!')
  }

  // Bearer yuasgdgsaiugiudasgudsa5344sa7ds987#
  // [0] = Bearer
  // [1] = jhidskhjdhdhkshkhdaskh
  const [, token] = authHeader.split(' ')

  try {
    const { sub: user_id } = verify(token, 'chaveSecreta') as IPayload

    const usersRepository = new UsersRepository()

    const user = usersRepository.findById(user_id)

    if (!user) {
      throw new Error('User does not exists!')
    }

    next()
  } catch (error) {
    throw new Error('Invalid token')
  }
}
