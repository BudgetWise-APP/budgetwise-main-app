import { z } from "zod"

export const AddGoalSchema = z.object({
  title: z.string().min(1, { message: 'Title is requred!' }),
  description: z.string().optional(),
  goal: z.string().min(1, { message: 'Goal is requred!' }),
  currentStatus: z.string().optional(),
  trackBy: z.string().optional(),
})

export type AddGoalSchemaType = z.infer<typeof AddGoalSchema>

