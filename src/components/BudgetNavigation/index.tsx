import Button from '@/components/Button'
import { BUTTON_VARIANTS } from '@/components/Button/constants'
import { BUDGET_SECTIONS } from '@/pages/AddBudget/constants'

const BudgetNavigation = ({
  selectedBudgetSection,
  setSelectedBudgetSection,
}) => {
  return (
    <div className="flex items-center gap-4 mb-4">
      <Button
        variant={
          selectedBudgetSection === BUDGET_SECTIONS.essentialNeeds
            ? BUTTON_VARIANTS.blue
            : BUTTON_VARIANTS.white
        }
        onClick={() => setSelectedBudgetSection(BUDGET_SECTIONS.essentialNeeds)}
      >
        Essential Needs
      </Button>
      <Button
        variant={
          selectedBudgetSection === BUDGET_SECTIONS.personalWants
            ? BUTTON_VARIANTS.blue
            : BUTTON_VARIANTS.white
        }
        onClick={() => setSelectedBudgetSection(BUDGET_SECTIONS.personalWants)}
      >
        Personal Wants
      </Button>
      <Button
        variant={
          selectedBudgetSection === BUDGET_SECTIONS.savings
            ? BUTTON_VARIANTS.blue
            : BUTTON_VARIANTS.white
        }
        onClick={() => setSelectedBudgetSection(BUDGET_SECTIONS.savings)}
      >
        Savings
      </Button>
    </div>
  )
}

export default BudgetNavigation
