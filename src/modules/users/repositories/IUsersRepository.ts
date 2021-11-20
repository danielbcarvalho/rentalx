import { User } from '../entities/User'

interface ICreateUserDTO {
  name: string
  username: string
  password: string
  email: string
  driver_license: string
  admin?: boolean
}

interface IUsersRepository {
  findByUsername(username: string): Promise<User>
  findByEmail(email: string): Promise<User>
  list(): Promise<User[]>
  create({
    name,
    username,
    password,
    email,
    driver_license,
    admin
  }: ICreateUserDTO): Promise<void>
}

export { ICreateUserDTO, IUsersRepository }
