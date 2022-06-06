import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email, name, message } = req.body
  try {
    await prisma.contact.create({
      data: {
        email,
        name,
        message
      }
    })
    res.status(200).json({ message: 'Nachricht erfolgreich versendet' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
