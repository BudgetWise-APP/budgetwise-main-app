import { ClassName } from '@/types'

const CoinsItem = ({
  item,
  className,
}: { item: string | number } & ClassName) => {
  return <span className={`break-words ${className}`}>{item}</span>
}

export default CoinsItem
