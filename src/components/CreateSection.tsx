'use client'
import { createSection } from '@/fetch'
import { Section } from '@prisma/client'
import { useForm } from 'react-hook-form'

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
          createSection(data)
        })}
      >
        {fields.map((field) => (
          <div key={field}>
            <label>
              {field}: &nbsp;
              <input type="text" {...register(field, { required: true })} />
            </label>
            {errors[field] && <span>This field is required</span>}
          </div>
        ))}
        <button type="submit">Create</button>
      </form>
    </div>
  )
}

export default CreateSection
