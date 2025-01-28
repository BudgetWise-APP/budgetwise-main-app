import { useAddGoal } from './useAddGoal'
import Box from '@/components/Box'
import Button from '@/components/Button'
import Input from '@/components/Input'
import PageTitle from '@/components/PageTitle'
import Select from '@/components/Select'
import { validateNumber } from '@/utils'
import { ChangeEvent } from 'react'
import { Controller } from 'react-hook-form'
import { platformOptions } from './constants'

const AddGoal = () => {
  const {
    control,
    handleSubmit,
    onSubmit,
    trackMoneyFromPlatforms,
    trackBy,
    requestError,
  } = useAddGoal()

  return (
    <Box>
      <div className="flex flex-col w-full">
        <PageTitle>Add budget</PageTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex gap-4 flex-wrap">
            <Controller
              control={control}
              name="title"
              render={({ field }) => (
                <Input type="text" placeholder="Title" {...field} />
              )}
            />
            <Controller
              control={control}
              name="description"
              render={({ field }) => (
                <Input type="text" placeholder="Description" {...field} />
              )}
            />
            <Controller
              control={control}
              name="goal"
              render={({ field }) => (
                <Input
                  {...field}
                  type="text"
                  placeholder="Goal"
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    field.onChange(validateNumber(e.target.value))
                  }
                />
              )}
            />
            <Controller
              control={control}
              name="currentStatus"
              render={({ field }) => (
                <Input
                  {...field}
                  type="text"
                  disabled={!!trackBy}
                  placeholder="Current status"
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    field.onChange(validateNumber(e.target.value))
                  }
                />
              )}
            />
            <Controller
              control={control}
              name="trackBy"
              render={({ field }) => (
                <Select
                  {...field}
                  onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                    field.onChange(e.target.value)
                    trackMoneyFromPlatforms(e.target.value)
                  }}
                  options={platformOptions}
                  className={'col-span-2'}
                />
              )}
            />
          </div>
          {requestError ? (
            <span className="text-red-600">{requestError}</span>
          ) : null}
          <div className="flex justify-end mt-4 border-t pt-4">
            <Button type="submit">Save</Button>
          </div>
        </form>
      </div>
    </Box>
  )
}

export default AddGoal
