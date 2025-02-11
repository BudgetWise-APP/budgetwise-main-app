import { Controller } from 'react-hook-form'

import BudgetTableHeader from '../BudgetTableHeader'
import Button from '../Button'
import { useBudgetForm } from './useBudgetForm'
import { BUTTON_VARIANTS } from '../Button/constants'
import Icons from '../Icons'
import TableRow from '../Table/TableRow'
import { BudgetFormProps } from './types'

const BudgetForm = ({
  selectedBudgetSection,
  currency,
  control,
  setValue,
  watchItems,
}: BudgetFormProps) => {
  const { appendData, removeData } = useBudgetForm({
    control,
    selectedBudgetSection,
  })

  return (
    <>
      <BudgetTableHeader />
      {watchItems[selectedBudgetSection].map(
        ({ icon, title, amount, description }, index) => {
          return (
            <TableRow key={index} style={{ zIndex: 1000 - index }}>
              <div className="flex items-center font-semibold uppercase text-xs z-50 col-span-1">
                <Icons
                  defaultIcon={icon || ''}
                  setIcon={(selectedIcon) =>
                    setValue(
                      `items.${selectedBudgetSection}.${index}.icon`,
                      selectedIcon,
                    )
                  }
                />
              </div>
              <div className="flex items-center font-semibold uppercase text-xs z-10 col-span-5">
                <Controller
                  control={control}
                  defaultValue={title}
                  name={`items.${selectedBudgetSection}.${index}.title`}
                  render={({ field }) => (
                    <input
                      type="text"
                      className={`py-2 px-3 rounded bg-white w-full shadow-default-shadow border`}
                      disabled={false}
                      {...field}
                    />
                  )}
                />
              </div>
              <div className="flex items-center font-semibold uppercase text-xs z-10 col-span-2">
                <Controller
                  control={control}
                  defaultValue={amount}
                  name={`items.${selectedBudgetSection}.${index}.amount`}
                  render={({ field }) => (
                    <>
                      <input
                        type="text"
                        className={`py-2 px-3 rounded bg-white w-full shadow-default-shadow border`}
                        disabled={false}
                        {...field}
                      />
                      {currency}
                    </>
                  )}
                />
              </div>
              <div className="flex items-center font-semibold uppercase text-xs z-10 col-span-3">
                <Controller
                  control={control}
                  defaultValue={description}
                  name={`items.${selectedBudgetSection}.${index}.description`}
                  render={({ field }) => (
                    <>
                      <input
                        type="text"
                        className={`py-2 px-3 rounded bg-white w-full shadow-default-shadow border`}
                        disabled={false}
                        {...field}
                      />
                    </>
                  )}
                />
              </div>
              <div className="flex items-center font-semibold uppercase text-xs z-[2] col-span-1">
                <i
                  className="fas fa-trash text-red-500 text-lg hover:text-red-700 p-1 cursor-pointer transition"
                  onClick={() => removeData(index)}
                />
              </div>
            </TableRow>
          )
        },
      )}
      <TableRow className={'z-50'}>
        <div className="z-50 flex justify-center items-center col-span-12">
          <Button variant={BUTTON_VARIANTS.white} onClick={appendData}>
            +
          </Button>
        </div>
      </TableRow>
    </>
  )
}

export default BudgetForm
