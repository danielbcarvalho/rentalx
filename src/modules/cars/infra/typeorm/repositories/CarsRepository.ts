import { getRepository, Repository } from 'typeorm'

import { ICreateCarDto } from '@modules/cars/dtos/ICreateCarDTO'
import { ICarsRepository } from '@modules/cars/repositories/ICarsRepository'

import { Car } from '../entities/Car'

class CarsRepository implements ICarsRepository {
  private repository: Repository<Car>

  constructor() {
    this.repository = getRepository(Car)
  }

  async create(data: ICreateCarDto): Promise<Car> {
    const car = this.repository.create(data)

    await this.repository.save(car)
    return car
  }
  async findByLicensePlate(license_plate: string): Promise<Car> {
    const car = await this.repository.findOne({
      license_plate
    })

    return car
  }

  async list(
    brand?: string,
    category_id?: string,
    name?: string
  ): Promise<Car[]> {
    const carsQuery = await this.repository
      .createQueryBuilder('queryCar')
      .where('available = :available', { available: true })

    if (brand) {
      carsQuery.andWhere('queryCar.brand = :brand', { brand })
    }

    if (name) {
      carsQuery.andWhere('queryCar.name = :name', { name })
    }

    if (category_id) {
      carsQuery.andWhere('queryCar.category_id = :category_id', { category_id })
    }

    const cars = await carsQuery.getMany()

    return cars
  }

  async findById(car_id: string): Promise<Car> {
    const car = await this.repository.findOne(car_id)

    return car
  }
}

export { CarsRepository }
