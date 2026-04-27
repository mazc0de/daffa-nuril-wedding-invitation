import Link from 'next/link'
import Image from 'next/image'

import Frame from './Frame'
import Typography from './Typography'
import Button from './Button'

import { GOOGLE_CALENDAR_URL } from '../constants/app'

const HeroSection = () => {
  return (
    <Frame className='flex h-full flex-col gap-6 p-6'>
      <Image
        src='https://i.pinimg.com/736x/88/14/36/881436bd90ab1109fad3c9437df3721d.jpg'
        alt='hero-image'
        width={400}
        height={600}
        className='border-primary-800 h-105 w-full rounded-t-full border-2 border-solid object-cover'
      />
      <div className='flex flex-col items-center justify-center gap-2'>
        <Typography fontFamily='workSans' size={14} color='#212529'>
          THE WEDDING OF
        </Typography>
        <Typography
          fontFamily='brigesta'
          size={40}
          color='primary'
          className='leading-tight'
        >
          Nuril & Daffa
        </Typography>
        <Typography
          fontFamily='brigesta'
          size={14}
          color='#212529'
          weight='semibold'
          className='tracking-wider'
        >
          31 Mei 2026
        </Typography>
      </div>
      <Link
        href={GOOGLE_CALENDAR_URL}
        target='_blank'
        rel='noopener noreferrer'
        className='self-center'
      >
        <Button variant='primary' borderRadius='rounded-full' className='w-fit'>
          <Typography
            fontFamily='workSans'
            size={14}
            color='#fff'
            weight='medium'
          >
            Save the Date
          </Typography>
        </Button>
      </Link>
    </Frame>
  )
}

export default HeroSection
