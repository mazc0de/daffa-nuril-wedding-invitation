import Link from 'next/link'
import Image from 'next/image'
import { motion, Variants } from 'framer-motion'

import Frame from '../Frame'
import Button from '../Button'
import Typography from '../Typography'

import { GOOGLE_CALENDAR_URL } from '../../constants/app'
import { Dictionary } from '@/lib/dictionary'

interface HeroSectionProps {
  dict: Dictionary
}

const HeroSection = ({ dict }: HeroSectionProps) => {
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
    <Frame className='flex h-full flex-col gap-6 p-6'>
      <motion.div
        className='flex w-full flex-col items-center justify-center gap-6'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.div variants={scaleVariants} className='w-full'>
          <Image
            src='https://i.pinimg.com/1200x/41/a4/67/41a467f9dc5e5ddcc8bc91425bb3e184.jpg'
            alt='hero-image'
            width={400}
            height={600}
            className='border-primary-800 h-105 w-full rounded-t-full border-2 border-solid object-cover'
          />
        </motion.div>

        <motion.div
          variants={itemVariants}
          className='flex flex-col items-center justify-center gap-2'
        >
          <Typography
            fontFamily='workSans'
            size={14}
            color='#212529'
            className='uppercase'
          >
            {dict.wedding_of}
          </Typography>
          <Typography
            fontFamily='brigesta'
            size={40}
            color='primary'
            className='leading-tight'
          >
            Nuril & Daffa
          </Typography>
          <Typography
            fontFamily='brigesta'
            size={14}
            color='#212529'
            weight='semibold'
            className='tracking-wider'
          >
            {dict.wedding_date}
          </Typography>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Link
            href={GOOGLE_CALENDAR_URL}
            target='_blank'
            rel='noopener noreferrer'
            className='self-center'
          >
            <Button
              variant='primary'
              borderRadius='rounded-full'
              className='w-fit'
            >
              <Typography
                fontFamily='workSans'
                size={14}
                color='#fff'
                weight='medium'
              >
                {dict.save_the_date}
              </Typography>
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </Frame>
  )
}

export default HeroSection
