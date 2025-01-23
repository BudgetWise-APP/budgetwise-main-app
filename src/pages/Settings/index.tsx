import { useState } from 'react'

import { SETTING_TABS } from './constants'
import { Crypto } from './Crypto'
import PageNavigation from '@/components/PageNavigation'

const Settings = () => {
  const [page, setPage] = useState(0)

  return (
    <div className="grid gap-x-12 gap-y-4 grid-rows-[auto] grid-cols-[0.38fr,1fr] auto-cols-[1fr]">
      <PageNavigation items={SETTING_TABS} page={page} setPage={setPage} />
      {page === 0 && <p>General</p>}
      {page === 1 && <Crypto />}
    </div>
  )
}

export default Settings
