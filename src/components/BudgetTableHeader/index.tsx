import TableHeader from '../Table/TableHeader'

const BudgetTableHeader = () => {
  return (
    <TableHeader>
      <div className="flex items-center font-semibold uppercase text-xs z-10 col-span-1">
        Icon
      </div>
      <div className="flex items-center font-semibold uppercase text-xs z-10 col-span-5">
        Title
      </div>
      <div className="flex items-center font-semibold uppercase text-xs z-10 col-span-2">
        Amount
      </div>
      <div className="flex items-center font-semibold uppercase text-xs z-10 col-span-3">
        Description
      </div>
      <div className="flex items-center font-semibold uppercase text-xs z-10 col-span-1">
        Actions
      </div>
    </TableHeader>
  )
}

export default BudgetTableHeader
