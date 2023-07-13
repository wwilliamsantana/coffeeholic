import {
  CircleDollarSign,
  PanelTop,
  Settings,
  Store,
  Truck,
  User,
} from 'lucide-react'
import { Logo } from './Logo'
import { DropCategories } from './DropCategories'
import { LinkComponent } from './LinkComponent'

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
          <LinkComponent title="Mais vendidos" href="/">
            <CircleDollarSign size={32} />
          </LinkComponent>

          <LinkComponent title="Venda conosco" href="/">
            <Store size={32} />
          </LinkComponent>

          <LinkComponent title="Acompanhar pedido" href="/">
            <Truck size={32} />
          </LinkComponent>

          <LinkComponent title="Blog" href="/">
            <PanelTop size={32} />
          </LinkComponent>
        </div>
      </div>

      <footer className=" text-zinc-300/70 border-t border-zinc-700 inline-block mt-60 w-full p-10">
        <LinkComponent title="Conta" href="/">
          <User size={32} />
        </LinkComponent>

        <LinkComponent title="Configurações" href="/" propsClass="mt-4">
          <Settings size={32} />
        </LinkComponent>
      </footer>
    </aside>
  )
}
