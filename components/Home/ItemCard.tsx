import React, { useState } from 'react'
import Image from 'next/image';

const Itemitemd = (props: any) => {
    const [item, setItem] = useState(props.item);
    return (
        <div>
            <h2 className='text-[20px] font-medium mb-2'>{item.name}</h2>
            <h2 className='text-[28px] font-bold mb-2'>
                <span className='text-[12px] font-light'>$ </span>
                {item.price}
                <span className='text-[12px] font-light'> /day</span>
            </h2>
            <Image
                src={item?.image?.url}
                alt={item.name}
                width={220}
                height={200}
                className='w-[250px] h-[150px] mb-3 object-contain'
                decoding='async'
            />
        </div>
    )
}

export default Itemitemd