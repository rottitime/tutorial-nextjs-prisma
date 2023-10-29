import { Section, User } from '@prisma/client'

export enum Query {
  SECTIONS = 'sections',
}

export const getUsers = async (): Promise<User[]> => {
  const res = await fetch(`${process.env.API_URL}/api/get/posts`, {
    method: 'GET',
  })

  if (!res.ok) {
    console.log(res)
  }
  return res.json()
}

export const getSections = async (): Promise<Section[]> => {
  const res = await fetch(`${process.env.API_URL}/api/get/sections`, {
    method: 'GET',
  })

  if (!res.ok) {
    console.log(res)
  }
  return res.json()
}

export const createSection = async (section: Section): Promise<Section> => {
  console.log(process.env.API_URL)
  const res = await fetch(`${process.env.API_URL}/api/create/sections`, {
    method: 'POST',
    body: JSON.stringify(section),
  })

  if (!res.ok) {
    console.log(res)
  }
  return res.json()
}
