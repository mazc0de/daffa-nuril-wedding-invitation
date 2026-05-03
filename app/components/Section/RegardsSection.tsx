import Image from 'next/image'
import { motion, Variants } from 'framer-motion'
import Frame from '../Frame'
import Typography from '../Typography'
import { Dictionary } from '@/lib/dictionary'
import { itemVariants, scaleVariants } from '@/app/utils/framer'

interface RegardsSectionProps {
  dict: Dictionary
}

const RegardsSection = ({ dict }: RegardsSectionProps) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  return (
    <Frame className='flex h-auto min-h-120 flex-col gap-8 overflow-hidden rounded-b-none! px-6 pt-6 pb-16'>
      <motion.div
        className='flex flex-col items-center gap-8'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div variants={scaleVariants} className='w-full'>
          <Image
            src='https://i.pinimg.com/1200x/41/a4/67/41a467f9dc5e5ddcc8bc91425bb3e184.jpg'
            alt='regards-image'
            width={400}
            height={600}
            className='border-primary-800 h-105 w-full rounded-t-full border-2 border-solid object-cover'
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <Typography
            fontFamily='workSans'
            size={14}
            color='#212529'
            weight='normal'
            className='px-4 text-center leading-relaxed'
          >
            {dict.invitation_message}
            <br />
            {dict.closing_thanks}
          </Typography>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className='flex flex-col items-center gap-2'
        >
          <Typography
            fontFamily='workSans'
            size={16}
            color='#212529'
            weight='semibold'
            className='text-center italic'
          >
            {dict.regards}
          </Typography>
          <Typography
            fontFamily='english111viva'
            size={42}
            color='primary'
            className='text-center leading-tight'
          >
            Nuril & Daffa
          </Typography>
        </motion.div>
      </motion.div>
    </Frame>
  )
}

export default RegardsSection
