import { Section, User } from '@prisma/client'

export const getUsers = async (): Promise<User[]> => {
  const res = await fetch(`${process.env.BASE_URL}/api/get/posts`, {
    method: 'GET',
  })

  if (!res.ok) {
    console.log(res)
  }
  return res.json()
}

export const getSections = async (): Promise<Section[]> => {
  const res = await fetch(`${process.env.BASE_URL}/api/get/sections`, {
    method: 'GET',
  })

  if (!res.ok) {
    console.log(res)
  }
  return res.json()
}
