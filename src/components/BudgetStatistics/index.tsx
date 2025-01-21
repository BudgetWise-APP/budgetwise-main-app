import { AddBudgetSchemaType } from '@/pages/AddBudget/helpers'
import { useBudgetStatistics } from './useBudgetStatistics'
import { currenciesSymbols } from '@/pages/AddBudget/constants'
import BudgetStatus from './BudgetStatus'

const BudgetStatistics = ({ formData }: { formData: AddBudgetSchemaType }) => {
  const { income, currency, budgetType, items } = formData
  const {
    needsExpenses,
    wantsExpenses,
    savingsExpenses,
    totalExpenses,
    remainingIncome,
    budgetPredictions,
  } = useBudgetStatistics({ budgetType, income, items })
  const { needs, wants, savings } = budgetPredictions
  const currencySymbol = currenciesSymbols[currency]

  return (
    <div className="my-4 bg-[#f7f9fc] p-4 grid grid-cols-3 gap-4 rounded">
      <span className="text-sm font-semibold">
        Total monthly income:{' '}
        <span className="font-normal">
          {income}
          {currencySymbol}
        </span>
      </span>
      <span className="text-sm font-semibold">
        Total monthly expenses:{' '}
        <span className="font-normal">
          {totalExpenses}
          {currencySymbol}
        </span>
      </span>
      <span className="text-sm font-semibold">
        Remaining income:{' '}
        <span className="font-normal">
          {remainingIncome}
          {currencySymbol}
        </span>{' '}
      </span>
      <span className="text-sm font-semibold">
        Needs:{' '}
        <BudgetStatus
          balance={needs}
          expenses={needsExpenses}
          currency={currencySymbol}
        />
      </span>
      <span className="text-sm font-semibold">
        Wants:{' '}
        <BudgetStatus
          balance={wants}
          expenses={wantsExpenses}
          currency={currencySymbol}
        />
      </span>
      <span className="text-sm font-semibold">
        Savings:{' '}
        <BudgetStatus
          balance={savings}
          expenses={savingsExpenses}
          currency={currencySymbol}
        />
      </span>
      {/* TODO add here budget health */}
    </div>
  )
}

export default BudgetStatistics
