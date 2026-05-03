'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

interface LanguageSwitcherProps {
  isOpened: boolean
}

export default function LanguageSwitcher({ isOpened }: LanguageSwitcherProps) {
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()

  const currentLocale = pathname.split('/')[1]
  const targetLocale = currentLocale === 'id' ? 'en' : 'id'

  const handleSwitch = () => {
    const newPath = pathname.replace(`/${currentLocale}`, `/${targetLocale}`)
    const currentQuery = searchParams.toString()
    const finalUrl = currentQuery ? `${newPath}?${currentQuery}` : newPath
    router.push(finalUrl, { scroll: false })
  }

  return (
    <motion.button
      onClick={handleSwitch}
      initial={{ scale: 0, opacity: 0, y: 0 }}
      animate={{
        scale: 1,
        opacity: 1,
        y: isOpened ? -72 : 0
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20
      }}
      className='absolute right-6 bottom-6 z-200 block h-12 w-12 cursor-pointer overflow-hidden rounded-full border-2 border-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] focus:outline-none'
      aria-label='Switch Language'
    >
      <AnimatePresence mode='wait'>
        <motion.div
          key={targetLocale}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2 }}
          className='relative h-full w-full'
        >
          <Image
            src={
              targetLocale === 'id'
                ? '/images/flag-id.svg'
                : '/images/flag-en.svg'
            }
            alt={`Switch to ${targetLocale}`}
            fill
            sizes='48px'
            className='object-cover'
          />
        </motion.div>
      </AnimatePresence>
    </motion.button>
  )
}
