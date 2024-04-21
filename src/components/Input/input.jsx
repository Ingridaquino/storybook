'use client';

import React, { useState } from 'react';

const Input = ({ label, placeholder, type, onChange }) => {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        const newValue = event.target.value;
        setValue(newValue);

        if (onChange) {
            onChange(newValue);
        }
    };

    return (
        <div className="w-72">
            <div className="relative h-10 w-full min-w-[200px]">
                <input 
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={handleChange}
                    className="peer h-full w-full rounded border border-text  bg-white px-3 py-2.5 font-sans text-sm font-normal text-text shadow-lg transition-all placeholder:text-gray-500 placeholder-shown:border placeholder-shown:border-text disabled:border-0 outline-none"
                />
            </div>
        </div>
    );
};

export default Input;

