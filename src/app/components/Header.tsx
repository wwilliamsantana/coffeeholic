import avatar from '../../../public/avatar1.png'
import Image from 'next/image'
import { Search, Heart, ShoppingCart, Bell } from 'lucide-react'
import Link from 'next/link'
import { DropCategory } from './DropCategory'

export function Header() {
  return (
    <header className="fixed left-60 top-4 px-9 flex items-center justify-between gap-4 right-0">
      <div className="flex items-center justify-between bg-zinc-800 rounded-2xl px-3 py-2 gap-2 flex-1 mx-3">
        <DropCategory />
        <input
          type="text"
          className="bg-transparent text-zinc-100 placeholder:text-zinc-400 rounded flex-1 outline-none"
        />
        <button>
          <Search size={20} className="text-zinc-200" />
        </button>
      </div>

      <div className="flex items-center justify-center gap-12 text-zinc-200">
        <Link href={'/'}>
          <Heart size={20} />
        </Link>
        <Link href={'/'}>
          <Bell size={20} />
        </Link>
        <Link href={'/'}>
          <ShoppingCart size={20} />
        </Link>
      </div>

      <div className="border-l border-zinc-200 pl-8">
        <Image
          src={avatar}
          width={36}
          height={36}
          alt=""
          className="rounded-full"
        />
      </div>
    </header>
  )
}
