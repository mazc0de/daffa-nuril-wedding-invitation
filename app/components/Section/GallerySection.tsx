import React, { useState } from 'react'
import { motion, Variants, AnimatePresence } from 'framer-motion'

import Frame from '../Frame'
import Typography from '../Typography'

const images: string[] = [
  'https://picsum.photos/800/500?random=1',
  'https://picsum.photos/500/800?random=2',
  'https://picsum.photos/600/600?random=3',
  'https://picsum.photos/600/1000?random=4',
  'https://picsum.photos/1000/600?random=5',
  'https://picsum.photos/600/800?random=6',
  'https://picsum.photos/800/600?random=7',
  'https://picsum.photos/500/700?random=8'
]

const GallerySection: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (selectedIndex !== null) {
      setSelectedIndex(
        selectedIndex === 0 ? images.length - 1 : selectedIndex - 1
      )
    }
  }

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (selectedIndex !== null) {
      setSelectedIndex(
        selectedIndex === images.length - 1 ? 0 : selectedIndex + 1
      )
    }
  }

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

  const scaleVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }
    }
  }

  return (
    <Frame className='relative flex h-full w-full flex-col items-center gap-4 overflow-hidden rounded-4xl! p-4'>
      <motion.div
        className='flex min-h-0 w-full flex-1 flex-col items-center gap-4'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className='shrink-0'>
          <Typography
            fontFamily='english111viva'
            size={36}
            color='primary'
            className='leading-tight'
          >
            Our Gallery
          </Typography>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className='custom-scrollbar min-h-0 w-full flex-1 columns-2 gap-4 overflow-y-auto px-2 pb-4 md:columns-3 lg:columns-4'
        >
          {images.map((src, index) => (
            <motion.div
              key={index}
              variants={scaleVariants}
              className='mb-4 break-inside-avoid'
            >
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className='h-auto w-full cursor-pointer rounded-xl object-cover shadow-md transition-transform duration-300 hover:scale-105'
                loading='lazy'
                onClick={() => setSelectedIndex(index)}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className='fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm'
            onClick={() => setSelectedIndex(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className='flex max-h-full max-w-[90vw] flex-col items-center'
              onClick={(e: React.MouseEvent<HTMLDivElement>) =>
                e.stopPropagation()
              }
            >
              <div className='relative max-h-full max-w-full'>
                <motion.img
                  key={selectedIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  src={images[selectedIndex]}
                  alt={`Preview ${selectedIndex + 1}`}
                  className='max-h-[85vh] max-w-full rounded-lg object-contain shadow-2xl'
                />

                <button
                  className='absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-xl font-bold text-white backdrop-blur-md transition-colors hover:bg-black/80 md:top-4 md:right-4 md:h-10 md:w-10 md:text-2xl'
                  onClick={e => {
                    e.stopPropagation()
                    setSelectedIndex(null)
                  }}
                >
                  &times;
                </button>

                <button
                  className='absolute top-1/2 left-3 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-2xl font-bold text-white backdrop-blur-md transition-colors hover:bg-black/80 md:left-4 md:h-12 md:w-12 md:text-3xl'
                  onClick={handlePrev}
                >
                  &#8249;
                </button>

                <button
                  className='absolute top-1/2 right-3 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-2xl font-bold text-white backdrop-blur-md transition-colors hover:bg-black/80 md:right-4 md:h-12 md:w-12 md:text-3xl'
                  onClick={handleNext}
                >
                  &#8250;
                </button>
              </div>

              <div className='mt-3 text-sm font-medium tracking-widest text-gray-400'>
                {selectedIndex + 1} / {images.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Frame>
  )
}

export default GallerySection
