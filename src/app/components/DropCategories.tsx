'use client'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { ChevronRight, Grip } from 'lucide-react'

export function DropCategories() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="px-3 py-2 rounded-lg  bg-gradient-to-r from-red-800 mt-12 flex items-center gap-8 cursor-pointer text-zinc-300 outline-none">
          <div className="flex gap-3 items-center">
            <Grip size={28} className="bg-zinc-700 rounded-md  p-1" />
            <span className=" font-bold text-lg">Categorias</span>
          </div>
          <ChevronRight size={20} />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          side="right"
          className=" px-5 py-2 bg-zinc-700/80 rounded-md ml-2 font-bold text-sm text-zinc-200"
        >
          <DropdownMenu.Item className=" p-2 border-b border-white/10 outline-none hover:bg-zinc-600 rounded cursor-pointer">
            Expresso tradicional
          </DropdownMenu.Item>
          <DropdownMenu.Item className=" p-2 border-b border-white/10 outline-none hover:bg-zinc-600 rounded cursor-pointer">
            Expresso Americano
          </DropdownMenu.Item>
          <DropdownMenu.Item className=" p-2 border-b border-white/10 outline-none hover:bg-zinc-600 rounded cursor-pointer">
            Cubano
          </DropdownMenu.Item>
          <DropdownMenu.Item className=" p-2 border-b border-white/10 outline-none hover:bg-zinc-600 rounded cursor-pointer ">
            Macchiato
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
