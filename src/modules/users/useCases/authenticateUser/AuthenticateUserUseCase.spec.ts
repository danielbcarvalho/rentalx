import { AppError } from '../../../../shared/errors/AppError'
import { UserRepositoryInMemory } from '../../repositories/in-memory/UsersRepositoryInMemory'
import { ICreateUserDTO } from '../../repositories/IUsersRepository'
import { CreateUserUseCase } from '../createUser/CreateUserUseCase'
import { AuthenticateUserUseCase } from './AuthenticateUserUseCase'

let authenticateUserUseCase: AuthenticateUserUseCase
let usersRepositoryInMemory: UserRepositoryInMemory
let createUserUseCase: CreateUserUseCase

describe('Authenticate User', () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UserRepositoryInMemory()
    authenticateUserUseCase = new AuthenticateUserUseCase(
      usersRepositoryInMemory
    )
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory)
  })

  it('should be able to authenticate an user', async () => {
    const user: ICreateUserDTO = {
      driver_license: '00123',
      email: 'test@test.com',
      password: '1234',
      name: 'Test User'
    }

    await createUserUseCase.execute(user)

    const result = await authenticateUserUseCase.execute({
      email: user.email,
      password: user.password
    })

    expect(result).toHaveProperty('token')
  })

  it('should not be able to authenticate an nonexistent user', () => {
    expect(async () => {
      await authenticateUserUseCase.execute({
        email: 'false@mail.com',
        password: '1234'
      })
    }).rejects.toBeInstanceOf(AppError)
  })

  it('should not be able to authenticate an user with wrong password', () => {
    expect(async () => {
      const user: ICreateUserDTO = {
        driver_license: '00123',
        email: 'test@test.com',
        password: '1234',
        name: 'Test User'
      }

      await createUserUseCase.execute(user)

      await authenticateUserUseCase.execute({
        email: user.email,
        password: '54321'
      })
    }).rejects.toBeInstanceOf(AppError)
  })
})
