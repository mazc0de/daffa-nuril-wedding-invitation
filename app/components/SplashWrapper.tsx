import { Dictionary } from '@/lib/dictionary'
import SplashScreen from './SplashScreen'

interface SplashWrapperProps {
  onOpen: () => void
  dict: Dictionary
}

const SplashWrapper = ({ onOpen, dict }: SplashWrapperProps) => {
  return <SplashScreen onOpen={onOpen} dict={dict} />
}

export default SplashWrapper
