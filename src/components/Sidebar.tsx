'use client'
import { Query, getSections } from '@/fetch'
import { Section } from '@prisma/client'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'

type Props = {
  initialData: Section[]
}

function Sidebar({ initialData }: Props) {
  const { data } = useQuery<Section[], Error, Section[]>({
    queryKey: [Query.SECTIONS],
    queryFn: getSections,
    initialData,
  })

  return (
    <div>
      <h2>Sections</h2>
      <ul>
        {data.map((section) => (
          <li key={section.id}>{section.name}</li>
        ))}
      </ul>

      <Link href="/create-section">Create section</Link>
    </div>
  )
}

export default Sidebar
