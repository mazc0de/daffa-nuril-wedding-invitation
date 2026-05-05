import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

import Frame from '../Frame'
import Button from '../Button'
import Typography from '../Typography'
import { InstagramIcon } from '../Icons/InstagramIcon'
import { DAFFA_INSTAGRAM, NURIL_INSTAGRAM } from '@/app/constants/app'
import {
  containerVariants,
  itemVariants,
  scaleVariants
} from '@/app/utils/framer'

const ProfileSection = () => {
  return (
    <Frame className='flex h-fit flex-col gap-2 overflow-hidden p-4'>
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.3 }}
        variants={scaleVariants}
      >
        <div className='border-primary-800 relative h-80 w-full overflow-hidden rounded-t-full border-2 border-solid'>
          <Image
            src='/images/brides-grain.webp'
            alt='the-brides-photo'
            fill
            sizes='(max-width: 768px) 100vw, 800px'
            className='object-cover object-center'
          />
        </div>
      </motion.div>

      <div className='flex flex-col items-center justify-center'>
        <motion.div
          className='mt-4 flex flex-col items-center gap-3'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <Typography
              fontFamily='photographSignature'
              size={60}
              className='text-center leading-16'
            >
              Nuril
            </Typography>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Typography
              fontFamily='brigesta'
              size={30}
              color='primary'
              className='text-center leading-tight tracking-wide'
            >
              Nuril Syafa Aini, S.Sos
            </Typography>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Link
              href={NURIL_INSTAGRAM}
              target='_blank'
              rel='noopener noreferrer'
            >
              <Button className='group flex w-fit items-center gap-3 rounded-full! border-neutral-200! bg-white py-1! pr-4! pl-1! transition-all hover:bg-neutral-50!'>
                <div className='flex aspect-square h-6 w-6 shrink-0 items-center justify-center rounded-full bg-linear-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] shadow-sm'>
                  <InstagramIcon size={18} fill='#fff' />
                </div>
                <Typography
                  fontFamily='workSans'
                  color='#1a1a1a'
                  className='text-center font-medium tracking-wide'
                  size={12}
                >
                  Instagram
                </Typography>
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.8 }}
          variants={scaleVariants}
        >
          <Typography
            fontFamily='english111viva'
            size={60}
            className='my-4 text-center leading-normal'
          >
            &
          </Typography>
        </motion.div>

        <motion.div
          className='mb-4 flex flex-col items-center gap-3'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <Typography
              fontFamily='photographSignature'
              size={60}
              className='text-center leading-16'
            >
              Daffa
            </Typography>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Typography
              fontFamily='brigesta'
              size={30}
              color='primary'
              className='text-center leading-tight tracking-wide'
            >
              Daffa Hanifisyafiq, S.Kom
            </Typography>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Link
              href={DAFFA_INSTAGRAM}
              target='_blank'
              rel='noopener noreferrer'
            >
              <Button className='group flex w-fit items-center gap-3 rounded-full! border-neutral-200! bg-white py-1! pr-4! pl-1! transition-all hover:bg-neutral-50!'>
                <div className='flex aspect-square h-6 w-6 shrink-0 items-center justify-center rounded-full bg-linear-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] shadow-sm'>
                  <InstagramIcon size={18} fill='#fff' />
                </div>
                <Typography
                  fontFamily='workSans'
                  color='#1a1a1a'
                  className='text-center font-medium tracking-wide'
                  size={12}
                >
                  Instagram
                </Typography>
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.3 }}
        variants={scaleVariants}
      >
        <div className='border-primary-800 relative h-80 w-full overflow-hidden rounded-b-full border-2 border-solid'>
          <Image
            src='/images/grooms-grain.webp'
            alt='the-grooms-photo'
            fill
            sizes='(max-width: 768px) 100vw, 800px'
            className='object-cover object-[50%_100%]'
          />
        </div>
      </motion.div>
    </Frame>
  )
}

export default ProfileSection
