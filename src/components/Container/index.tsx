import { Children } from '@/types'

const Container = ({ children }: Children) => {
  return <div className="w-full max-w-[1092px] px-6 mx-auto">{children}</div>
}

export default Container
