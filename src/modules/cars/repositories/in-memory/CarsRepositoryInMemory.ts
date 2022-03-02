import { ICreateCarDto } from '@modules/cars/dtos/ICreateCarDTO'
import { Car } from '@modules/cars/infra/typeorm/entities/Car'

import { ICarsRepository } from '../ICarsRepository'

class CarsRepositoryInMemory implements ICarsRepository {
  cars: Car[] = []

  async create(data: ICreateCarDto): Promise<Car> {
    const car = new Car()

    Object.assign(car, data)

    this.cars.push(car)

    return car
  }

  async findByLicensePlate(license_plate: string): Promise<Car> {
    return this.cars.find((car) => car.license_plate === license_plate)
  }

  async list(
    brand?: string,
    category_id?: string,
    name?: string
  ): Promise<Car[]> {
    const availableCars = this.cars.filter((car) => car.available)

    if (brand || category_id || name) {
      const queryCars = availableCars.filter(
        (car) =>
          (name && car.name === name) ||
          (brand && car.brand === brand) ||
          (category_id && car.category_id === category_id)
      )

      return queryCars
    }

    return availableCars
  }

  async findById(car_id: string): Promise<Car> {
    const car = this.cars.find((car) => car.id === car_id)

    return car
  }

  async updateAvailable(car_id: string, available: boolean): Promise<void> {
    const findIndex = this.cars.findIndex((car) => car.id === car_id)
    this.cars[findIndex].available = available
  }
}

export { CarsRepositoryInMemory }
