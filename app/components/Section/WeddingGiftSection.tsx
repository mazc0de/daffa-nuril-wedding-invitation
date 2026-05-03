import { useState } from 'react'
import { motion, Variants } from 'framer-motion'

import Frame from '../Frame'
import Modal from '../Modal'
import Button from '../Button'
import Typography from '../Typography'

import Toast, { ToastType } from '../Toast'

import GiftIcon from '../Icons/GiftIcon'
import ClipboardIcon from '../Icons/ClipboardIcon'
import CreditCardIcon from '../Icons/CreditCardIcon'

import {
  ALAMAT_RUMAH,
  NO_REK_BCA,
  NO_REK_BCA_LABEL,
  NO_REK_MANDIRI,
  NO_REK_MANDIRI_LABEL
} from '@/app/constants/app'
import { Dictionary } from '@/lib/dictionary'

interface WeddingGiftSectionProps {
  dict: Dictionary
}

const WeddingGiftSection = ({ dict }: WeddingGiftSectionProps) => {
  const [isCashlessModalOpen, setIsCashlessModalOpen] = useState<boolean>(false)
  const [isGiftModalOpen, setIsGiftModalOpen] = useState<boolean>(false)

  const [toastVisible, setToastVisible] = useState<boolean>(false)
  const [toastConfig, setToastConfig] = useState<{
    message: string
    type: ToastType
  }>({
    message: '',
    type: 'info'
  })

  const handleCashlessModal = () => setIsCashlessModalOpen(!isCashlessModalOpen)
  const handleGiftModal = () => setIsGiftModalOpen(!isGiftModalOpen)

  const showToast = (message: string, type: ToastType = 'info') => {
    setToastConfig({ message, type })
    setToastVisible(true)
  }

  const handleCopy = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text)
      showToast(`${label} berhasil disalin!`, 'success')
    } catch (err) {
      showToast('Gagal menyalin teks.', 'error')
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

  return (
    <>
      <Frame className='flex h-auto min-h-120 flex-col items-center justify-center gap-4 overflow-hidden rounded-b-none! px-4 py-16'>
        <motion.div
          className='flex w-full flex-col items-center justify-center gap-4'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <Typography
              fontFamily='english111viva'
              size={36}
              color='primary'
              className='leading-tight'
            >
              Wedding Gift
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Typography
              fontFamily='workSans'
              size={14}
              color='#212529'
              weight='normal'
              className='mb-2 px-8 text-center'
            >
              {dict.thank_you_message}
            </Typography>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className='flex items-center justify-between gap-6'
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                className='group flex w-fit items-center gap-3 rounded-full! border-neutral-200! bg-white py-1! pr-4! pl-1! transition-colors hover:bg-neutral-50!'
                onClick={handleCashlessModal}
              >
                <div className='bg-primary-800 flex aspect-square h-6 w-6 shrink-0 items-center justify-center rounded-full shadow-sm'>
                  <CreditCardIcon size={12} />
                </div>
                <Typography
                  fontFamily='workSans'
                  color='#1a1a1a'
                  className='text-center font-medium tracking-wide'
                  size={12}
                >
                  {dict.cashless}
                </Typography>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                className='group flex w-fit items-center gap-3 rounded-full! border-neutral-200! bg-white py-1! pr-4! pl-1! transition-colors hover:bg-neutral-50!'
                onClick={handleGiftModal}
              >
                <div className='bg-primary-800 flex aspect-square h-6 w-6 shrink-0 items-center justify-center rounded-full shadow-sm'>
                  <GiftIcon size={12} />
                </div>
                <Typography
                  fontFamily='workSans'
                  color='#1a1a1a'
                  className='text-center font-medium tracking-wide'
                  size={12}
                >
                  {dict.send_gift}
                </Typography>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </Frame>

      <Modal
        isOpen={isCashlessModalOpen}
        onClose={() => setIsCashlessModalOpen(false)}
      >
        <div className='flex flex-col gap-4'>
          <div className='flex flex-col gap-2'>
            <div className='flex items-center justify-center gap-2'>
              <Typography
                fontFamily='workSans'
                size={14}
                color='#212529'
                weight='semibold'
              >
                {NO_REK_BCA}
              </Typography>
              <Button
                className='group flex w-fit items-center gap-3 rounded-full! border-neutral-200! bg-white p-1! transition-colors hover:bg-neutral-50!'
                onClick={() => handleCopy(NO_REK_BCA, 'No. Rekening BCA')}
              >
                <ClipboardIcon size={18} color='#9b0f06' />
              </Button>
            </div>
            <Typography
              fontFamily='workSans'
              size={14}
              color='#212529'
              weight='normal'
              className='px-8 text-center'
            >
              {NO_REK_BCA_LABEL}
            </Typography>
          </div>
          <div className='flex flex-col gap-2'>
            <div className='flex items-center justify-center gap-2'>
              <Typography
                fontFamily='workSans'
                size={14}
                color='#212529'
                weight='semibold'
              >
                {NO_REK_MANDIRI}
              </Typography>
              <Button
                className='group flex w-fit items-center gap-3 rounded-full! border-neutral-200! bg-white p-1! transition-colors hover:bg-neutral-50!'
                onClick={() =>
                  handleCopy(NO_REK_MANDIRI, 'No. Rekening Mandiri')
                }
              >
                <ClipboardIcon size={18} color='#9b0f06' />
              </Button>
            </div>
            <Typography
              fontFamily='workSans'
              size={14}
              color='#212529'
              weight='normal'
              className='px-8 text-center'
            >
              {NO_REK_MANDIRI_LABEL}
            </Typography>
          </div>
        </div>
      </Modal>

      <Modal isOpen={isGiftModalOpen} onClose={() => setIsGiftModalOpen(false)}>
        <Typography
          fontFamily='workSans'
          size={16}
          color='#9b0f06'
          weight='semibold'
          className='mb-4 text-center'
        >
          Alamat
        </Typography>

        <div className='flex items-start justify-center gap-2 px-4'>
          <Typography
            fontFamily='workSans'
            size={14}
            color='#212529'
            weight='normal'
            className='text-center'
          >
            {ALAMAT_RUMAH}
          </Typography>
          <Button
            className='group mt-0.5 flex w-fit shrink-0 items-center gap-3 rounded-full! border-neutral-200! bg-white p-1! transition-colors hover:bg-neutral-50!'
            onClick={() => handleCopy(ALAMAT_RUMAH, 'Alamat')}
          >
            <ClipboardIcon size={18} color='#9b0f06' />
          </Button>
        </div>
      </Modal>

      <Toast
        isVisible={toastVisible}
        onClose={() => setToastVisible(false)}
        message={toastConfig.message}
        type={toastConfig.type}
        duration={3000}
      />
    </>
  )
}

export default WeddingGiftSection
