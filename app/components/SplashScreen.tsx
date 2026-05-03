'use client' // Tambahkan ini jika file ini berada di app/ folder dan menggunakan Framer Motion

import { useSearchParams } from 'next/navigation'
import { motion, Variants } from 'framer-motion' // Import Framer Motion

import Frame from './Frame'
import Button from './Button'
import Typography from './Typography'
import { Dictionary } from '@/lib/dictionary'

interface SplashScreenProps {
  onOpen: () => void
  dict: Dictionary
}

const SplashScreen = ({ onOpen, dict }: SplashScreenProps) => {
  const searchParams = useSearchParams()
  const guestName = searchParams.get('to') || 'Nama Tamu'

  // Variant untuk container (mengatur antrean animasi anak-anaknya)
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Jeda waktu antar elemen muncul
        delayChildren: 0.3 // Delay sebelum animasi pertama dimulai
      }
    }
  }

  // Variant untuk setiap item (animasi fade-up elegan)
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.45, 0, 0.55, 1] } // Custom ease mirip di HomeClient
    }
  }

  return (
    <div className='relative z-10 flex h-full w-full items-center justify-center p-6'>
      <Frame className='flex h-full w-full flex-col items-center justify-center p-8 text-center'>
        {/* Container Animasi */}
        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate='visible'
          className='flex flex-col items-center justify-center gap-5'
        >
          {/* Item 1: The Wedding Of */}
          <motion.div variants={itemVariants}>
            <Typography fontFamily='workSans' size={14} color='#212529'>
              {dict.wedding_of}
            </Typography>
          </motion.div>

          {/* Item 2: Nama Mempelai */}
          <motion.div
            variants={itemVariants}
            className='flex flex-col items-center'
          >
            <Typography
              fontFamily='brigesta'
              size={60}
              color='primary'
              className='leading-tight'
            >
              Nuril
            </Typography>
            <Typography
              fontFamily='english111viva'
              size={36}
              color='primary'
              className='mb-4 leading-tight'
            >
              &
            </Typography>
            <Typography
              fontFamily='brigesta'
              size={60}
              color='primary'
              className='leading-tight'
            >
              Daffa
            </Typography>
          </motion.div>

          {/* Item 3: Nama Tamu */}
          <motion.div
            variants={itemVariants}
            className='flex flex-col items-center gap-1'
          >
            <Typography
              fontFamily='workSans'
              size={14}
              color='#212529'
              weight='medium'
            >
              {dict.to} <br />
              {dict.recipient}
            </Typography>
            <Typography
              fontFamily='workSans'
              size={16}
              color='primary'
              weight='semibold'
              className='mt-1 capitalize'
            >
              {guestName.replace(/-/g, ' ')}
            </Typography>
          </motion.div>

          {/* Item 4: Tombol Buka Undangan */}
          <motion.div variants={itemVariants} className='mt-4'>
            <div onClick={onOpen} className='cursor-pointer'>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant='primary' borderRadius='rounded-full'>
                  <Typography
                    fontFamily='workSans'
                    size={14}
                    color='#fff'
                    weight='medium'
                  >
                    {dict.open_invitation}
                  </Typography>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </Frame>
    </div>
  )
}

export default SplashScreen
