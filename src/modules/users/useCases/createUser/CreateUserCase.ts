import {
  ICreateUserDTO,
  IUsersRepository
} from '../../repositories/IUsersRepository'

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute({
    name,
    username,
    password,
    email,
    driver_license,
    admin
  }: ICreateUserDTO): Promise<void> {
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
