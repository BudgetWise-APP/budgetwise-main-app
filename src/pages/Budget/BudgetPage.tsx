import Collapse from '@/components/Collapse'
import { useBudgetPage } from './useBudgetPage'
import Spinner from '@/components/Spinner'
import BudgetTableHeader from '@/components/BudgetTableHeader'
import BudgetStatistics from '@/components/BudgetStatistics'
import TableRow from '@/components/Table/TableRow'
import { currenciesSymbols } from '../AddBudget/constants'
import BudgetNavigation from '@/components/BudgetNavigation'

const BudgetPage = () => {
  const {
    budgets,
    isLoading,
    selectedBudgetSection,
    setSelectedBudgetSection,
    deleteBudgetMutate,
    navigate,
  } = useBudgetPage()

  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <Spinner />
      </div>
    )
  }

  return budgets?.reverse().map((budget) => {
    const { title, _id, budgetType, items, currency } = budget
    return (
      <Collapse
        title={
          <div className="flex items-center justify-between w-full">
            <span>
              {title} ({budgetType})
            </span>
            <div className="flex items-center">
              <i
                className="fas fa-edit text-blue-500 text-lg hover:text-blue-700 p-1 cursor-pointer mr-3 transition"
                onClick={() => navigate(`/edit-budget/${_id}`)}
              />
              <i
                className="fas fa-trash text-red-500 text-lg hover:text-red-700 p-1 cursor-pointer transition"
                onClick={() => deleteBudgetMutate(_id)}
              />
            </div>
          </div>
        }
        key={_id}
      >
        <>
          <BudgetStatistics formData={budget} />
          <BudgetNavigation
            setSelectedBudgetSection={setSelectedBudgetSection}
            selectedBudgetSection={selectedBudgetSection}
          />
          <BudgetTableHeader />
          {items[selectedBudgetSection].map(
            ({ icon, title, amount, description, _id }, index) => {
              return (
                <TableRow key={_id} style={{ zIndex: 1000 - index }}>
                  <div className="flex items-center font-semibold uppercase text-xs z-50 col-span-1">
                    <i className={`${icon} text-lg text-blue-500 p-1`} />
                  </div>
                  <div className="flex items-center font-semibold uppercase text-xs z-10 col-span-5">
                    <input
                      type="text"
                      className={`py-2 px-3 rounded bg-white w-full`}
                      disabled={true}
                      value={title}
                    />
                  </div>
                  <div className="flex items-center font-semibold uppercase text-xs z-10 col-span-2">
                    <input
                      type="text"
                      className={`py-2 px-3 rounded bg-white w-full`}
                      disabled={true}
                      value={`${amount} ${currenciesSymbols[currency]}`}
                    />
                  </div>
                  <div className="flex items-center font-semibold uppercase text-xs z-10 col-span-3">
                    <input
                      type="text"
                      className={`py-2 px-3 rounded bg-white w-full`}
                      disabled={true}
                      value={description}
                    />
                  </div>
                </TableRow>
              )
            },
          )}
        </>
      </Collapse>
    )
  })
}

export default BudgetPage
