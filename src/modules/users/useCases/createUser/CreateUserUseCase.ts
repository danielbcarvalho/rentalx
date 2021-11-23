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
    password,
    email,
    driver_license,
    admin
  }: ICreateUserDTO): Promise<void> {
    const nameAlreadyExists = await this.usersRepository.findByName(name)

    if (nameAlreadyExists) {
      throw new Error('name already exists')
    }

    const emailAlreadyExists = await this.usersRepository.findByEmail(email)

    if (emailAlreadyExists) {
      throw new Error('email already exists')
    }

    this.usersRepository.create({
      name,
      password,
      email,
      driver_license,
      admin
    })
  }
}

export { CreateUserUseCase }
