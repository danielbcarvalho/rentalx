import { getRepository, Repository } from 'typeorm'

import { User } from '../../entities/User'
import { ICreateUserDTO, IUsersRepository } from '../IUsersRepository'

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>

  constructor() {
    this.repository = getRepository(User)
  }

  async create({
    name,
    username,
    password,
    email,
    driver_license,
    admin
  }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      username,
      password,
      email,
      driver_license,
      admin
    })

    await this.repository.save(user)
  }

  async list(): Promise<User[]> {
    const users = await this.repository.find()

    return users
  }

  async findByUsername(username: string): Promise<User> {
    const user = await this.repository.findOne({ username })

    return user
  }
}

export { UsersRepository }
