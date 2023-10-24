'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image'
import Hero from '@/components/Home/Hero'
import SearchInput from '@/components/Home/SearchInput'
import ItemsFilterOption from '@/components/Home/ItemsFilterOption'
import ItemsList from '@/components/Home/ItemsList';
import { getItemsList } from '@/services';
import { ItemsListType } from '@/types';

export default function Home() {
  const [itemsLists, setItemsLists] = useState<ItemsListType[]>([]);

  const getItemsList_ = async () => {
    const result: any = await getItemsList();
    setItemsLists(result?.itemsLists);
  };

  useEffect(() => {
    getItemsList_();
  }, []);

  return (
    <div className='p-5 sm:px-10 md:px-20'>
      <Hero />
      <SearchInput />
      <ItemsFilterOption />
      <ItemsList itemsLists={itemsLists} />
    </div>
  )
}