export type PageNavigationProps = {
  page: number
  setPage: (page: number) => void
  items: { name: string; icon: JSX.Element }[]
}
