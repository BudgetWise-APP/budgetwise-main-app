import { Controller } from 'react-hook-form'

import { budgetOptions, currenciesOptions } from './constants'
import { useAddBudget } from './useAddBudget'
import Box from '@/components/Box'
import BudgetForm from '@/components/BudgetForm'
import BudgetNavigation from '@/components/BudgetNavigation'
import BudgetStatistics from '@/components/BudgetStatistics'
import Button from '@/components/Button'
import Input from '@/components/Input'
import PageTitle from '@/components/PageTitle'
import Select from '@/components/Select'

const AddBudget = () => {
  const {
    selectedBudgetSection,
    setSelectedBudgetSection,
    currency,
    watch,
    control,
    onSubmit,
    handleSubmit,
    setValue,
    watchItems,
  } = useAddBudget()

  return (
    <Box>
      <div className="flex flex-col w-full">
        <PageTitle>Add budget</PageTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col w-full">
            <Controller
              control={control}
              name="title"
              render={({ field }) => (
                <Input {...field} type="text" placeholder="Title"  />
              )}
            />
            <Controller
              control={control}
              name="income"
              render={({ field }) => (
                <Input {...field} type="text" placeholder="Income"  />
              )}
            />
            <div className="grid gap-3 grid-rows-[auto] grid-cols-12 items-center">
              <Controller
                control={control}
                name="budgetType"
                render={({ field }) => (
                  <Select
                    {...field}
                    options={budgetOptions}
                    className={'col-span-10'}
                    
                  />
                )}
              />
              <Controller
                control={control}
                name="currency"
                render={({ field }) => (
                  <Select
                  {...field}
                    options={currenciesOptions}
                    className={'col-span-2'}

                  />
                )}
              />
            </div>
            <BudgetStatistics formData={watch()} />
            <BudgetNavigation
              setSelectedBudgetSection={setSelectedBudgetSection}
              selectedBudgetSection={selectedBudgetSection}
            />
            <BudgetForm
              currency={currency}
              control={control}
              selectedBudgetSection={selectedBudgetSection}
              setValue={setValue}
              watchItems={watchItems}
            />
          </div>
          <div className="flex justify-end mt-4 border-t pt-4">
            <Button type="submit">Save</Button>
          </div>
        </form>
      </div>
    </Box>
  )
}

export default AddBudget
