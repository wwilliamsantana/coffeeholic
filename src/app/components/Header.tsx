import logo from '../../../public/logo.svg'
import avatar from '../../../public/avatar1.png'
import Image from 'next/image'
import { ChevronDown, Search, Heart, ShoppingCart, Bell } from 'lucide-react'
import Link from 'next/link'

export function Header() {
  return (
    <header className="max-w-7xl my-3 mx-9 w-full flex items-center justify-between gap-4">
      <div className="flex items-center justify-center gap-2">
        <Image src={logo} alt="" className="w-12 h-12" />
        <h1 className="font-caveatFont text-4xl text-white">Coffeeholic</h1>
      </div>

      <div className="flex items-center justify-between bg-zinc-800 rounded-2xl px-3 py-2 gap-2 flex-1">
        <div className="bg-zinc-700 rounded-xl px-2 py-[3px] text-zinc-200 flex gap-[6px] items-center">
          <p className="text-sm">All categories</p>
          <ChevronDown size={16} />
        </div>
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
