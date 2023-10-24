'use client';

import { useState, useEffect } from 'react';
import Hero from '@/components/Home/Hero'
import SearchInput from '@/components/Home/SearchInput'
import ItemsFilterOption from '@/components/Home/ItemsFilterOption'
import ItemsList from '@/components/Home/ItemsList';
import Notification from '@/components/Notification';
import { getItemsList } from '@/services';
import { ItemsListType } from '@/types';
import { ItemsContext } from '@/context/ItemsContext';

export default function Home() {
  const [itemsOrgLists, setItemsOrgLists] = useState<ItemsListType[]>([]);
  const [itemsLists, setItemsLists] = useState<ItemsListType[]>([]);
  const [showToastMsg,setShowToastMsg]=useState<boolean>(false);

  const getItemsList_ = async () => {
    const result: any = await getItemsList();
    setItemsOrgLists(result?.itemsLists);
    setItemsLists(result?.itemsLists);
  };

  const filterItemsList = (publisher: string) => {
    const filterList = itemsOrgLists.filter((item: any) => (item.publisher === publisher));
    setItemsLists(filterList);
  };

  const orderItemList = (order: any) => {
    const sortedData = [...itemsOrgLists].sort((a, b) =>
      order == 1 ? a.price - b.price : b.price - a.price);
    setItemsLists(sortedData);
  }

  useEffect(() => {
    getItemsList_();
  }, []);

  useEffect(()=>{
    if(showToastMsg)
    {
      setTimeout(function(){
        setShowToastMsg(false)
      }, 3000);
    }
  },[showToastMsg]);

  return (
    <div className='p-5 sm:px-10 md:px-20'>
      <ItemsContext.Provider value={{showToastMsg, setShowToastMsg}}>
          <Hero />
          <SearchInput />
          <ItemsFilterOption
            itemsLists={itemsOrgLists}
            setPublisher={(value: string) => filterItemsList(value)}
            orderItemsList={(value: string) => orderItemList(value)}
          />
          <ItemsList
            itemsLists={itemsLists}
          />
          {
            showToastMsg ? <Notification msg={'Request sent successfully.'} /> : null
          }
      </ItemsContext.Provider>
    </div>
  )
}