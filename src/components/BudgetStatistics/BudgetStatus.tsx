import { ReactNode } from 'react'
import { BudgetStatusType } from './types'

const BudgetStatus = ({
  balance,
  expenses,
  currency,
}: BudgetStatusType): ReactNode => {
  const percentageUsed = (expenses / balance) * 100

  function getStatusColor() {
    if (percentageUsed > 100) return 'text-red-500'
    if (percentageUsed > 90) return 'text-red-500'
    if (percentageUsed > 70) return 'text-yellow-500'

    return 'text-green-500'
  }

  const dangetIcon =
    percentageUsed > 100 ? (
      <i className="fa-solid fa-triangle-exclamation ml-1"></i>
    ) : null

  return (
    <span className={`font-normal ${getStatusColor()}`}>
      {expenses}
      {currency} out of {balance}
      {currency} budget
      {dangetIcon}
    </span>
  )
}

export default BudgetStatus
