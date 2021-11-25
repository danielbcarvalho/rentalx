import { User } from '../entities/User'

interface ICreateUserDTO {
  name: string
  password: string
  email: string
  driver_license: string
  admin?: boolean
}

interface IUsersRepository {
  findByName(name: string): Promise<User>
  findByEmail(email: string): Promise<User>
  findById(id: string): Promise<User>
  list(): Promise<User[]>
  create({
    name,
    password,
    email,
    driver_license,
    admin
  }: ICreateUserDTO): Promise<void>
}

export { ICreateUserDTO, IUsersRepository }
