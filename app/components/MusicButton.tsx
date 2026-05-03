'use client'

import { motion, AnimatePresence } from 'framer-motion'
import DiscIcon from './Icons/DiscIcon'
import PauseIcon from './Icons/PauseIcon'

interface MusicButtonProps {
  isOpened: boolean
  isPlaying: boolean
  toggleAudio: () => void
}

export default function MusicButton({
  isOpened,
  isPlaying,
  toggleAudio
}: MusicButtonProps) {
  if (!isOpened) return null

  return (
    <motion.button
      onClick={toggleAudio}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.3, delay: 0.2 }}
      className='absolute right-6 bottom-6 z-50 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border-2 border-white bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] focus:outline-none'
      aria-label='Toggle Audio'
    >
      <AnimatePresence mode='wait'>
        <motion.div
          key={isPlaying ? 'playing' : 'paused'}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          className='flex items-center justify-center'
        >
          {isPlaying ? (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            >
              <DiscIcon size={24} color='#9B0F06' />
            </motion.div>
          ) : (
            <PauseIcon size={24} color='#9B0F06' />
          )}
        </motion.div>
      </AnimatePresence>
    </motion.button>
  )
}
