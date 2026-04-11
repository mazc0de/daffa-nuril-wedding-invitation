import Image from 'next/image'
import Frame from './Frame'
import Typography from './Typography'
import Button from './Button'
import Link from 'next/link'

const HeroSection = () => {
  const GOOGLE_MAP_LOCATION =
    'https://www.google.com/maps/place/Wisma+Taman+Mandiri,+Blk.+C+No.20,+RT.07%2FRW.3,+Klarasan,+Taman,+Kec.+Taman,+Kabupaten+Pemalang,+Jawa+Tengah+52361/@-6.9005078,109.40723,19z/data=!4m6!3m5!1s0x2e6fdb1e9cd7c6b5:0x3269518c14370b6e!8m2!3d-6.9005091!4d109.4078737!16s%2Fg%2F11ssd93hcx?entry=ttu&g_ep=EgoyMDI2MDQwOC4wIKXMDSoASAFQAw%3D%3D'
  const event = {
    title: 'The Wedding of Daffa & Nuril',
    details: 'Kami mengundang Saudara/i untuk merayakan kebahagiaan kami.',
    location: GOOGLE_MAP_LOCATION,
    startTime: '20260531T050000Z',
    endTime: '20260531T090000Z'
  }

  const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${event.startTime}/${event.endTime}&details=${encodeURIComponent(event.details)}&location=${encodeURIComponent(event.location)}`
  return (
    <Frame className='flex h-full flex-col gap-6 p-4'>
      <Image
        src='https://dummyimage.com/400x600'
        alt='hero-image'
        width={400}
        height={600}
        className='border-primary-800 h-105 w-full rounded-t-full border-2 border-solid object-cover'
      />
      <div className='flex flex-col items-center justify-center gap-4'>
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
        href={googleCalendarUrl}
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
