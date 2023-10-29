'use client'
import { Query, createSection } from '@/fetch'
import { Section } from '@prisma/client'
import { useForm } from 'react-hook-form'
import { useMutation, useQueryClient } from '@tanstack/react-query'

type Props = {
  sectionId: number
}

const fields: (keyof Section)[] = ['name', 'slug']

export default function CreateSubsection({ sectionId }: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Section>()

  const queryClient = useQueryClient()

  const { mutate } = useMutation({
    mutationKey: [Query.SECTIONS],
    mutationFn: createSection,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [Query.SECTIONS] })
      reset()
    },
  })

  return (
    <div>
      <h1>Create section</h1>
      <form
        onSubmit={handleSubmit((data) => {
          mutate(data)
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
