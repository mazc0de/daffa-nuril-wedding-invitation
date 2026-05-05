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

const description =
  'You are warmly invited to the wedding of Nuril & Daffa — Sunday, May 31, 2026'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.nurillovesdaffa.my.id'),

  title: 'The Wedding of Nuril & Daffa',
  description,

  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16' },
      { url: '/favicon-32x32.png', sizes: '32x32' }
    ],
    apple: '/apple-touch-icon.png'
  },

  manifest: '/site.webmanifest',

  openGraph: {
    title: 'The Wedding of Nuril & Daffa',
    description,
    url: 'https://www.nurillovesdaffa.my.id/en',
    siteName: 'Nuril & Daffa Wedding',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Wedding Nuril & Daffa'
      }
    ],
    locale: 'en_US',
    alternateLocale: ['id_ID'],
    type: 'website'
  },

  twitter: {
    card: 'summary_large_image',
    title: 'The Wedding of Nuril & Daffa',
    description,
    images: ['/og-image.jpg']
  },

  alternates: {
    canonical: 'https://www.nurillovesdaffa.my.id/en',
    languages: {
      en: '/en',
      id: '/id'
    }
  }
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
