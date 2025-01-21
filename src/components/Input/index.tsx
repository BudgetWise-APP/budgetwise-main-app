const Input = ({...rest}) => {
    return (
        <input className='transition text-sm rounded-[52px] border border-slate-300 bg-[#f7f9fc] h-[38px] min-h-[52px] py-4 px-6 outline-none focus:border-blue-500 mb-3' {...rest} />
    );
};

export default Input;