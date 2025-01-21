import { twMerge } from 'tailwind-merge'
import { ClassValue, clsx } from 'clsx'

export const generateKey = () => crypto.randomUUID()

export const cn = (...inputs: ClassValue[]) => {
    return twMerge(clsx(inputs))
  }