import Image from 'next/image'
import Hero from '@/components/Home/Hero'
import SearchInput from '@/components/Home/SearchInput'
import ItemsFilterOption from '@/components/Home/ItemsFilterOption'

export default function Home() {
  return (
    <div className='p-5 sm:px-10 md:px-20'>
      <Hero />
      <SearchInput />
      <ItemsFilterOption />
    </div>
  )
}