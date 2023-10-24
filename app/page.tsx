'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image'
import Hero from '@/components/Home/Hero'
import SearchInput from '@/components/Home/SearchInput'
import ItemsFilterOption from '@/components/Home/ItemsFilterOption'
import { getItemsList } from '@/services';
import { ItemsList } from '@/types';

export default function Home() {
  const [itemsList, setItemsList] = useState<ItemsList[]>([]);

  const getItemsList_ = async () => {
    const result = await getItemsList() as ItemsList[];
    setItemsList(result);
  };

  useEffect(() => {
    getItemsList_();
  }, []);

  return (
    <div className='p-5 sm:px-10 md:px-20'>
      <Hero />
      <SearchInput />
      <ItemsFilterOption />
    </div>
  )
}