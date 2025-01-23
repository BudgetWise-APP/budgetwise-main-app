import { ClassName } from '@/types'

export type OptionType = {
  value: string | number
  label: string | number
}

export type SelectProps = ClassName & {
  options: OptionType[]
}
