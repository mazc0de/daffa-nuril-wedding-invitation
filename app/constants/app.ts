export const GOOGLE_MAP_LOCATION =
  'https://www.google.com/maps/place/Wisma+Taman+Mandiri,+Blk.+C+No.20,+RT.07%2FRW.3,+Klarasan,+Taman,+Kec.+Taman,+Kabupaten+Pemalang,+Jawa+Tengah+52361/@-6.9005078,109.40723,19z/data=!4m6!3m5!1s0x2e6fdb1e9cd7c6b5:0x3269518c14370b6e!8m2!3d-6.9005091!4d109.4078737!16s%2Fg%2F11ssd93hcx?entry=ttu&g_ep=EgoyMDI2MDQwOC4wIKXMDSoASAFQAw%3D%3D'

export const EVENTS = {
  title: 'The Wedding of Daffa & Nuril',
  details: 'Kami mengundang Saudara/i untuk merayakan kebahagiaan kami.',
  location: GOOGLE_MAP_LOCATION,
  startTime: '20260531T050000Z',
  endTime: '20260531T090000Z'
}

export const GOOGLE_CALENDAR_URL = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(EVENTS.title)}&dates=${EVENTS.startTime}/${EVENTS.endTime}&details=${encodeURIComponent(EVENTS.details)}&location=${encodeURIComponent(EVENTS.location)}`
