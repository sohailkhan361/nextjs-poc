import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'

export default function Home() {
  return (
    <div>
      <h2>Hello</h2>
      <UserButton />
    </div>
  )
}
