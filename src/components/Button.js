import React from 'react';

const Button = ({name}) => {
    return (
        <div>
            <button className='px-3 py-1 bg-gray-200 rounded-lg max-sm:px-2 border-[1px] border-black'>{name}</button>
        </div>
    )
}

export default Button;