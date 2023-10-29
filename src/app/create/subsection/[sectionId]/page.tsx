'use client'
import CreateSection from '@/components/CreateSection'
import CreateSubsection from '@/components/CreateSubsection'
import { useParams } from 'next/navigation'

export default function Page() {
  const params = useParams()

  return (
    <div>
      <h1>Create Subsection (section: #{Number(params?.sectionId)})</h1>

      {params?.sectionId && (
        <CreateSubsection sectionId={Number(params.sectionId)} />
      )}
    </div>
  )
}
