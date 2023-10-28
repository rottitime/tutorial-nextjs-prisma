import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  //   res.status(200).json({ message: 'Hello from Next.js!' })

  if (req.method === 'GET') {
    try {
      const data = await prisma.section.findMany()

      return res.status(200).json(data)
    } catch (error) {
      return res.status(500).json(error)
    }
  }
}
