import { Router } from 'express'

import { CreateUserController } from '../modules/users/useCases/createUser/CreateUserController'
import { ListUserController } from '../modules/users/useCases/listUser/ListUserController'

const usersRoutes = Router()

const createUserController = new CreateUserController()
const listUserController = new ListUserController()

usersRoutes.post('/', createUserController.handle)
usersRoutes.get('/', listUserController.handle)

export { usersRoutes }
