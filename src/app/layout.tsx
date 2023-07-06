import { ReactNode } from 'react'
import './globals.css'
import {
  Roboto_Flex as RobotoFlex,
  Caveat_Brush as caveatBrush,
} from 'next/font/google'

const roboto = RobotoFlex({
  subsets: ['latin'],
  variable: '--font-roboto-flex',
})
const caveat = caveatBrush({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-caveat-brush',
})

export const metadata = {
  title: 'Coffee / Coffeeholic Store',
  description: 'Coffee store',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body
        className={`${roboto.variable} ${caveat.variable} bg-zinc-900 font-sans`}
      >
        {children}
      </body>
    </html>
  )
}
