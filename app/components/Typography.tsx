import React, { ElementType } from 'react'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'caption'
type FontFamily = 'brigesta' | 'workSans' | 'english111viva'
type FontWeight = 'light' | 'normal' | 'medium' | 'semibold' | 'bold'
type ThemeColor = 'primary' | 'secondary' | 'muted' | 'accent'
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
    english111viva: 'font-english111viva'
  }

  const weightStyles = {
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold'
  }

  const colorStyles: Record<ThemeColor, string> = {
    primary: 'text-gray-900 dark:text-gray-100',
    secondary: 'text-gray-700 dark:text-gray-300',
    muted: 'text-gray-500 dark:text-gray-400',
    accent: 'text-blue-600 dark:text-blue-400'
  }

  return (
    <Component
      className={cn(
        !size && variantStyles[variant],
        fontStyles[fontFamily],
        weightStyles[weight],
        isThemeColor && colorStyles[color as ThemeColor],
        className
      )}
      style={{
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
