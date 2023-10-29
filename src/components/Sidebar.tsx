'use client'
import { Query, getSections } from '@/fetch'
import { Prisma, Section, SubSection } from '@prisma/client'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'

type SectionWithSubsection = Prisma.SectionGetPayload<{
  include: { subSections: true }
}>
type Props = {
  initialData: SectionWithSubsection[]
}

function Sidebar({ initialData }: Props) {
  const { data } = useQuery<Section[], Error, SectionWithSubsection[]>({
    queryKey: [Query.SECTIONS],
    queryFn: getSections,
    initialData,
  })

  return (
    <div>
      <h2>Sections</h2>
      <ul>
        {data.map((section) => (
          <li key={section.id}>
            <Link href={`/create/section/${section.id}`}>{section.name}</Link>

            <ul>
              {section.subSections.map((subSection) => (
                <li key={subSection.id}>
                  <Link href={`/create/subsection/${subSection.id}`}>
                    {subSection.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      <Link href="/create/section">Create section</Link>
    </div>
  )
}

export default Sidebar
