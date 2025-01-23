import { ClassName, Children } from '@/types'
import React from 'react'

export type TableRowProps = ClassName &
  Children & {
    style?: React.CSSProperties
  }

export type TableHeadProps = ClassName & Children
