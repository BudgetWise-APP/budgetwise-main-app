import Box from '@/components/Box'
import Input from '@/components/Input'
import PageTitle from '@/components/PageTitle'
import Select from '@/components/Select'
import BudgetStatistics from '@/components/BudgetStatistics'
import { Controller } from 'react-hook-form'
import Button from '@/components/Button'
import BudgetForm from '@/components/BudgetForm'
import BudgetNavigation from '@/components/BudgetNavigation'
import { budgetOptions, currenciesOptions } from '../AddBudget/constants'
import { useEditBudget } from './useEditBudget'

const EditBudget = () => {
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
    budgetTitle,
  } = useEditBudget()

  return (
    <Box>
      <div className="flex flex-col w-full">
        <PageTitle>Edit: {budgetTitle}</PageTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col w-full">
            <Controller
              control={control}
              name="title"
              render={({ field }) => (
                <Input type="text" placeholder="Title" {...field} />
              )}
            />
            <Controller
              control={control}
              name="income"
              render={({ field }) => (
                <Input type="text" placeholder="Income" {...field} />
              )}
            />
            <div className="grid gap-3 grid-rows-[auto] grid-cols-12 items-center">
              <Controller
                control={control}
                name="budgetType"
                render={({ field }) => (
                  <Select
                    options={budgetOptions}
                    className={'col-span-10'}
                    {...field}
                  />
                )}
              />
              <Controller
                control={control}
                name="budgetCurrency"
                render={({ field }) => (
                  <Select
                    options={currenciesOptions}
                    className={'col-span-2'}
                    {...field}
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

export default EditBudget
