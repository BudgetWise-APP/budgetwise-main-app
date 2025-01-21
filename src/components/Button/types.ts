import { ClassName } from "@/types"
import { VariantProps } from "class-variance-authority"
import { ButtonHTMLAttributes } from "react"
import { buttonVariants } from "./constants"

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ClassName &
  VariantProps<typeof buttonVariants> & {
    children?: React.ReactNode
    onClick?: () => void
  }