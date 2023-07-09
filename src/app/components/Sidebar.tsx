import {
  ChevronRight,
  CircleDollarSign,
  Grip,
  PanelTop,
  Settings,
  Store,
  Truck,
  User,
} from 'lucide-react'
import Link from 'next/link'
import { Logo } from './Logo'

export function Sidebar() {
  return (
    <aside className="w-60 mx-9 fixed top-4 left-0 ">
      <div>
        <Logo />

        <h1 className="font-bold text-3xl tracking-widest  text-zinc-100 mt-16">
          Explore
        </h1>

        <div className="px-4 py-2 rounded-lg bg-red-800 mt-12 flex items-center gap-8 cursor-pointer text-zinc-300">
          <div className="flex gap-3 items-center">
            <Grip size={32} className="bg-zinc-700 rounded-md  p-1" />
            <span className=" font-bold text-xl">Categorias</span>
          </div>
          <ChevronRight size={20} />
        </div>

        <div className="flex flex-col gap-6 mt-12 text-zinc-300 ">
          <Link href={'/'} className="flex items-center gap-3 ">
            <CircleDollarSign size={32} />
            <span className="font-bold text-lg ">Mais vendidos</span>
          </Link>
          <Link href={'/'} className="flex items-center gap-3 ">
            <Store size={32} />
            <span className="font-bold text-lg ">Venda conosco</span>
          </Link>
          <Link href={'/'} className="flex items-center gap-3 ">
            <Truck size={32} />
            <span className="font-bold text-lg ">Acompanhar pedido</span>
          </Link>
          <Link href={'/'} className="flex items-center gap-3 ">
            <PanelTop size={32} />
            <span className="font-bold text-lg ">Blog</span>
          </Link>
        </div>
      </div>

      <footer className=" text-zinc-300 border-t border-zinc-700 inline-block mt-60 w-full p-10">
        <Link href={'/'} className="flex items-center gap-3 ">
          <User size={32} />
          <span className="font-bold text-lg ">Conta</span>
        </Link>
        <Link href={'/'} className="flex items-center gap-3 mt-4">
          <Settings size={32} />
          <span className="font-bold text-lg ">Configurações</span>
        </Link>
      </footer>
    </aside>
  )
}
