import { NextFunction, Request, Response } from 'express'

import { UsersRepository } from '@modules/users/infra/typeorm/repositories/UsersRepository'
import { AppError } from '@shared/errors/AppError'
import { IRequestCustom } from '@types'

export async function ensureAdmin(
  request: IRequestCustom,
  response: Response,
  next: NextFunction
) {
  const { id } = request.user

  const usersRepository = new UsersRepository()

  const user = await usersRepository.findById(id)

  if (!user.admin) {
    throw new AppError('User is not Admin')
  }

  return next()
}
