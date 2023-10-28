import { Section, User } from '@prisma/client'
import Image from 'next/image'

import { Metadata } from 'next'
import Sidebar from '@/components/Sidebar'

export const metadata: Metadata = {}

const getUsers = async () => {
  const res = await fetch(`${process.env.BASE_URL}/api/get/posts`, {
    method: 'GET',
  })

  if (!res.ok) {
    console.log(res)
  }
  return res.json()
}

const getSections = async () => {
  const res = await fetch(`${process.env.BASE_URL}/api/get/sections`, {
    method: 'GET',
  })

  if (!res.ok) {
    console.log(res)
  }
  return res.json()
}

export default async function Home() {
  const users: User[] = await getUsers()
  const sections: Section[] = await getSections()
  // console.log({ data })
  return (
    <main className="flex p-4">
      <p>hello world</p>

      <Sidebar sections={sections} />

      {users.map((user) => (
        <h1 key={user.id}>{user.name}</h1>
      ))}
    </main>
  )
}
