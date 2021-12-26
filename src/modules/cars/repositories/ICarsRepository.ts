import { ICreateCarDto } from '../dtos/ICreateCarDTO'
import { Car } from '../infra/typeorm/entities/Car'

interface ICarsRepository {
  create(data: ICreateCarDto): Promise<Car>
  findByLicensePlate(license_plate: string): Promise<Car>
  list(brand?: string, category_id?: string, name?: string): Promise<Car[]>
}

export { ICarsRepository }
