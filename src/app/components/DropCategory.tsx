'use client'

import { ChevronDown } from 'lucide-react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

export function DropCategory() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="bg-zinc-700 rounded-xl px-2 py-[3px] text-zinc-200 flex gap-[6px] items-center outline-none">
          <p className="text-sm">Categorias</p>
          <ChevronDown size={16} />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className=" px-4 py-2 bg-zinc-500 rounded-md mt-2 font-bold text-sm text-zinc-200">
          <DropdownMenu.Item className=" p-1 border-b border-white/10 outline-none hover:bg-zinc-600 hover:rounded-md cursor-pointer">
            Expresso tradicional
          </DropdownMenu.Item>
          <DropdownMenu.Item className=" p-1 border-b border-white/10 outline-none hover:bg-zinc-600 hover:rounded-md cursor-pointer">
            Expresso Americano
          </DropdownMenu.Item>
          <DropdownMenu.Item className=" p-1 border-b border-white/10 outline-none hover:bg-zinc-600 hover:rounded-md cursor-pointer">
            Cubano
          </DropdownMenu.Item>
          <DropdownMenu.Item className=" p-1 border-b border-white/10 outline-none hover:bg-zinc-600 hover:rounded-md cursor-pointer ">
            Macchiato
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
