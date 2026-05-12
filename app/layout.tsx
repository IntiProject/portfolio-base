import type { Metadata } from 'next'
import { Be_Vietnam_Pro, Epilogue, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const epilogue = Epilogue({
  weight: ['700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-epilogue',
  display: 'swap',
})

const beVietnamPro = Be_Vietnam_Pro({
  weight: '600',
  subsets: ['latin'],
  variable: '--font-be-vietnam-pro',
  display: 'swap',
})

const plusJakartaSans = Plus_Jakarta_Sans({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ristian - Full Stack Developer',
  description:
    'Crafting digital experiences with a blend of technical precision and creative chaos.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${epilogue.variable} ${beVietnamPro.variable} ${plusJakartaSans.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-grid-pattern flex min-h-screen flex-col overflow-x-hidden bg-background text-on-background selection:bg-secondary-container selection:text-on-secondary-container">
        {children}
      </body>
    </html>
  )
}
