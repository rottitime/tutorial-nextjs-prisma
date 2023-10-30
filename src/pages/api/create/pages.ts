import type { NextApiRequest, NextApiResponse } from 'next'
import { Page, PrismaClient, SubSection } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const data = JSON.parse(req.body) as Page
    if (!data.subSectionId) return res.status(500).json({ message: 'No subSectionId' })

    try {
      const result = await prisma.subSection.update({
        where: {
          id: data.subSectionId
        },
        data: {
          pages: {
            create: {
              title: data.title,
              content: data.content
            }
          }
        }
      })

      return res.status(200).json(result)
    } catch (error) {
      return res.status(500).json(error)
    }
  }
}
