import Image from 'next/image'

export default function Home() {
  return (
    <div className='flex gap-2 items-center'>
      <Image
        src='/logo.svg'
        alt='logo'
        width={50}
        height={50}
      />
      <span className='text-xl font-semibold tracking-tight'>MyTube</span>
    </div>
  )
}
