import React from 'react'
import SplashWrapper from './components/SplashWrapper'
import Image from 'next/image'

const Home = () => {
  return (
    <div className='bg-1 relative min-h-full w-full bg-cover bg-center bg-no-repeat'>
      <Image
        src='/images/black-tree-left.webp'
        alt='black-tree-left'
        width={300}
        height={300}
        className='absolute top-0 left-0'
      />
      <Image
        src='/images/black-tree-right.webp'
        alt='black-tree-right'
        width={300}
        height={300}
        className='absolute top-0 right-0'
      />
      <Image
        src='/images/tree-left.webp'
        alt='tree-left'
        width={120}
        height={500}
        className='absolute top-48 left-0 overflow-hidden'
      />
      <Image
        src='/images/tree-right.webp'
        alt='tree-right'
        width={120}
        height={500}
        className='absolute top-48 right-0 overflow-hidden'
      />
      <Image
        src='/images/flower-left.webp'
        alt='flower-left'
        width={250}
        height={250}
        className='absolute bottom-0 left-0 overflow-hidden'
      />
      <Image
        src='/images/flower-right.webp'
        alt='flower-right'
        width={250}
        height={250}
        className='absolute right-0 bottom-0 overflow-hidden'
      />
      <SplashWrapper />
    </div>
  )
}

export default Home
