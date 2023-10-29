import { Section, SubSection, User } from '@prisma/client'

export enum Query {
  SECTIONS = 'sections',
  SUBSECTION = 'subsection',
  Page = 'page',
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

export const createSection = async (data: Section): Promise<Section> => {
  const res = await fetch(`${process.env.API_URL}/api/create/sections`, {
    method: 'POST',
    body: JSON.stringify(data),
  })

  if (!res.ok) {
    console.log(res)
  }
  return res.json()
}

export const createSubsection = async (
  data: SubSection
): Promise<SubSection> => {
  console.log(process.env.API_URL)
  const res = await fetch(`${process.env.API_URL}/api/create/subsection`, {
    method: 'POST',
    body: JSON.stringify(data),
  })

  if (!res.ok) {
    console.log(res)
  }
  return res.json()
}
