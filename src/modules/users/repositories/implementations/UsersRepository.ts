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
    password,
    email,
    driver_license,
    admin
  }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
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

  async findByName(name: string): Promise<User> {
    const user = await this.repository.findOne({ name })

    return user
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({ email })

    return user
  }

  async findById(id: string): Promise<User> {
    const user = await this.repository.findOne({ id })

    return user
  }
}

export { UsersRepository }
