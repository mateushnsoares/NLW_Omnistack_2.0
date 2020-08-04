import { Request, Response } from 'express'

import db from '../database/connection'

export default class ConnectionsController {
  static async index(req: Request, res: Response) {
    const [{ totalConnections }] = await db('connections').count(
      '* as totalConnections'
    )

    res.json({ totalConnections })
  }

  static async create(req: Request, res: Response) {
    const { user_id } = req.body

    await db('connections').insert({
      user_id
    })

    return res.status(201).send()
  }
}
