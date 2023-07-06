import logo from '../../public/logo.svg'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="grid place-items-center m-4">
      <header className="max-w-[1440px] my-7 mx-9 w-full">
        <div className="flex items-center justify-center gap-2 bg-red-300">
          <Image src={logo} alt="" className="w-14 h-14" />
          <h1 className="font-caveatFont text-5xl text-white">Coffeeholic</h1>
        </div>
      </header>
    </main>
  )
}
