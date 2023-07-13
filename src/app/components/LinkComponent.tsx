import Link from 'next/link'
import { ReactNode } from 'react'

interface LinkComponentProps {
  children: ReactNode
  title: string
  href: string
  propsClass?: string
}

export function LinkComponent({
  children,
  title,
  href,
  propsClass,
}: LinkComponentProps) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 hover:text-zinc-300 ${propsClass}`}
    >
      {children}
      <span className="font-bold text-lg ">{title}</span>
    </Link>
  )
}
