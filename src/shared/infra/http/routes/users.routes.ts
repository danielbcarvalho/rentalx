import { Router } from 'express'
import multer from 'multer'

import upload from '../../../../config/upload'
import { CreateUserController } from '../../../../modules/users/useCases/createUser/CreateUserController'
import { ListUserController } from '../../../../modules/users/useCases/listUser/ListUserController'
import { UpdateUserAvatarController } from '../../../../modules/users/useCases/updateUserAvatar/UpdateUserAvatarController'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'

const usersRoutes = Router()

const uploadAvatar = multer(upload.upload('./tmp/avatar'))

const createUserController = new CreateUserController()
const listUserController = new ListUserController()
const updateUserAvatarController = new UpdateUserAvatarController()

usersRoutes.post('/', createUserController.handle)
usersRoutes.get('/', listUserController.handle)

usersRoutes.patch(
  '/avatar',
  ensureAuthenticated,
  uploadAvatar.single('avatar'),
  updateUserAvatarController.handle
)

export { usersRoutes }
