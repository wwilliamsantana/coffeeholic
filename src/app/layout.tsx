import { ReactNode } from 'react'
import './globals.css'
import {
  Roboto_Flex as RobotoFlex,
  Caveat_Brush as caveatBrush,
} from 'next/font/google'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

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
        <Sidebar />

        <div className="ml-72 relative h-screen">
          <Header />
          <div className="py-32 px-4 max-w-4xl ">{children}</div>
        </div>
      </body>
    </html>
  )
}
