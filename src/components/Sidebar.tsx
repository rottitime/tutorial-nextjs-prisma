import { Section } from '@prisma/client'

type Props = {
  sections: Section[]
}

function Sidebar({ sections }: Props) {
  return (
    <div>
      Sidebar
      <ul>
        {sections.map((section) => (
          <li key={section.id}>{section.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
