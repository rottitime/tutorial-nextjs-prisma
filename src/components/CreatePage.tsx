'use client'
import { Query, createSubsection } from '@/fetch'
import { Page, Section, SubSection } from '@prisma/client'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useForm, useFieldArray, Controller } from 'react-hook-form'

type Props = {
  subSectionId: number
}

type PageResponse = { pages: Page[] }

export default function CreatePage({ subSectionId }: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    control,
    setError,
    trigger
  } = useForm<PageResponse>({
    defaultValues: {
      pages: [
        {
          name: '',
          subSectionId
        }
      ]
    }
  })

  const { fields, append, remove } = useFieldArray<PageResponse, 'pages', 'name'>({
    control,
    name: 'pages'
  })

  const queryClient = useQueryClient()

  // const { mutate } = useMutation<Page, Error, Page>({
  //   mutationKey: [Query.Page],
  //   mutationFn: createSubsection,
  //   onSuccess: () => {
  //     queryClient.invalidateQueries({ queryKey: [Query.SECTIONS] })
  //     reset()
  //   },
  // })

  return (
    <form
      onSubmit={handleSubmit((data) => {
        // mutate(data)
        console.log({ data })
      })}
    >
      <ul>
        {fields.map((item, index) => {
          register(`pages.${index}.subSectionId`, { value: subSectionId })
          return (
            <li key={item.id}>
              <input type="text" {...register(`pages.${index}.name`)} />
              <input type="text" {...register(`pages.${index}.title`)} />
              <input type="text" {...register(`pages.${index}.description`)} />

              <select
                {...register(`pages.${index}.pageType`, {
                  required: true
                })}
              >
                <option value="">Select</option>
                <option value="question">question</option>
                <option value="information">information</option>
              </select>

              <button type="button" onClick={() => remove(index)}>
                Delete
              </button>
            </li>
          )
        })}
      </ul>
      <button
        type="button"
        onClick={() => append({ firstName: 'bill', lastName: 'luo' })}
      >
        append
      </button>

      {/* {fields.map((field) => (
        <div key={field}>
          <label>
            {field}: &nbsp;
            <input type="text" {...register(field, { required: true })} />
          </label>
          {errors[field] && <span>This field is required</span>}
        </div>
      ))} */}
      <button type="submit">Update</button>
    </form>
  )
}
