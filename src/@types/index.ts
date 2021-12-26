import { Request } from 'express'

export interface IRequestCustom extends Request {
  user: {
    id: string
  }
}
