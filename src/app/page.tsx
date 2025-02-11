import Image from 'next/image'
import { Button } from '@/components/ui/button'
import HomeLayout from '@/modules/home/ui/layouts/home-layout'

export default function Home() {
  console.log('home')

  return (
    <div className='flex gap-2 items-center'>
      <HomeLayout>
        <Image
          src='/logo.svg'
          alt='logo'
          width={50}
          height={50}
        />
        <span className='text-xl font-semibold tracking-tight'>MyTube</span>
      </HomeLayout>
    </div>
  )
}
