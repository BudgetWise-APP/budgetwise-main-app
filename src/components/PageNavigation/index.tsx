import Box from '../Box';

const PageNavigation = ({items, page, setPage}) => {
    return (
        <Box className='max-w-[275px] sticky top-[24px] flex flex-col h-max'>
            {items?.map((item, index) => {
                const isActive = page === index;
                return (
                    <button 
                        key={index} 
                        onClick={() => setPage(index)}
                        className={`text-semibold rounded-md w-full flex items-center text-base p-3 transition bg-white hover:text-blue-500 ${isActive && 'text-blue-500'}`}
                    >
                        {item?.icon}{item.name}
                    </button>
                );
            })}
        </Box>
    );
};

export default PageNavigation;