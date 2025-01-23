import { z } from 'zod'

export const LoginSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'This field has to be filled.' })
    .email('This is not a valid email.'),
  password: z.string().min(1, { message: 'Password is requred!' }),
})

export type LoginSchemaType = z.infer<typeof LoginSchema>
