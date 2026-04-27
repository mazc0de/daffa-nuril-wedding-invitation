import Image from 'next/image'
import Frame from './Frame'
import Button from './Button'
import Typography from './Typography'
import { InstagramIcon } from './InstagramIcon'

const ProfileSection = () => {
  return (
    <Frame className='flex h-fit flex-col gap-2 p-4'>
      <Image
        src='https://i.pinimg.com/736x/99/59/bd/9959bda81a2143d6fb026133d6a7f181.jpg'
        alt='the-brides-photo'
        width={800}
        height={1200}
        className='border-primary-800 h-72 w-full rounded-t-full border-2 border-solid object-cover min-[480px]:h-80 md:h-96'
      />
      <div className='flex flex-col items-center justify-center'>
        <div className='mt-2 flex flex-col items-center gap-3'>
          <Typography
            fontFamily='photographSignature'
            size={60}
            className='text-center leading-16'
          >
            Nuril
          </Typography>
          <Typography
            fontFamily='brigesta'
            size={30}
            color='primary'
            className='text-center leading-tight tracking-wide'
          >
            Nuril Syafa Aini S.Sos
          </Typography>
          <Button className='group flex w-fit items-center gap-3 rounded-full! border-neutral-200! bg-white py-1! pr-4! pl-1! transition-all hover:bg-neutral-50'>
            <div className='flex aspect-square h-6 w-6 shrink-0 items-center justify-center rounded-full bg-linear-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] shadow-sm'>
              <InstagramIcon size={18} fill='#fff' />
            </div>
            <Typography
              fontFamily='workSans'
              color='#1a1a1a'
              className='text-center font-medium tracking-wide'
              size={12}
            >
              Instagram
            </Typography>
          </Button>
        </div>
        <Typography
          fontFamily='english111viva'
          size={60}
          className='mb-5 text-center leading-normal'
        >
          &
        </Typography>
        <div className='mb-2 flex flex-col items-center gap-3'>
          <Typography
            fontFamily='photographSignature'
            size={60}
            className='text-center leading-16'
          >
            Daffa
          </Typography>
          <Typography
            fontFamily='brigesta'
            size={30}
            color='primary'
            className='text-center leading-tight tracking-wide'
          >
            Daffa Hanifisyafiq S.Kom
          </Typography>
          <Button className='group flex w-fit items-center gap-3 rounded-full! border-neutral-200! bg-white py-1! pr-4! pl-1! transition-all hover:bg-neutral-50'>
            <div className='flex aspect-square h-6 w-6 shrink-0 items-center justify-center rounded-full bg-linear-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] shadow-sm'>
              <InstagramIcon size={18} fill='#fff' />
            </div>
            <Typography
              fontFamily='workSans'
              color='#1a1a1a'
              className='text-center font-medium tracking-wide'
              size={12}
            >
              Instagram
            </Typography>
          </Button>
        </div>
      </div>
      <Image
        src='https://i.pinimg.com/1200x/46/b3/ca/46b3caaaccc6bd632f236f59d6483b91.jpg'
        alt='the-grooms-photo'
        width={800}
        height={1200}
        className='border-primary-800 h-72 w-full rounded-b-full border-2 border-solid object-cover min-[480px]:h-80 md:h-96'
      />
    </Frame>
  )
}

export default ProfileSection
