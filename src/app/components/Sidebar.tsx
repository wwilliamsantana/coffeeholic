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

export function Sidebar() {
  return (
    <aside className="h-full max-w-64 mx-9 ">
      <main>
        <h1 className="font-bold text-3xl tracking-widest mt-16 text-zinc-100">
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
      </main>

      <footer className="flex flex-col gap-4 text-zinc-300 p-10 border-t border-zinc-700 absolute bottom-0">
        <Link href={'/'} className="flex items-center gap-3 ">
          <User size={32} />
          <span className="font-bold text-lg ">Conta</span>
        </Link>
        <Link href={'/'} className="flex items-center gap-3 ">
          <Settings size={32} />
          <span className="font-bold text-lg ">Configurações</span>
        </Link>
      </footer>
    </aside>
  )
}
