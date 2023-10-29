'use client'
import CreateSection from '@/components/CreateSection'
import CreateSubsection from '@/components/CreateSubsection'
import { useParams } from 'next/navigation'

export default function Page() {
  const params = useParams()

  return (
    <div>
      <p>sectionID: {Number(params?.sectionId)}</p>
      {params?.sectionId && (
        <CreateSubsection sectionId={Number(params.sectionId)} />
      )}
    </div>
  )
}