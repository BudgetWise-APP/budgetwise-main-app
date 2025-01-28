import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const generateKey = () => crypto.randomUUID()

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

export function validateNumber(value: unknown): string {
  if (typeof value === 'string') {
    const sanitized = value.replace(/[^0-9.-]/g, '');

    if (/^-?\d*\.?\d*$/.test(sanitized)) {
      return sanitized;
    }

    return '';
  }
  return '';
}