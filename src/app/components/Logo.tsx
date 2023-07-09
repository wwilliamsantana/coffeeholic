import Image from 'next/image'
import logo from '../../../public/logo.svg'

export function Logo() {
  return (
    <div className="flex items-center justify-center gap-2 ">
      <Image src={logo} alt="" className="w-12 h-12" />
      <h1 className="font-caveatFont text-4xl text-white">Coffeeholic</h1>
    </div>
  )
}
