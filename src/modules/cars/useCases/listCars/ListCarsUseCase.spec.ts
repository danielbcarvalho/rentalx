import { CarsRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory'

import { ListCarsUseCase } from './ListCarsUseCase'

let listCarsUseCase: ListCarsUseCase
let carsRepositoryInMemory: CarsRepositoryInMemory

describe('List Cars', () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory()
    listCarsUseCase = new ListCarsUseCase(carsRepositoryInMemory)
  })

  it('should be able to list all cars', async () => {
    const car1 = await carsRepositoryInMemory.create({
      name: 'Car 1',
      description: 'Car description',
      daily_rate: 140,
      license_plate: 'ABC-1234',
      fine_amount: 50,
      brand: 'Car Brand',
      category_id: 'category_id'
    })

    const car2 = await carsRepositoryInMemory.create({
      name: 'Car 2',
      description: 'Car description 2',
      daily_rate: 140,
      license_plate: 'ABC-1234',
      fine_amount: 50,
      brand: 'Car Brand',
      category_id: 'category_id'
    })

    const cars = await listCarsUseCase.execute({})

    expect(cars).toEqual([car1, car2])
  })

  it('should be able to list all available cars by brand', async () => {
    await carsRepositoryInMemory.create({
      name: 'Car 1',
      description: 'Car description',
      daily_rate: 140,
      license_plate: 'ABC-1234',
      fine_amount: 50,
      brand: 'Car Brand other',
      category_id: 'category_id'
    })

    await carsRepositoryInMemory.create({
      name: 'Car 2',
      description: 'Car description 2',
      daily_rate: 140,
      license_plate: 'ABC-1234',
      fine_amount: 50,
      brand: 'Car Brand Test',
      category_id: 'category_id'
    })

    await carsRepositoryInMemory.create({
      name: 'Car 3',
      description: 'Car description 3',
      daily_rate: 140,
      license_plate: 'ABC-1234',
      fine_amount: 50,
      brand: 'Car Brand Test',
      category_id: 'category_id'
    })

    const cars = await listCarsUseCase.execute({
      brand: 'Car Brand Test'
    })

    expect(cars).toHaveLength(2)
  })

  it('should be able to list all available cars by name', async () => {
    await carsRepositoryInMemory.create({
      name: 'Car 1',
      description: 'Car description',
      daily_rate: 140,
      license_plate: 'ABC-1234',
      fine_amount: 50,
      brand: 'Car Brand other',
      category_id: 'category_id'
    })

    await carsRepositoryInMemory.create({
      name: 'Car 2',
      description: 'Car description 2',
      daily_rate: 140,
      license_plate: 'ABC-1234',
      fine_amount: 50,
      brand: 'Car Brand Test',
      category_id: 'category_id'
    })

    await carsRepositoryInMemory.create({
      name: 'Car 3',
      description: 'Car description 3',
      daily_rate: 140,
      license_plate: 'ABC-1234',
      fine_amount: 50,
      brand: 'Car Brand Test',
      category_id: 'category_id'
    })

    const cars = await listCarsUseCase.execute({
      name: 'Car 1'
    })

    expect(cars).toHaveLength(1)
  })

  it('should be able to list all available cars by category_id', async () => {
    await carsRepositoryInMemory.create({
      name: 'Car 1',
      description: 'Car description',
      daily_rate: 140,
      license_plate: 'ABC-1234',
      fine_amount: 50,
      brand: 'Car Brand other',
      category_id: 'category_id'
    })

    await carsRepositoryInMemory.create({
      name: 'Car 2',
      description: 'Car description 2',
      daily_rate: 140,
      license_plate: 'ABC-1234',
      fine_amount: 50,
      brand: 'Car Brand Test',
      category_id: 'category_id'
    })

    await carsRepositoryInMemory.create({
      name: 'Car 3',
      description: 'Car description 3',
      daily_rate: 140,
      license_plate: 'ABC-1234',
      fine_amount: 50,
      brand: 'Car Brand Test',
      category_id: 'category_id_test'
    })

    const cars = await listCarsUseCase.execute({
      category_id: 'category_id_test'
    })

    expect(cars).toHaveLength(1)
  })
})
