import React, { ElementType } from 'react'
import { cn } from '../utils/cn'

type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'caption'
type FontFamily =
  | 'brigesta'
  | 'workSans'
  | 'english111viva'
  | 'photographSignature'
type FontWeight = 'light' | 'normal' | 'medium' | 'semibold' | 'bold'
type ThemeColor = 'primary' | 'secondary' | 'muted' | 'accent'
// FontColor bisa menerima ThemeColor ATAU string hex/rgba biasa
type FontColor = ThemeColor | (string & {})

type TypographyProps<T extends ElementType> = {
  as?: T
  variant?: TypographyVariant
  fontFamily?: FontFamily
  weight?: FontWeight
  color?: FontColor
  size?: number | string
  className?: string
  children: React.ReactNode
} & Omit<React.ComponentPropsWithoutRef<T>, 'color'>

const Typography = <T extends ElementType = 'p'>({
  as,
  variant = 'p',
  fontFamily = 'brigesta',
  weight = 'normal',
  color = 'primary',
  size,
  className,
  style,
  children,
  ...props
}: TypographyProps<T>) => {
  const Component = as || (variant === 'caption' ? 'span' : variant)

  // Cek apakah prop color adalah salah satu dari ThemeColor
  const isThemeColor = ['primary', 'secondary', 'muted', 'accent'].includes(
    color as string
  )

  const variantStyles = {
    h1: 'text-4xl md:text-6xl leading-tight',
    h2: 'text-3xl md:text-5xl leading-tight',
    h3: 'text-2xl md:text-4xl leading-snug',
    h4: 'text-xl md:text-2xl leading-snug',
    p: 'text-base md:text-lg leading-none',
    span: 'text-base',
    caption: 'text-sm tracking-wide'
  }

  const fontStyles = {
    brigesta: 'font-brigesta',
    workSans: 'font-work-sans',
    english111viva: 'font-english111viva',
    photographSignature: 'font-photograph_signature'
  }

  const weightStyles = {
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold'
  }

  // UPDATE DI SINI: Gunakan class utility bawaan dari @theme Tailwind v4
  const colorStyles: Record<ThemeColor, string> = {
    primary: 'text-primary-800',
    secondary: 'text-secondary',
    muted: 'text-muted',
    accent: 'text-accent'
  }

  return (
    <Component
      className={cn(
        !size && variantStyles[variant],
        fontStyles[fontFamily],
        weightStyles[weight],
        // Jika color adalah ThemeColor, masukkan class text-primary dll
        isThemeColor && colorStyles[color as ThemeColor],
        className
      )}
      style={{
        // Jika color bukan ThemeColor (misal color="#FF0000"), gunakan inline style
        color: !isThemeColor ? color : undefined,
        fontSize: typeof size === 'number' ? `${size}px` : size,
        ...style
      }}
      {...props}
    >
      {children}
    </Component>
  )
}

export default Typography
