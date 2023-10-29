import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const user = JSON.parse(req.body)

  if (req.method === 'POST') {
    try {
      const data = await prisma.user.create({
        data: {
          email: user.email,
        },
      })

      return res.status(200).json(data)
    } catch (error) {
      return res.status(500).json(error)
    }
  }
}
