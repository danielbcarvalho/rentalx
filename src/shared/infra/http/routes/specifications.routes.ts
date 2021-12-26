import { Router } from 'express'

import { CreateSpecificationController } from '../../../../modules/cars/useCases/createSpecification/CreateSpecificationController'
import { ListSpecificationsController } from '../../../../modules/cars/useCases/listSpecifications/ListSpecificationsController'
import { ensureAdmin } from '../middlewares/ensureAdmin'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'

const createSpecificationController = new CreateSpecificationController()
const listSpecificationsController = new ListSpecificationsController()

const specificationsRoutes = Router()

specificationsRoutes.use(ensureAuthenticated)

specificationsRoutes.post(
  '/',
  ensureAuthenticated,
  ensureAdmin,
  createSpecificationController.handle
)

specificationsRoutes.get('/', listSpecificationsController.handle)

export { specificationsRoutes }
