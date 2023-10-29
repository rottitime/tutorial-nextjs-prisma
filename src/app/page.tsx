import { Section, User } from '@prisma/client'
import Image from 'next/image'

import { Metadata } from 'next'
import Sidebar from '@/components/Sidebar'
import CreateSection from '@/components/CreateSection'
import { getSections, getUsers } from '@/fetch'

export const metadata: Metadata = {}

export default async function Home() {
  const users: User[] = await getUsers()
  const sections: Section[] = await getSections()
  console.log({ users, sections })

  return <p>hello world</p>
}
