import Frame from './Frame'
import Button from './Button'
import Typography from './Typography'

interface SplashScreenProps {
  onOpen: () => void
}

const SplashScreen = ({ onOpen }: SplashScreenProps) => {
  return (
    <div className='relative z-10 flex h-full w-full items-center justify-center p-6'>
      <Frame className='flex h-full w-full flex-col items-center justify-center gap-5 p-8 text-center'>
        <Typography fontFamily='workSans' size={14} color='#212529'>
          The Wedding Of
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
          Kepada Yth; <br />
          Bapak/Ibu/Saudara/i
        </Typography>
        <Typography
          fontFamily='workSans'
          size={16}
          color='primary'
          weight='semibold'
        >
          Nama Tamu
        </Typography>

        <div onClick={onOpen} className='mt-4 cursor-pointer'>
          <Button variant='primary' borderRadius='rounded-full'>
            <Typography
              fontFamily='workSans'
              size={14}
              color='#fff'
              weight='medium'
            >
              Open Invitation
            </Typography>
          </Button>
        </div>
      </Frame>
    </div>
  )
}

export default SplashScreen
