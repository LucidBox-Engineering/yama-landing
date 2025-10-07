import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import '@fontsource-variable/manrope';
import './globals.css'

export const metadata: Metadata = {
  title: 'Yama Access',
  description: 'Your partner in Access Control',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: "Manrope Variable";
  --font-sans: "Manrope Variable";
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
