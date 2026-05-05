import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

import Frame from '../Frame'
import Button from '../Button'
import Typography from '../Typography'

import { GOOGLE_CALENDAR_URL } from '../../constants/app'
import { Dictionary } from '@/lib/dictionary'
import { itemVariants, scaleVariants } from '@/app/utils/framer'

interface HeroSectionProps {
  dict: Dictionary
}

const HeroSection = ({ dict }: HeroSectionProps) => {
  return (
    <Frame className='flex h-full flex-col gap-6 p-6'>
      <motion.div
        className='flex w-full flex-col items-center justify-center gap-6'
        initial='hidden'
        animate='visible'
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.3,
              delayChildren: 0.6
            }
          }
        }}
      >
        <motion.div variants={scaleVariants} className='w-full'>
          <div className='border-primary-800 group relative h-105 w-full overflow-hidden rounded-t-full border-2 border-solid'>
            <Image
              src='/images/couple.webp'
              alt='hero-image'
              fill
              priority
              sizes='(max-width: 768px) 100vw, 400px'
              className='object-cover object-center transition-transform duration-500 ease-out group-hover:scale-110'
            />
          </div>
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
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant='primary'
                borderRadius='rounded-full'
                className='w-fit cursor-pointer'
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
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
    </Frame>
  )
}

export default HeroSection
