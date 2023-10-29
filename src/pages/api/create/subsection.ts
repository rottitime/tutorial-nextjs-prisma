import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient, SubSection } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const data = JSON.parse(req.body) as SubSection
    if (!data.sectionId)
      return res.status(500).json({ message: 'No sectionId' })

    try {
      const result = await prisma.subSection.create({
        data,
      })

      return res.status(200).json(result)
    } catch (error) {
      return res.status(500).json(error)
    }
  }
}
