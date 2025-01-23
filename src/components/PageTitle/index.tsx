import { ClassName, Children } from '@/types'

const PageTitle = ({ children, className = '' }: Children & ClassName) => {
  return <h1 className={`font-bold text-2xl mb-4 ${className}`}>{children}</h1>
}

export default PageTitle
