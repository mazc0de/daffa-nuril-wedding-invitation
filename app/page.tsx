'use client'

import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'
import { motion, MotionProps, AnimatePresence } from 'framer-motion'

import HeroSection from './components/Section/HeroSection'
import QuotesSection from './components/Section/QuotesSection'
import ProfileSection from './components/Section/ProfileSection'
import EventSection from './components/Section/EventSection'
import WeddingGiftSection from './components/Section/WeddingGiftSection'
import WishesSection from './components/Section/WishesSection'
import SplashWrapper from './components/SplashWrapper'

const sections = [
  { id: 1, Component: HeroSection },
  { id: 2, Component: QuotesSection },
  { id: 3, Component: ProfileSection },
  { id: 4, Component: EventSection },
  { id: 5, Component: WeddingGiftSection },
  { id: 6, Component: WishesSection }
]

const Home = () => {
  const [isOpened, setIsOpened] = useState(false)

  const [activeSection, setActiveSection] = useState(0)
  const sectionRefs = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    if (!isOpened) return

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.indexOf(
              entry.target as HTMLElement
            )
            if (index !== -1) setActiveSection(index)
          }
        })
      },
      { threshold: 0.6 }
    )

    sectionRefs.current.forEach(el => el && observer.observe(el))
    return () => observer.disconnect()
  }, [isOpened])

  const scrollToSection = (index: number) => {
    sectionRefs.current[index]?.scrollIntoView({ behavior: 'smooth' })
  }

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
      duration,
      repeat: Infinity,
      ease: [0.445, 0.05, 0.55, 0.95],
      delay
    }
  })

  const shipJourney: MotionProps = {
    animate: {
      x: ['-300px', '500px', '-300px'],
      rotateY: [0, 0, 180, 180],
      y: [0, -12, 0]
    },
    transition: {
      x: { duration: 25, repeat: Infinity, ease: 'linear', times: [0, 0.5, 1] },
      rotateY: {
        duration: 25,
        repeat: Infinity,
        ease: 'linear',
        times: [0, 0.49, 0.5, 1]
      },
      y: {
        duration: 4,
        repeat: Infinity,
        repeatType: 'mirror',
        ease: 'easeInOut'
      }
    }
  }

  return (
    <main className='bg-1 shadow-custom relative h-screen w-full overflow-hidden bg-cover bg-center bg-no-repeat'>
      <motion.div
        {...smoothWind(12, 8, 3, 0)}
        className='absolute -top-8 -left-8 z-10'
      >
        <Image
          src='/images/tl.webp'
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
          src='/images/tr.webp'
          alt='btr'
          width={300}
          height={300}
          priority
        />
      </motion.div>
      <motion.div
        {...smoothWind(10, 5, 4, 0.5)}
        className='absolute -bottom-6 -left-6 z-30 origin-bottom-left'
      >
        <Image
          src='/images/bunga-right.webp'
          alt='fl'
          width={250}
          height={250}
        />
      </motion.div>
      <motion.div
        {...smoothWind(11, -5, -4, 1.5)}
        className='absolute -right-6 -bottom-6 z-30 origin-bottom-right'
      >
        <Image
          src='/images/bunga-left.webp'
          alt='fr'
          width={250}
          height={250}
        />
      </motion.div>
      <Image
        src='/images/tl-2.webp'
        alt='tl'
        width={250}
        height={250}
        className='absolute top-96 left-0 z-20 opacity-80'
      />
      <Image
        src='/images/tr-2.webp'
        alt='tr'
        width={250}
        height={250}
        className='absolute top-96 right-0 z-20 opacity-80'
      />
      <motion.div {...shipJourney} className='absolute bottom-16 left-0 z-10'>
        <Image src='/images/ship.webp' alt='ship' width={300} height={300} />
      </motion.div>

      {/* SPLASH SCREEN */}
      <AnimatePresence>
        {!isOpened && (
          <motion.div
            initial={{ y: 0, opacity: 1 }}
            exit={{ y: '-100vh', opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.45, 0, 0.55, 1] }}
            className='absolute inset-0 z-50 flex h-screen w-full items-center justify-center backdrop-blur-[2px]'
          >
            <div className='h-full w-full max-w-md'>
              <SplashWrapper onOpen={() => setIsOpened(true)} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {isOpened && (
        <>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            className='absolute top-1/2 right-2 z-51 flex -translate-y-1/2 flex-col items-center'
          >
            <div className='flex flex-col items-center space-y-4'>
              {sections.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(index)}
                  className={`h-2 w-2 rounded-full transition-all duration-300 ${
                    activeSection === index
                      ? 'bg-primary-800 scale-125'
                      : 'bg-primary-800/40 hover:bg-primary-800'
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* Kontainer */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className='absolute inset-0 z-40 h-screen w-full overflow-y-auto scroll-smooth'
          >
            {sections.map((section, index) => {
              const SectionContent = section.Component

              return (
                <section
                  key={section.id}
                  ref={el => {
                    sectionRefs.current[index] = el
                  }}
                  className={`mx-auto flex items-center justify-center ${
                    index === 1
                      ? 'w-full p-0'
                      : index === 4
                        ? 'w-full p-6'
                        : `max-w-md p-6 ${index === 2 ? 'min-h-screen' : 'h-screen'}`
                  }`}
                >
                  <SectionContent />
                </section>
              )
            })}
          </motion.div>
        </>
      )}
    </main>
  )
}

export default Home
