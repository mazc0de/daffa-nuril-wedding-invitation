import React from 'react'
import Typography from './Typography'
import Button from './Button'

const SplashScreen = () => {
  return (
    <div className='relative z-10 h-full w-full p-6'>
      <div className='flex h-full w-full flex-col items-center justify-center gap-5 rounded-full border-2 border-solid border-[#96483e] bg-[rgba(255,241,219,0.69)] p-8 text-center'>
        <Typography fontFamily='workSans' size={14} color='#212529'>
          The Wedding Of
        </Typography>
        <div>
          <Typography
            fontFamily='brigesta'
            size={60}
            color='#96483e'
            className='leading-tight'
          >
            Nuril
          </Typography>
          <Typography
            fontFamily='english111viva'
            size={36}
            color='#96483e'
            className='mb-4 leading-tight'
          >
            &
          </Typography>
          <Typography
            fontFamily='brigesta'
            size={60}
            color='#96483e'
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
          color='#96483e'
          weight='semibold'
        >
          Nama Tamu
        </Typography>
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
    </div>
  )
}

export default SplashScreen
