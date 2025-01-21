import { useState } from 'react'
import { brandIcons } from '@/constants/brandIcons'
import { regularIcons } from '@/constants/regularIcons'
import { solidIcons } from '@/constants/solidIcons'
import { ICON_TYPES } from './constants'
import { generateKey } from '@/utils'

const Icons = ({ setIcon, defaultIcon }) => {
  const [selectedIcon, setSelectedIcon] = useState(defaultIcon)
  const [iconType, setIconType] = useState(ICON_TYPES.solid)
  const [showIcons, setShowIcons] = useState(false)

  const icons = {
    [ICON_TYPES.solid]: solidIcons,
    [ICON_TYPES.regular]: regularIcons,
    [ICON_TYPES.brand]: brandIcons,
  }

  function handleIconClick(icon) {
    setIcon(icon)
    setSelectedIcon(icon)
    setShowIcons(false)
  }

  return (
    <div className="relative z-30">
      <button
        className="px-2 py-1 transition text-lg font-bold border rounded-[44px] bg-blue-500 text-white shadow-default-shadow hover:bg-white hover:text-black w-[40px] h-[40px]"
        onClick={() => setShowIcons(!showIcons)}
      >
        <i className={selectedIcon}></i>
      </button>
      <div
        className="absolute top-6 left-0 bg-white shadow-md rounded-3xl w-[380px] h-[250px] flex flex-col p-4 overflow-auto z-20"
        style={{ display: showIcons ? 'block' : 'none' }}
      >
        <div className="flex justify-between mb-4 border-y py-2 sticky top-[-16px] bg-white transition-all">
          <button
            className="bg-white shadow-default-shadow border border-[#e9eaf3] px-4 py-2 rounded-3xl transition-all hover:bg-blue-500 hover:text-white"
            onClick={() => setIconType(ICON_TYPES.solid)}
          >
            {ICON_TYPES.solid}
          </button>
          <button
            className="bg-white shadow-default-shadow border border-[#e9eaf3] px-4 py-2 rounded-3xl transition-all hover:bg-blue-500 hover:text-white"
            onClick={() => setIconType(ICON_TYPES.regular)}
          >
            {ICON_TYPES.regular}
          </button>
          <button
            className="bg-white shadow-default-shadow border border-[#e9eaf3] px-4 py-2 rounded-3xl transition-all hover:bg-blue-500 hover:text-white"
            onClick={() => setIconType(ICON_TYPES.brand)}
          >
            {ICON_TYPES.brand}
          </button>
        </div>
        <div className="flex flex-wrap gap-4">
          {icons[iconType].map((icon) => (
            <i
              key={generateKey()}
              className={`${icon} text-lg hover:text-blue-500 p-1 cursor-pointer`}
              onClick={() => handleIconClick(icon)}
            ></i>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Icons
