import { CarouselCoffee } from './components/CarouselCoffee'
import { Headline } from './components/Headline'

export default function Home() {
  return (
    <main>
      <Headline />
      <h1 className="font-bold text-3xl mt-14 text-white tracking-widest">
        Top Produtos
      </h1>

      <CarouselCoffee />
    </main>
  )
}
