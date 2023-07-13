import {
  CircleDollarSign,
  PanelTop,
  Settings,
  Store,
  Truck,
  User,
} from 'lucide-react'
import Link from 'next/link'
import { Logo } from './Logo'
import { DropCategories } from './DropCategories'

export function Sidebar() {
  return (
    <aside className="w-60 mx-9 fixed top-4 left-0 ">
      <div>
        <Logo />

        <h1 className="font-bold text-3xl tracking-widest  text-zinc-100 mt-16">
          Explore
        </h1>

        <DropCategories />

        <div className="flex flex-col gap-6 mt-12 text-zinc-300/70  ">
          <Link
            href={'/'}
            className="flex items-center gap-3 hover:text-zinc-300"
          >
            <CircleDollarSign size={32} />
            <span className="font-bold text-lg ">Mais vendidos</span>
          </Link>
          <Link
            href={'/'}
            className="flex items-center gap-3 hover:text-zinc-300"
          >
            <Store size={32} />
            <span className="font-bold text-lg ">Venda conosco</span>
          </Link>
          <Link
            href={'/'}
            className="flex items-center gap-3 hover:text-zinc-300"
          >
            <Truck size={32} />
            <span className="font-bold text-lg ">Acompanhar pedido</span>
          </Link>
          <Link
            href={'/'}
            className="flex items-center gap-3 hover:text-zinc-300"
          >
            <PanelTop size={32} />
            <span className="font-bold text-lg ">Blog</span>
          </Link>
        </div>
      </div>

      <footer className=" text-zinc-300/70 border-t border-zinc-700 inline-block mt-60 w-full p-10">
        <Link
          href={'/'}
          className="flex items-center gap-3 hover:text-zinc-300 "
        >
          <User size={32} />
          <span className="font-bold text-lg ">Conta</span>
        </Link>
        <Link
          href={'/'}
          className="flex items-center gap-3 mt-4 hover:text-zinc-300"
        >
          <Settings size={32} />
          <span className="font-bold text-lg ">Configurações</span>
        </Link>
      </footer>
    </aside>
  )
}
