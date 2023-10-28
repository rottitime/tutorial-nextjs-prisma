'use client'
import { Section } from '@prisma/client'
import { SubmitHandler, useForm } from 'react-hook-form'

function CreateSection() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Section>()

  const fields: (keyof Section)[] = ['name', 'slug']

  return (
    <div>
      <h1>Create section</h1>
      <form
        onSubmit={handleSubmit((data) => {
          console.log({ data })
        })}
      >
        {fields.map((field) => (
          <label key={field}>
            {field}: &nbsp;
            <input type="text" {...register(field)} />
          </label>
        ))}
      </form>
    </div>
  )
}

export default CreateSection
