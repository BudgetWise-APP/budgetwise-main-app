const TableHeader = ({children, className}) => {
    return (
        <div className='relative grid gap-3 grid-rows-[auto] grid-cols-12 items-center py-4 px-[36px]'>
            <div className='absolute bg-[#f7f9fc] border-t border-t-[#e9eaf3] -left-[24px] h-full [width:calc(100%_+_48px)] z-[1]'></div>
            {children}
        </div>
    );
};

export default TableHeader;