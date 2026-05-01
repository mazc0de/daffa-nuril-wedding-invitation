import { useState, useEffect } from 'react'
import {
  collection,
  addDoc,
  serverTimestamp,
  query,
  orderBy,
  onSnapshot
} from 'firebase/firestore'
import { motion, AnimatePresence } from 'framer-motion'

import { db } from '@/app/config/firebase'

import Frame from '../Frame'
import Button from '../Button'
import Typography from '../Typography'

interface WishData {
  name: string
  wishes: string
  createdAt: any
}

interface FetchedWish extends WishData {
  id: string
}

const WishesSection = () => {
  const [name, setName] = useState<string>('')
  const [wishes, setWishes] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [wishList, setWishList] = useState<FetchedWish[]>([])

  useEffect(() => {
    const q = query(collection(db, 'wishes'), orderBy('createdAt', 'desc'))

    const unsubscribe = onSnapshot(q, querySnapshot => {
      const wishesArray: FetchedWish[] = []
      querySnapshot.forEach(doc => {
        wishesArray.push({
          id: doc.id,
          name: doc.data().name,
          wishes: doc.data().wishes,
          createdAt: doc.data().createdAt
        })
      })
      setWishList(wishesArray)
    })

    return () => unsubscribe()
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!name.trim() || !wishes.trim()) return

    setIsLoading(true)

    try {
      const wishData: WishData = {
        name: name.trim(),
        wishes: wishes.trim(),
        createdAt: serverTimestamp()
      }

      await addDoc(collection(db, 'wishes'), wishData)

      setName('')
      setWishes('')
    } catch (error) {
      console.error(error)
      alert('Maaf, terjadi kesalahan saat mengirim ucapan.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Frame className='flex max-h-full w-full flex-col items-center gap-4 overflow-hidden rounded-4xl! p-4'>
      <div className='flex shrink-0 flex-col items-center gap-2'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <Typography
            fontFamily='english111viva'
            size={36}
            color='primary'
            className='leading-tight'
          >
            Wishes
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        >
          <Typography
            fontFamily='workSans'
            size={14}
            color='#212529'
            weight='normal'
            className='px-8 text-center'
          >
            Berikan ucapan harapan dan do’a kepada kedua mempelai
          </Typography>
        </motion.div>
      </div>

      <motion.form
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
        onSubmit={handleSubmit}
        className='flex w-full shrink-0 flex-col gap-4 md:px-6'
      >
        <div className='flex flex-col gap-1'>
          <Typography
            fontFamily='workSans'
            size={14}
            color='#212529'
            weight='semibold'
          >
            Nama
          </Typography>
          <input
            type='text'
            placeholder='Masukkan nama Anda'
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
            className='border-primary-300 text-primary-800 focus:border-primary-500 focus:ring-primary-500 w-full rounded-xl border bg-white p-3 text-sm transition-all outline-none focus:ring-1'
            required
            disabled={isLoading}
          />
        </div>

        <div className='flex flex-col gap-1'>
          <Typography
            fontFamily='workSans'
            size={14}
            color='#212529'
            weight='semibold'
          >
            Ucapan
          </Typography>
          <textarea
            rows={2}
            placeholder='Tulis ucapan dan doa...'
            value={wishes}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setWishes(e.target.value)
            }
            className='border-primary-300 text-primary-800 focus:border-primary-500 focus:ring-primary-500 w-full resize-none rounded-xl border bg-white p-3 text-sm transition-all outline-none focus:ring-1'
            required
            disabled={isLoading}
          />
        </div>

        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button
            type='submit'
            disabled={isLoading}
            className={`w-full rounded-xl py-3 text-sm font-semibold text-white transition-colors ${
              isLoading
                ? 'cursor-not-allowed bg-gray-400'
                : 'bg-gray-800 hover:bg-gray-900'
            }`}
          >
            {isLoading ? 'Mengirim...' : 'Kirim Ucapan'}
          </Button>
        </motion.div>
      </motion.form>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
        className='border-primary-800 flex min-h-0 w-full flex-1 flex-col gap-3 border-t pt-4 md:px-6'
      >
        <div className='custom-scrollbar flex w-full flex-col gap-3 overflow-y-auto pb-2'>
          {wishList.length === 0 ? (
            <Typography
              fontFamily='workSans'
              size={14}
              color='#6c757d'
              className='text-center italic'
            >
              Belum ada ucapan. Jadilah yang pertama!
            </Typography>
          ) : (
            <AnimatePresence mode='popLayout'>
              {wishList.map(wish => (
                <motion.div
                  layout
                  key={wish.id}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{
                    type: 'spring',
                    stiffness: 400,
                    damping: 25
                  }}
                  className='border-primary-300 flex flex-col gap-1 rounded-xl border bg-gray-50 p-4 shadow-sm'
                >
                  <Typography
                    fontFamily='workSans'
                    size={14}
                    color='#212529'
                    weight='bold'
                    className='capitalize'
                  >
                    {wish.name}
                  </Typography>
                  <Typography
                    fontFamily='workSans'
                    size={14}
                    color='#495057'
                    className='leading-relaxed whitespace-pre-wrap first-letter:uppercase'
                  >
                    {wish.wishes}
                  </Typography>
                </motion.div>
              ))}
            </AnimatePresence>
          )}
        </div>
      </motion.div>
    </Frame>
  )
}

export default WishesSection
