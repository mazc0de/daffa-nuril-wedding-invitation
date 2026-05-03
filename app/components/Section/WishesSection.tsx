import { useState, useEffect } from 'react'
import {
  collection,
  addDoc,
  serverTimestamp,
  query,
  orderBy,
  onSnapshot,
  deleteDoc,
  doc
} from 'firebase/firestore'
import { useSearchParams } from 'next/navigation'
import { motion, Variants, AnimatePresence } from 'framer-motion'

import { db } from '@/app/config/firebase'

import Modal from '../Modal'
import Frame from '../Frame'
import Button from '../Button'
import Typography from '../Typography'
import TrashIcon from '../Icons/TrashIcon'
import Toast, { ToastType } from '../Toast'
import { Dictionary } from '@/lib/dictionary'

interface WishData {
  name: string
  wishes: string
  createdAt: any
}

interface FetchedWish extends WishData {
  id: string
}

interface WishesSectionProps {
  dict: Dictionary
}

const WishesSection = ({ dict }: WishesSectionProps) => {
  const searchParams = useSearchParams()
  const isDeleteActive = searchParams.get('delete') === 'true'

  const [name, setName] = useState<string>('')
  const [wishes, setWishes] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [wishList, setWishList] = useState<FetchedWish[]>([])

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedId, setSelectedId] = useState<string | null>(null)

  const [toast, setToast] = useState<{
    isVisible: boolean
    message: string
    type: ToastType
  }>({
    isVisible: false,
    message: '',
    type: 'success'
  })

  const showToast = (message: string, type: ToastType = 'success') => {
    setToast({ isVisible: true, message, type })
  }

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
      showToast('Ucapan Anda berhasil dikirim!', 'success')
    } catch (error) {
      console.error(error)
      showToast('Gagal mengirim ucapan.', 'error')
    } finally {
      setIsLoading(false)
    }
  }

  const handleDelete = async () => {
    if (!selectedId) return
    setIsLoading(true)
    try {
      await deleteDoc(doc(db, 'wishes', selectedId))
      setIsModalOpen(false)
      setSelectedId(null)

      showToast('Ucapan berhasil dihapus.', 'info')
    } catch (error) {
      console.error('Gagal menghapus:', error)
      showToast('Gagal menghapus ucapan.', 'error')
    } finally {
      setIsLoading(false)
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

  return (
    <>
      <Frame className='flex h-full w-full flex-col items-center gap-4 overflow-hidden rounded-4xl! p-4'>
        <motion.div
          className='flex min-h-0 w-full flex-1 flex-col items-center gap-4'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          <div className='flex shrink-0 flex-col items-center gap-2'>
            <motion.div variants={itemVariants}>
              <Typography
                fontFamily='english111viva'
                size={36}
                color='primary'
                className='leading-tight'
              >
                Wishes
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Typography
                fontFamily='workSans'
                size={14}
                color='#212529'
                weight='normal'
                className='px-8 text-center'
              >
                {dict.give_wishes}
              </Typography>
            </motion.div>
          </div>

          <motion.form
            variants={itemVariants}
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
                {dict.name_label}
              </Typography>
              <input
                type='text'
                placeholder={dict.name_placeholder}
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
                {dict.message_label}
              </Typography>
              <textarea
                rows={2}
                placeholder={dict.message_placeholder}
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
                {isLoading ? dict.sending : dict.submit_message}
              </Button>
            </motion.div>
          </motion.form>

          <motion.div
            variants={itemVariants}
            className='border-primary-800 flex min-h-0 w-full flex-1 flex-col gap-3 border-t pt-4 md:px-6'
          >
            <div className='custom-scrollbar flex h-full w-full flex-col gap-3 overflow-y-auto pr-1 pb-2'>
              {wishList.length === 0 ? (
                <Typography
                  fontFamily='workSans'
                  size={14}
                  color='#6c757d'
                  className='text-center italic'
                >
                  {dict.empty_message}
                </Typography>
              ) : (
                <AnimatePresence mode='popLayout'>
                  {wishList.map(wish => (
                    <motion.div
                      layout
                      key={wish.id}
                      className='border-primary-300 flex flex-col gap-1 rounded-xl border bg-gray-50 p-4 shadow-sm'
                    >
                      <div className='flex items-center justify-between gap-2'>
                        <Typography
                          fontFamily='workSans'
                          size={14}
                          color='#212529'
                          weight='bold'
                          className='capitalize'
                        >
                          {wish.name}
                        </Typography>

                        {isDeleteActive && (
                          <Button
                            onClick={() => {
                              setSelectedId(wish.id)
                              setIsModalOpen(true)
                            }}
                            className='flex cursor-pointer items-center justify-center rounded-full bg-red-50 p-2 text-red-600 transition-colors hover:bg-red-100'
                          >
                            <TrashIcon size={16} color='#9b0f06' />
                          </Button>
                        )}
                      </div>
                      <Typography
                        fontFamily='workSans'
                        size={14}
                        color='#495057'
                        className='leading-relaxed whitespace-pre-wrap'
                      >
                        {wish.wishes}
                      </Typography>
                    </motion.div>
                  ))}
                </AnimatePresence>
              )}
            </div>
          </motion.div>
        </motion.div>
      </Frame>
      <Modal
        isOpen={isModalOpen}
        onClose={() => !isLoading && setIsModalOpen(false)}
      >
        <div className='flex flex-col gap-6 p-2 text-center'>
          <div className='flex flex-col gap-2'>
            <Typography
              fontFamily='workSans'
              size={18}
              weight='bold'
              color='#212529'
            >
              Hapus Ucapan?
            </Typography>
            <Typography fontFamily='workSans' size={14} color='#6c757d'>
              Tindakan ini tidak dapat dibatalkan. Apakah Anda yakin ingin
              menghapus ucapan ini?
            </Typography>
          </div>

          <div className='flex flex-col gap-2'>
            <Button
              onClick={handleDelete}
              disabled={isLoading}
              className='w-full rounded-xl bg-red-600 py-3 text-white hover:bg-red-700 disabled:bg-gray-400'
            >
              <Typography
                fontFamily='workSans'
                size={14}
                weight='semibold'
                color='#fff'
              >
                {isLoading ? 'Menghapus...' : 'Ya, Hapus'}
              </Typography>
            </Button>

            <Button
              onClick={() => setIsModalOpen(false)}
              disabled={isLoading}
              variant='outline'
              className='w-full rounded-xl border-gray-200 py-3 hover:bg-gray-50'
            >
              <Typography
                fontFamily='workSans'
                size={14}
                weight='medium'
                color='#212529'
              >
                Batal
              </Typography>
            </Button>
          </div>
        </div>
      </Modal>
      <Toast
        isVisible={toast.isVisible}
        message={toast.message}
        type={toast.type}
        onClose={() => setToast(prev => ({ ...prev, isVisible: false }))}
      />
    </>
  )
}

export default WishesSection
