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

  return (
    <main className="flex p-4">
      <div className="p-5">
        <Sidebar initialData={sections} />
      </div>
      <div className="p-5">
        <CreateSection />
      </div>
    </main>
  )
}
