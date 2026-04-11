import SplashScreen from './SplashScreen'

interface SplashWrapperProps {
  onOpen: () => void
}

const SplashWrapper = ({ onOpen }: SplashWrapperProps) => {
  return <SplashScreen onOpen={onOpen} />
}

export default SplashWrapper
