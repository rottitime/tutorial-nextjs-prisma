import { Section } from '@prisma/client'

type Props = {
  sections: Section[]
}

function Sidebar({ sections }: Props) {
  return (
    <div>
      <h2>Sections</h2>
      <ul>
        {sections.map((section) => (
          <li key={section.id}>{section.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
