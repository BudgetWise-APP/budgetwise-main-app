import React from 'react';

const Select = ({options = [], className, ...rest}) => {
    return (
        <select 
            className={`rounded-[52px] border border-slate-300 bg-[#f7f9fc] h-[38px] shadow-none min-h-[52px] py-4 px-6 outline-none focus:border-blue-500 mb-4 ${className}`}
            {...rest}
        >
            {options.map((option) => (
                <option key={option?.value} value={option?.value}>
                    {option?.label}
                </option>
            ))}
        </select>
    );
};

export default Select;