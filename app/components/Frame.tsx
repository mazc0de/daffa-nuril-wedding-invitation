import { ReactNode } from 'react'
import { cn } from '../utils/cn'

interface FrameProps {
  children: ReactNode
  className?: string
}

const Frame = ({ children, className }: FrameProps) => {
  return (
    <div
      className={cn(
        'border-primary-800 h-full w-full rounded-full border-2 border-solid bg-[rgba(255,241,219,0.69)]',
        className
      )}
    >
      {children}
    </div>
  )
}

export default Frame
