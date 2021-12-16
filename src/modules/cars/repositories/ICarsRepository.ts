import { ICreateCarDto } from '../dtos/ICreateCarDTO'

interface ICarsRepository {
  create(data: ICreateCarDto): Promise<void>
}

export { ICarsRepository }
