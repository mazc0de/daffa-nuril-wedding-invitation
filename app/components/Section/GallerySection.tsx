import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import Frame from '../Frame'
import Typography from '../Typography'
import Image from 'next/image'
import {
  containerVariants,
  itemVariants,
  scaleVariants
} from '@/app/utils/framer'

const images = [
  { src: 'https://picsum.photos/800/500?random=1', width: 800, height: 500 },
  { src: 'https://picsum.photos/500/800?random=2', width: 500, height: 800 },
  { src: 'https://picsum.photos/600/600?random=3', width: 600, height: 600 },
  { src: 'https://picsum.photos/600/1000?random=4', width: 600, height: 1000 },
  { src: 'https://picsum.photos/1000/600?random=5', width: 1000, height: 600 },
  { src: 'https://picsum.photos/600/800?random=6', width: 600, height: 800 },
  { src: 'https://picsum.photos/800/600?random=7', width: 800, height: 600 },
  { src: 'https://picsum.photos/500/700?random=8', width: 500, height: 700 }
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
          className='custom-scrollbar min-h-0 w-full flex-1 columns-2 gap-4 overflow-y-auto px-2 pb-4 md:columns-2 lg:columns-4'
        >
          {images.map((item, index) => (
            <motion.div
              key={index}
              variants={scaleVariants}
              className='mb-4 break-inside-avoid'
            >
              <Image
                src={item.src}
                alt={`Gallery ${index + 1}`}
                width={item.width}
                height={item.height}
                sizes='(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw'
                className='h-auto w-full cursor-pointer rounded-xl object-cover shadow-md transition-transform duration-300 hover:scale-105'
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
              <div className='relative max-h-full max-w-full overflow-hidden rounded-lg'>
                {/* Perbaikan: Menggunakan wrapper motion.div dan Image Next.js */}
                <motion.div
                  key={selectedIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={images[selectedIndex].src}
                    alt={`Preview ${selectedIndex + 1}`}
                    width={images[selectedIndex].width}
                    height={images[selectedIndex].height}
                    priority
                    className='max-h-[80vh] w-auto rounded-lg object-contain shadow-2xl'
                  />
                </motion.div>

                {/* Tombol Close */}
                <button
                  className='absolute top-3 right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-xl font-bold text-white backdrop-blur-md transition-colors hover:bg-black/80 md:top-4 md:right-4 md:h-10 md:w-10 md:text-2xl'
                  onClick={e => {
                    e.stopPropagation()
                    setSelectedIndex(null)
                  }}
                >
                  &times;
                </button>

                {/* Tombol Prev */}
                <button
                  className='absolute top-1/2 left-3 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-2xl font-bold text-white backdrop-blur-md transition-colors hover:bg-black/80 md:left-4 md:h-12 md:w-12 md:text-3xl'
                  onClick={handlePrev}
                >
                  &#8249;
                </button>

                {/* Tombol Next */}
                <button
                  className='absolute top-1/2 right-3 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-2xl font-bold text-white backdrop-blur-md transition-colors hover:bg-black/80 md:right-4 md:h-12 md:w-12 md:text-3xl'
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
