import Image from 'next/image'
import { motion, Variants } from 'framer-motion'

import Typography from '../Typography'

const QuotesSection = () => {
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
    <div className='bg-primary-600/80 flex h-[80vh] w-full flex-col items-center justify-center gap-6 overflow-hidden p-10'>
      <motion.div
        className='flex flex-col items-center justify-center gap-6'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.5 }}
        variants={containerVariants}
      >
        <motion.div variants={scaleVariants} className='mb-2'>
          <Image
            src='/images/DN-white-square.png'
            alt='monogram'
            width='100'
            height='100'
            className='object-contain'
          />
        </motion.div>

        <motion.div variants={itemVariants} className='max-w-2xl'>
          <Typography
            fontFamily='workSans'
            color='#fff'
            className='text-center leading-7 tracking-wide'
            size={14}
          >
            Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
            pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung
            dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa
            kasih dan sayang. Sungguh, pada yang demikian itu benar-benar
            terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.
          </Typography>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Typography
            fontFamily='brigesta'
            size={14}
            color='#fff'
            weight='semibold'
            className='tracking-wider'
          >
            Surah Ar-Rum : 21
          </Typography>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default QuotesSection
