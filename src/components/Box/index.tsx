import Spinner from '../Spinner'
import { BoxProps } from './types'

const Box = ({ children, isLoading = false, className = '' }: BoxProps) => {
  return (
    <div
      className={`shadow-default-shadow py-5 px-6 bg-white flex items-center rounded border border-blue-100 relative ${className}`}
    >
      {isLoading ? <Spinner /> : children}
    </div>
  )
}

export default Box
