import { useState } from 'react'

const Collapse = ({ children, title }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-t border-t-[#e9eaf3] rounded-md overflow-hidden w-full bg-white border border-[#e9eaf3] mb-4">
      <div
        className="cursor-pointer bg-gray-white px-4 py-3 text-gray-800 border-b border-[#e9eaf3] font-medium hover:bg-blue-100 transition-colors duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
      </div>

      <div
        className={`transition-[max-height,opacity,transform] ${
          isOpen
            ? 'duration-500 ease-in-out h-full opacity-100 translate-y-0'
            : 'duration-500 ease-in-out h-0 opacity-0 -translate-y-2'
        }`}
      >
        <div className="p-4">{children}</div>
      </div>
    </div>
  )
}

export default Collapse
