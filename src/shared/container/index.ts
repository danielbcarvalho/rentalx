import { container } from 'tsyringe'

import '@shared/container/providers'

import { CarImagesRepository } from '@modules/cars/infra/typeorm/repositories/CarImagesRepository'
import { CarsRepository } from '@modules/cars/infra/typeorm/repositories/CarsRepository'
import { ICarsImageRepository } from '@modules/cars/repositories/ICarImagesRepository'
import { ICarsRepository } from '@modules/cars/repositories/ICarsRepository'
import { RentalsRepository } from '@modules/rentals/infra/typeorm/repositories/RentalsRepository'
import { IRentalsRepository } from '@modules/rentals/repositories/IRentalsRepository'

import { CategoriesRepository } from '../../modules/cars/infra/typeorm/repositories/CategoriesRepository'
import { SpecificationsRepository } from '../../modules/cars/infra/typeorm/repositories/SpecificationsRepository'
import { ICategoriesRepository } from '../../modules/cars/repositories/ICategoriesRepository'
import { ISpecificationsRepository } from '../../modules/cars/repositories/ISpecificationsRepository'
import { UsersRepository } from '../../modules/users/infra/typeorm/repositories/UsersRepository'
import { IUsersRepository } from '../../modules/users/repositories/IUsersRepository'

// ICategoriesRepository
container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository
)

container.registerSingleton<ISpecificationsRepository>(
  'SpecificationsRepository',
  SpecificationsRepository
)

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository
)

container.registerSingleton<ICarsRepository>('CarsRepository', CarsRepository)

container.registerSingleton<ICarsImageRepository>(
  'CarsImagesRepository',
  CarImagesRepository
)

container.registerSingleton<IRentalsRepository>(
  'RentalsRepository',
  RentalsRepository
)
