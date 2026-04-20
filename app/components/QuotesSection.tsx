import Typography from './Typography'

const QuotesSection = () => {
  return (
    <div className='bg-primary-600/80 flex h-[80vh] w-full flex-col items-center justify-center gap-4 p-10'>
      <Typography
        fontFamily='workSans'
        color='#fff'
        className='text-center leading-6 tracking-wide'
        size={14}
      >
        Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
        pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan
        merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan
        sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda
        (kebesaran Allah) bagi kaum yang berpikir.
      </Typography>
      <Typography
        fontFamily='brigesta'
        size={14}
        color='#fff'
        weight='semibold'
        className='tracking-wider'
      >
        Surah Ar-Rum : 21
      </Typography>
    </div>
  )
}

export default QuotesSection
