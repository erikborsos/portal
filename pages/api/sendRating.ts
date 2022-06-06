import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { rating, message } = req.body
  try {
    await prisma.rating.create({
      data: {
        rating,
        message
      }
    })
    res.status(200).json({ message: 'Bewertung erfolgreich versendet' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
