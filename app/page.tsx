'use client'

import Image from 'next/image'
import { motion, MotionProps } from 'framer-motion'
import SplashWrapper from './components/SplashWrapper'

const Home = () => {
  const smoothWind = (
    duration: number,
    xRange: number,
    rRange: number,
    delay: number = 0
  ): MotionProps => ({
    animate: {
      x: [0, xRange, 0, -xRange, 0],
      rotate: [0, rRange, 0, -rRange, 0],
      y: [0, -3, 0, 3, 0]
    },
    transition: {
      duration: duration,
      repeat: Infinity,
      ease: [0.445, 0.05, 0.55, 0.95],
      delay: delay
    }
  })

  return (
    <main className='bg-1 shadow-custom relative min-h-screen w-full overflow-hidden bg-cover bg-center bg-no-repeat'>
      <motion.div
        {...smoothWind(12, 8, 3, 0)}
        className='absolute -top-8 -left-8 z-10'
      >
        <Image
          src='/images/black-tree-left.webp'
          alt='btl'
          width={300}
          height={300}
          priority
        />
      </motion.div>

      <motion.div
        {...smoothWind(14, -8, -3, 1)}
        className='absolute -top-8 -right-8 z-10'
      >
        <Image
          src='/images/black-tree-right.webp'
          alt='btr'
          width={300}
          height={300}
          priority
        />
      </motion.div>

      <motion.div
        {...smoothWind(10, 5, 4, 0.5)}
        className='absolute -bottom-6 -left-6 z-20 origin-bottom-left'
      >
        <Image
          src='/images/flower-left.webp'
          alt='fl'
          width={250}
          height={250}
        />
      </motion.div>

      <motion.div
        {...smoothWind(11, -5, -4, 1.5)}
        className='absolute -right-6 -bottom-6 z-20 origin-bottom-right'
      >
        <Image
          src='/images/flower-right.webp'
          alt='fr'
          width={250}
          height={250}
        />
      </motion.div>

      <Image
        src='/images/tree-left.webp'
        alt='tl'
        width={120}
        height={500}
        className='absolute top-48 left-0 z-10 opacity-80'
      />
      <Image
        src='/images/tree-right.webp'
        alt='tr'
        width={120}
        height={500}
        className='absolute top-48 right-0 z-10 opacity-80'
      />

      <div className='relative z-30 flex h-screen w-full items-center justify-center'>
        <div className='h-full w-full max-w-md'>
          <SplashWrapper />
        </div>
      </div>
    </main>
  )
}

export default Home
