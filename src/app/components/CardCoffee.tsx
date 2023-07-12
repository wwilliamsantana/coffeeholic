import Image from 'next/image'

interface CardCoffeeProps {
  name: string
  types: string[]
  price: number
  image: string
}

export function CardCoffee({ name, types, price, image }: CardCoffeeProps) {
  const formatPrice = new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
  }).format(price)

  return (
    <div className="keen-slider__slide w-64 gap-1 bg-zinc-800 rounded-xl p-5 flex flex-col justify-start">
      <div className="bg-zinc-700 p-8 rounded-xl">
        <Image src={image} alt="" />
      </div>
      <h2 className="font-bold tracking-widest text-white">{name}</h2>
      <div className="flex items-start gap-0.5">
        {types.map((item, id) => {
          return (
            <span
              key={id}
              className="text-white text-[10px] font-bold px-1.5 py-1 bg-yellow-500 uppercase rounded-full"
            >
              {item}
            </span>
          )
        })}
      </div>
      <strong className="text-end text-lg tracking-widest text-white">
        {formatPrice}
      </strong>
    </div>
  )
}
