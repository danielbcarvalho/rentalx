import { User } from '../../entities/User'
import { ICreateUserDTO, IUsersRepository } from '../IUsersRepository'

class UserRepositoryInMemory implements IUsersRepository {
  users: User[] = []

  async create({
    name,
    admin,
    email,
    password,
    driver_license
  }: ICreateUserDTO): Promise<void> {
    const user = new User()

    Object.assign(user, {
      name,
      admin,
      email,
      password,
      driver_license
    })

    this.users.push(user)
  }
  async findByName(name: string): Promise<User> {
    return this.users.find((user) => user.name === name)
  }
  async findByEmail(email: string): Promise<User> {
    return this.users.find((user) => user.email === email)
  }
  async findById(id: string): Promise<User> {
    return this.users.find((user) => user.id === id)
  }
  async list(): Promise<User[]> {
    return this.users
  }
}

export { UserRepositoryInMemory }
