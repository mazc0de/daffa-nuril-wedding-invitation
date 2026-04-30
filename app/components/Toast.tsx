import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export type ToastType = 'success' | 'error' | 'info'

interface ToastProps {
  message: string
  isVisible: boolean
  onClose: () => void
  type?: ToastType
  duration?: number
}

const Toast: React.FC<ToastProps> = ({
  message,
  isVisible,
  onClose,
  type = 'info',
  duration = 3000
}) => {
  useEffect(() => {
    if (isVisible && duration > 0) {
      const timer = setTimeout(() => {
        onClose()
      }, duration)

      return () => clearTimeout(timer)
    }
  }, [isVisible, duration, onClose])

  const typeStyles = {
    success: 'bg-green-100 text-green-800 border-green-200',
    error: 'bg-red-100 text-red-800 border-red-200',
    info: 'bg-white text-gray-800 border-gray-100 shadow-xl'
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: '-50%' }}
          animate={{ opacity: 1, y: 0, x: '-50%' }}
          exit={{ opacity: 0, y: 20, x: '-50%', scale: 0.9 }}
          transition={{ type: 'spring', bounce: 0.3, duration: 0.5 }}
          className={`fixed bottom-8 left-1/2 z-[1000] flex min-w-[300px] items-center justify-between rounded-xl border px-4 py-3 shadow-lg ${typeStyles[type]}`}
        >
          <span className='text-sm font-medium'>{message}</span>

          <button
            onClick={onClose}
            className='ml-4 rounded-full p-1 opacity-70 transition-opacity hover:opacity-100'
            aria-label='Close Toast'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-4 w-4'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2.5}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Toast
