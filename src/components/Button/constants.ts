import { cva } from 'class-variance-authority'

export enum BUTTON_TYPES {
  button = 'button',
  submit = 'submit',
  reset = 'reset',
}

export enum BUTTON_VARIANTS {
  blue = 'blue',
  white = 'white',
}

export const buttonVariants = cva(
  ['py-4 px-6 transition text-sm font-bold rounded-[44px] hover:scale-105'],
  {
    variants: {
      variant: {
        blue: 'bg-blue-500 text-white shadow-custom-blue hover:bg-white hover:text-black',
        white:
          'bg-white shadow-default-shadow border hover:bg-blue-500 hover:text-white',
      },
    },
  },
)
