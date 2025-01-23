import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const generateKey = () => crypto.randomUUID()

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}
