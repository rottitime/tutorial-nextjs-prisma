'use client'
import { Query, createSubsection } from '@/fetch'
import { Section, SubSection } from '@prisma/client'
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
  } = useForm<SubSection>()

  const queryClient = useQueryClient()

  const { mutate } = useMutation({
    mutationKey: [Query.SUBSECTION],
    mutationFn: createSubsection,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [Query.SECTIONS] })
      reset()
    },
  })

  register('sectionId', { value: sectionId })

  return (
    <form onSubmit={handleSubmit((data) => mutate(data))}>
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
  )
}
