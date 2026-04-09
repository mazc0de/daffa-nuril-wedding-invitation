import React, { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'danger' | 'outline' | 'ghost' | 'custom'
  size?: 'sm' | 'md' | 'lg'
  color?: string // Bisa diisi 'red', '#ff5722', atau 'rgb(0,0,0)'
  borderRadius?: string
  padding?: string // Custom padding jika ingin override (contoh: '12px 24px')
  className?: string
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  color,
  borderRadius = 'rounded-md',
  padding,
  className = '',
  style,
  ...props
}) => {
  const sizeClasses: Record<string, string> = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-8 py-4 text-lg'
  }

  const variantClasses: Record<string, string> = {
    primary:
      'bg-[#96483e] text-white hover:bg-[#783a34] active:bg-[#612e2a] cursor-pointer',
    secondary: 'bg-slate-600 text-white hover:bg-slate-700',
    danger: 'bg-red-600 text-white hover:bg-red-700',
    outline: 'border-2 border-current bg-transparent', // current mengikuti warna teks
    ghost: 'bg-transparent hover:bg-gray-100',
    custom: '' // Kosong karena akan dihandle oleh inline style
  }

  // Logika untuk menentukan style inline
  const customStyle: React.CSSProperties = {
    ...style,
    backgroundColor:
      variant !== 'outline' && variant !== 'ghost' ? color : undefined,
    color: variant === 'outline' || variant === 'ghost' ? color : undefined,
    borderColor: variant === 'outline' ? color : undefined,
    borderRadius: !borderRadius.includes('rounded') ? borderRadius : undefined, // jika inputnya px
    padding: padding
  }

  return (
    <button
      className={`inline-flex items-center justify-center font-semibold transition-all active:scale-95 ${sizeClasses[size]} ${variantClasses[color ? 'custom' : variant]} ${borderRadius.includes('rounded') ? borderRadius : ''} ${className} `}
      style={customStyle}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
