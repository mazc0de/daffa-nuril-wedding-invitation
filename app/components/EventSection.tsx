import Button from './Button'
import Frame from './Frame'
import WeddingRingIcon from './Icons/WeddingRingIcon'
import MapPinIcon from './Icons/MapPinIcon'
import Typography from './Typography'
import CheersIcon from './Icons/CheersIcon'
import Link from 'next/link'
import { GOOGLE_MAP_HOUSE_LOCATION } from '../constants/app'

const EventSection = () => {
  return (
    <Frame className='flex flex-col items-center justify-center gap-8 rounded-4xl! p-4'>
      <div className='flex flex-col items-center justify-center gap-1'>
        <WeddingRingIcon size={48} />
        <Typography
          fontFamily='english111viva'
          size={36}
          color='primary'
          className='leading-tight'
        >
          Akad Nikah
        </Typography>
        <Typography
          fontFamily='brigesta'
          size={16}
          color='primary'
          className='leading-tight'
        >
          Minggu, 31 Mei 2026
        </Typography>
        <Typography
          fontFamily='workSans'
          size={14}
          color='#212529'
          weight='semibold'
        >
          Pukul 07.30
        </Typography>
        <Typography
          fontFamily='workSans'
          size={14}
          color='#212529'
          weight='normal'
          className='text-center'
        >
          Perumahan Wisma Taman Mandiri, <br />
          Blok C No.20
        </Typography>
        <Link
          href={GOOGLE_MAP_HOUSE_LOCATION}
          target='_blank'
          rel='noopener noreferrer'
          className='self-center'
        >
          <Button className='group flex w-fit items-center gap-3 rounded-full! border-neutral-200! bg-white py-1! pr-4! pl-1! transition-all hover:bg-neutral-50!'>
            <div className='bg-primary-800 flex aspect-square h-6 w-6 shrink-0 items-center justify-center rounded-full shadow-sm'>
              <MapPinIcon size={12} fill='#fff' />
            </div>
            <Typography
              fontFamily='workSans'
              color='#1a1a1a'
              className='text-center font-medium tracking-wide'
              size={12}
            >
              Google Maps
            </Typography>
          </Button>
        </Link>
      </div>
      <div className='flex flex-col items-center justify-center gap-1'>
        <CheersIcon size={48} />
        <Typography
          fontFamily='english111viva'
          size={36}
          color='primary'
          className='leading-tight'
        >
          Resepsi
        </Typography>
        <Typography
          fontFamily='brigesta'
          size={16}
          color='primary'
          className='leading-tight'
        >
          Minggu, 31 Mei 2026
        </Typography>
        <Typography
          fontFamily='workSans'
          size={14}
          color='#212529'
          weight='semibold'
        >
          Pukul 12.00
        </Typography>
        <Typography
          fontFamily='workSans'
          size={14}
          color='#212529'
          weight='normal'
          className='text-center'
        >
          Perumahan Wisma Taman Mandiri, <br />
          Blok C No.20
        </Typography>
        <Link
          href={GOOGLE_MAP_HOUSE_LOCATION}
          target='_blank'
          rel='noopener noreferrer'
          className='self-center'
        >
          <Button className='group flex w-fit items-center gap-3 rounded-full! border-neutral-200! bg-white py-1! pr-4! pl-1! transition-all hover:bg-neutral-50!'>
            <div className='bg-primary-800 flex aspect-square h-6 w-6 shrink-0 items-center justify-center rounded-full shadow-sm'>
              <MapPinIcon size={12} fill='#fff' />
            </div>
            <Typography
              fontFamily='workSans'
              color='#1a1a1a'
              className='text-center font-medium tracking-wide'
              size={12}
            >
              Google Maps
            </Typography>
          </Button>
        </Link>
      </div>
    </Frame>
  )
}

export default EventSection
