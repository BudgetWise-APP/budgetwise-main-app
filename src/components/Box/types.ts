import { Children, ClassName } from '@/types'

export type BoxProps = Children &
  ClassName & {
    isLoading?: boolean
  }
