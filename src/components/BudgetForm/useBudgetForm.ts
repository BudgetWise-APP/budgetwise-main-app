import { BUDGET_SECTIONS, defaultBudgetItem } from '@/pages/AddBudget/constants'
import { useCallback, useState } from 'react'
import { useFieldArray } from 'react-hook-form'

export const useBudgetForm = ({ control, selectedBudgetSection }) => {
  const [editableItem, setEditableItem] = useState('')

  const { append: essentialNeedsAppend, remove: essentialNeedsRemove } =
    useFieldArray({
      control,
      name: 'items.essentialNeeds',
    })

  const { append: personalWantsAppend, remove: personalWantsRemove } =
    useFieldArray({
      control,
      name: 'items.personalWants',
    })
  const { append: savingsAppen, remove: savingsRemove } = useFieldArray({
    control,
    name: 'items.savings',
  })

  const appendData = useCallback(() => {
    if (selectedBudgetSection === BUDGET_SECTIONS.essentialNeeds) {
      essentialNeedsAppend(defaultBudgetItem)
    }

    if (selectedBudgetSection === BUDGET_SECTIONS.personalWants) {
      personalWantsAppend(defaultBudgetItem)
    }

    if (selectedBudgetSection === BUDGET_SECTIONS.savings) {
      savingsAppen(defaultBudgetItem)
    }
  }, [selectedBudgetSection])

  const removeData = useCallback(
    (index) => {
      if (selectedBudgetSection === BUDGET_SECTIONS.essentialNeeds) {
        essentialNeedsRemove(index)
      }

      if (selectedBudgetSection === BUDGET_SECTIONS.personalWants) {
        personalWantsRemove(index)
      }

      if (selectedBudgetSection === BUDGET_SECTIONS.savings) {
        savingsRemove(index)
      }
    },
    [selectedBudgetSection],
  )

  return {
    editableItem,
    setEditableItem,
    appendData,
    removeData,
  }
}
