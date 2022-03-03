import { Response } from 'express'
import { container } from 'tsyringe'

import { IRequestCustom } from '@types'

import { DevolutionRentalUseCase } from './DevolutionRentalUseCase'
class DevolutionRentalController {
  async handle(request: IRequestCustom, response: Response): Promise<Response> {
    const { id: user_id } = request.user
    const { id } = request.params
    const devolutionRentalUseCase = container.resolve(DevolutionRentalUseCase)

    const rental = await devolutionRentalUseCase.execute({
      id,
      user_id
    })

    return response.status(200).json(rental)
  }
}

export { DevolutionRentalController }