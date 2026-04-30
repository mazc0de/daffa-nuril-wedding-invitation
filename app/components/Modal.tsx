import React, { ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Frame from './Frame'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            key='backdrop'
            className='fixed inset-0 z-100! bg-black/50 backdrop-blur-sm'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />

          {/* Modal Container */}
          <motion.div
            key='modal-content'
            className='pointer-events-none fixed inset-0 z-101! flex items-center justify-center p-6'
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <Frame className='pointer-events-auto h-fit w-full max-w-sm rounded-4xl! p-4'>
              {children}
            </Frame>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default Modal
