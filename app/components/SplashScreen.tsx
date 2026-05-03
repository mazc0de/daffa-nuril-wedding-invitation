import { useSearchParams } from 'next/navigation'

import Frame from './Frame'
import Button from './Button'
import Typography from './Typography'
import { Dictionary } from '@/lib/dictionary'

interface SplashScreenProps {
  onOpen: () => void
  dict: Dictionary
}

const SplashScreen = ({ onOpen, dict }: SplashScreenProps) => {
  const searchParams = useSearchParams()
  const guestName = searchParams.get('to') || 'Nama Tamu'

  return (
    <div className='relative z-10 flex h-full w-full items-center justify-center p-6'>
      <Frame className='flex h-full w-full flex-col items-center justify-center gap-5 p-8 text-center'>
        <Typography fontFamily='workSans' size={14} color='#212529'>
          {dict.wedding_of}
        </Typography>
        <div>
          <Typography
            fontFamily='brigesta'
            size={60}
            color='primary'
            className='leading-tight'
          >
            Nuril
          </Typography>
          <Typography
            fontFamily='english111viva'
            size={36}
            color='primary'
            className='mb-4 leading-tight'
          >
            &
          </Typography>
          <Typography
            fontFamily='brigesta'
            size={60}
            color='primary'
            className='leading-tight'
          >
            Daffa
          </Typography>
        </div>
        <Typography
          fontFamily='workSans'
          size={14}
          color='#212529'
          weight='medium'
        >
          {dict.to} <br />
          {dict.recipient}
        </Typography>
        <Typography
          fontFamily='workSans'
          size={16}
          color='primary'
          weight='semibold'
          className='capitalize'
        >
          {guestName.replace(/-/g, ' ')}
        </Typography>

        <div onClick={onOpen} className='mt-4 cursor-pointer'>
          <Button variant='primary' borderRadius='rounded-full'>
            <Typography
              fontFamily='workSans'
              size={14}
              color='#fff'
              weight='medium'
            >
              {dict.open_invitation}
            </Typography>
          </Button>
        </div>
      </Frame>
    </div>
  )
}

export default SplashScreen
