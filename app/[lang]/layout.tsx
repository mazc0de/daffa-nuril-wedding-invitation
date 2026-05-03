import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Work_Sans } from 'next/font/google'

import '../globals.css'

const brigestaFont = localFont({
  src: '../../public/fonts/brigesta.ttf',
  variable: '--font-local-brigesta',
  display: 'swap'
})

const english111viva = localFont({
  src: '../../public/fonts/english111viva.ttf',
  variable: '--font-local-english111viva',
  display: 'swap'
})

const workSansFont = Work_Sans({
  subsets: ['latin'],
  variable: '--font-work-sans',
  display: 'swap'
})

const photographSignature = localFont({
  src: '../../public/fonts/photograph_signature.ttf',
  variable: '--font-local-photograph_signature',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'The Wedding of Nuril & Daffa',
  description: 'Minggu, 31 Mei 2026'
}

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'id' }]
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params

  return (
    <html
      lang={lang}
      className={`${brigestaFont.variable} ${workSansFont.variable} ${english111viva.variable} ${photographSignature.variable} h-full antialiased`}
    >
      <body className='mx-auto flex h-screen max-w-120 flex-col'>
        {children}
      </body>
    </html>
  )
}
