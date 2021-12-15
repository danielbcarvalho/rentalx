import { hash } from 'bcryptjs'
import { inject, injectable } from 'tsyringe'

import { AppError } from '@errors/AppError'
import {
  ICreateUserDTO,
  IUsersRepository
} from '@modules/users/repositories/IUsersRepository'

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute({
    name,
    password,
    email,
    driver_license,
    admin
  }: ICreateUserDTO): Promise<void> {
    const nameAlreadyExists = await this.usersRepository.findByName(name)

    if (nameAlreadyExists) {
      throw new AppError('name already exists')
    }

    const passwordHash = await hash(password, 8)

    const emailAlreadyExists = await this.usersRepository.findByEmail(email)

    if (emailAlreadyExists) {
      throw new AppError('email already exists')
    }

    this.usersRepository.create({
      name,
      password: passwordHash,
      email,
      driver_license,
      admin
    })
  }
}

export { CreateUserUseCase }
