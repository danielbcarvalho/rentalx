import { Category } from '../model/Category'
import {
  ICategoriesRepository,
  ICreateCategoryDTO
} from './ICategoriesRepository'

class PostgressCategoriesRepository implements ICategoriesRepository {
  findByName(name: string): Category {
    console.log(
      '🚀 ~ file: PostgresCategoriesRepository.ts ~ line 6 ~ PostgressCategoriesRepository ~ findByName ~ name',
      name
    )
    return null
  }
  list(): Category[] {
    return null
  }
  create({ name, description }: ICreateCategoryDTO): void {
    console.log(
      '🚀 ~ file: PostgresCategoriesRepository.ts ~ line 16 ~ PostgressCategoriesRepository ~ create ~ name',
      name,
      description
    )

    return null
  }
}

export { PostgressCategoriesRepository }
