import { Response } from 'express'
import { container } from 'tsyringe'

import { IRequestCustom } from '@types'

import { ListRentalsByUserUseCase } from './ListRentaslByUserUseCase'

class ListRentalsByUserController {
  async handle(request: IRequestCustom, response: Response): Promise<Response> {
    const { id } = request.user
    const listRentalsByUserUseCase = container.resolve(ListRentalsByUserUseCase)
    const rentals = await listRentalsByUserUseCase.execute(id)

    return response.status(200).json(rentals)
  }
}

export { ListRentalsByUserController }
