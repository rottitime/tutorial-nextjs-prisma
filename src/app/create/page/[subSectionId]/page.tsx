'use client'
import CreateSection from '@/components/CreateSection'
import CreateSubsection from '@/components/CreateSubsection'
import { useParams } from 'next/navigation'

export default function Page() {
  const params = useParams()

  return (
    <div>
      <h1>Create Page (subsection: #{Number(params?.subSectionId)})</h1>

      {/* {params?.subSectionId && (
        <CreateSubsection subSectionId={Number(params.sectionId)} />
      )} */}
    </div>
  )
}
