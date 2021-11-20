import { inject, injectable } from 'tsyringe'

import {
  ICreateUserDTO,
  IUsersRepository
} from '../../repositories/IUsersRepository'

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute({
    name,
    username,
    password,
    email,
    driver_license,
    admin
  }: ICreateUserDTO): Promise<void> {
    const usernameAlreadyExists = await this.usersRepository.findByUsername(
      username
    )

    if (usernameAlreadyExists) {
      throw new Error('username already exists')
    }

    const emailAlreadyExists = await this.usersRepository.findByEmail(email)

    if (emailAlreadyExists) {
      throw new Error('email already exists')
    }

    this.usersRepository.create({
      name,
      username,
      password,
      email,
      driver_license,
      admin
    })
  }
}

export { CreateUserUseCase }
