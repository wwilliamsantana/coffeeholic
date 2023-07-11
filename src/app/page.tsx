import Image from 'next/image'
import { Headline } from './components/Headline'
import image1 from '../assets/coffees/Image.svg'

export default function Home() {
  return (
    <main>
      <Headline />
      <h1 className="font-bold text-3xl mt-14 text-white tracking-widest">
        Top Produtos
      </h1>

      <div className="mt-3 flex gap-4">
        <div className="w-64 bg-zinc-800 rounded-xl p-5 flex gap-2 flex-col justify-start">
          <div className="bg-zinc-700 p-8 rounded-xl">
            <Image src={image1} alt="" />
          </div>
          <h2 className="font-bold tracking-widest text-white">
            Expresso Tradicional
          </h2>
          <div className="flex items-start gap-0.5">
            <span className="text-white text-xs font-bold px-1.5 py-1 bg-yellow-500 uppercase rounded-full">
              Tradicional
            </span>
            <span className="text-white text-xs font-bold px-1.5 py-1 bg-yellow-500 uppercase rounded-full">
              Com leite
            </span>
          </div>

          <strong className="text-end text-lg tracking-widest text-white">
            R$ 12,90
          </strong>
        </div>
        <div className="w-64 bg-zinc-800 rounded-xl p-5 flex gap-2 flex-col justify-start">
          <div className="bg-zinc-700 p-8 rounded-xl">
            <Image src={image1} alt="" />
          </div>
          <h2 className="font-bold tracking-widest text-white">
            Expresso Tradicional
          </h2>
          <div className="flex items-start gap-0.5">
            <span className="text-white text-xs font-bold px-1.5 py-1 bg-yellow-500 uppercase rounded-full">
              Tradicional
            </span>
            <span className="text-white text-xs font-bold px-1.5 py-1 bg-yellow-500 uppercase rounded-full">
              Com leite
            </span>
          </div>

          <strong className="text-end text-lg tracking-widest text-white">
            R$ 12,90
          </strong>
        </div>
        <div className="w-64 bg-zinc-800 rounded-xl p-5 flex gap-2 flex-col justify-start">
          <div className="bg-zinc-700 p-8 rounded-xl">
            <Image src={image1} alt="" />
          </div>
          <h2 className="font-bold tracking-widest text-white">
            Expresso Tradicional
          </h2>
          <div className="flex items-start gap-0.5">
            <span className="text-white text-xs font-bold px-1.5 py-1 bg-yellow-500 uppercase rounded-full">
              Tradicional
            </span>
            <span className="text-white text-xs font-bold px-1.5 py-1 bg-yellow-500 uppercase rounded-full">
              Com leite
            </span>
          </div>

          <strong className="text-end text-lg tracking-widest text-white">
            R$ 12,90
          </strong>
        </div>
      </div>
    </main>
  )
}
