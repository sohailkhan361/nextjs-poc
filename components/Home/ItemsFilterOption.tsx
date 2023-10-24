'use client';

import React, { useEffect, useState } from 'react';

function ItemsFilterOption({ itemsLists, setPublisher, orderItemsList }: any) {
    const [publisherList, setPublisherList] = useState<any>();
    const PublisherSet = new Set();

    useEffect(() => {
        if (itemsLists) {
            filterItemsList();
        };
    }, [itemsLists]);

    const filterItemsList = () => {
        itemsLists.forEach((element: any) => {
            PublisherSet.add(element.publisher);
        });
        setPublisherList(Array.from(PublisherSet));
    };

    return (
        <div className='mt-10 flex items-center justify-between'>
            <div>
                <h2 className='text-[30px] font-bold'>Books Catalogue</h2>
                <h2>Explore our books you might like</h2>
            </div>
            <div className='flex gap-5'>
                <select className="select select-bordered w-full max-w-xs hidden md:block"
                    onChange={(e) => orderItemsList(e.target.value)}>
                    <option disabled selected>Price</option>
                    <option value={1}>Min to Max</option>
                    <option value={-1}>Max to Min</option>
                </select>
                <select className="select select-bordered w-full max-w-xs"
                    onChange={(e) => setPublisher(e.target.value)}>
                    <option disabled selected>Publisher</option>
                    {publisherList && publisherList.map((publisher: string, index: number) => (
                        <option key={index}>{publisher}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default ItemsFilterOption