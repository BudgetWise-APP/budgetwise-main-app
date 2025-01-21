const TableRow = ({ children, className, ...rest }) => {
  return (
    <div
      className={`relative grid gap-3 grid-rows-[auto] grid-cols-12 items-center py-4 px-[36px] ${className}`}
      {...rest}
    >
      <div className="absolute bg-white border-t border-t-[#e9eaf3] -left-[24px] h-full [width:calc(100%_+_48px)] z-[1]"></div>
      {children}
    </div>
  )
}

export default TableRow
