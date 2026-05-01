import Link from 'next/link'
import { motion, Variants } from 'framer-motion'

import Frame from '../Frame'
import Button from '../Button'
import Typography from '../Typography'
import MapPinIcon from '../Icons/MapPinIcon'
import CheersIcon from '../Icons/CheersIcon'
import WeddingRingIcon from '../Icons/WeddingRingIcon'
import { GOOGLE_MAP_HOUSE_LOCATION } from '@/app/constants/app'

const EventSection = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  }

  const iconVariants: Variants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }
    }
  }

  return (
    <Frame className='flex flex-col items-center justify-center gap-8 overflow-hidden rounded-4xl! p-4'>
      <motion.div
        className='flex w-full flex-col items-center justify-center gap-1'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.div variants={iconVariants} className='mb-2'>
          <WeddingRingIcon size={48} />
        </motion.div>

        <motion.div variants={itemVariants}>
          <Typography
            fontFamily='english111viva'
            size={36}
            color='primary'
            className='leading-tight'
          >
            Akad Nikah
          </Typography>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Typography
            fontFamily='brigesta'
            size={16}
            color='primary'
            className='leading-tight'
          >
            Minggu, 31 Mei 2026
          </Typography>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Typography
            fontFamily='workSans'
            size={14}
            color='#212529'
            weight='semibold'
          >
            Pukul 07.30
          </Typography>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Typography
            fontFamily='workSans'
            size={14}
            color='#212529'
            weight='normal'
            className='mb-2 text-center'
          >
            Perumahan Wisma Taman Mandiri, <br />
            Blok C No.20
          </Typography>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Link
            href={GOOGLE_MAP_HOUSE_LOCATION}
            target='_blank'
            rel='noopener noreferrer'
            className='self-center'
          >
            <Button className='group flex w-fit items-center gap-3 rounded-full! border-neutral-200! bg-white py-1! pr-4! pl-1! transition-colors hover:bg-neutral-50!'>
              <div className='bg-primary-800 flex aspect-square h-6 w-6 shrink-0 items-center justify-center rounded-full shadow-sm'>
                <MapPinIcon size={12} fill='#fff' />
              </div>
              <Typography
                fontFamily='workSans'
                color='#1a1a1a'
                className='text-center font-medium tracking-wide'
                size={12}
              >
                Google Maps
              </Typography>
            </Button>
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        className='flex w-full flex-col items-center justify-center gap-1'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.div variants={iconVariants} className='mb-2'>
          <CheersIcon size={48} />
        </motion.div>

        <motion.div variants={itemVariants}>
          <Typography
            fontFamily='english111viva'
            size={36}
            color='primary'
            className='leading-tight'
          >
            Resepsi
          </Typography>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Typography
            fontFamily='brigesta'
            size={16}
            color='primary'
            className='leading-tight'
          >
            Minggu, 31 Mei 2026
          </Typography>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Typography
            fontFamily='workSans'
            size={14}
            color='#212529'
            weight='semibold'
          >
            Pukul 12.00
          </Typography>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Typography
            fontFamily='workSans'
            size={14}
            color='#212529'
            weight='normal'
            className='mb-2 text-center'
          >
            Perumahan Wisma Taman Mandiri, <br />
            Blok C No.20
          </Typography>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Link
            href={GOOGLE_MAP_HOUSE_LOCATION}
            target='_blank'
            rel='noopener noreferrer'
            className='self-center'
          >
            <Button className='group flex w-fit items-center gap-3 rounded-full! border-neutral-200! bg-white py-1! pr-4! pl-1! transition-colors hover:bg-neutral-50!'>
              <div className='bg-primary-800 flex aspect-square h-6 w-6 shrink-0 items-center justify-center rounded-full shadow-sm'>
                <MapPinIcon size={12} fill='#fff' />
              </div>
              <Typography
                fontFamily='workSans'
                color='#1a1a1a'
                className='text-center font-medium tracking-wide'
                size={12}
              >
                Google Maps
              </Typography>
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </Frame>
  )
}

export default EventSection
