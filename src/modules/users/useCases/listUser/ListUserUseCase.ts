import { inject, injectable } from 'tsyringe'

import { User } from '@modules/users/infra/typeorm/entities/User'

import { IUsersRepository } from '../../repositories/IUsersRepository'

@injectable()
class ListUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute(): Promise<User[]> {
    const users = await this.usersRepository.list()

    return users
  }
}

export { ListUserUseCase }
