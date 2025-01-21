import { z } from 'zod'

export const BudgetItemSchema = z.object({
  icon: z.string().optional(),
  title: z.string().min(1, { message: 'Title is requred!' }),
  amount: z.string(),
  description: z.string().optional(),
})

export const AddBudgetSchema = z.object({
  title: z.string().min(1, { message: 'Title is requred!' }),
  income: z.string().min(1, { message: 'Amount is requred!' }),
  budgetType: z.string().min(1, { message: 'Budget type is requred!' }),
  currency: z.string().min(1, { message: 'Currency is requred!' }),
  items: z.object({
    essentialNeeds: z.array(BudgetItemSchema),
    personalWants: z.array(BudgetItemSchema),
    savings: z.array(BudgetItemSchema),
  }),
})

export type AddBudgetSchemaType = z.infer<typeof AddBudgetSchema>
