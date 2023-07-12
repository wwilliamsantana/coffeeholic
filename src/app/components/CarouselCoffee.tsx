'use client'

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import { CardCoffee } from './CardCoffee'
import image1 from '../../assets/coffees/Image.svg'

export function CarouselCoffee() {
  const [sliderRef] = useKeenSlider({
    loop: false,
    rtl: false,
    slides: {
      spacing: 8,
      perView: 4,
    },
  })

  return (
    <div className="mt-3 flex gap-4 keen-slider" ref={sliderRef}>
      <CardCoffee
        name="Expresso Tradicional"
        price={12.9}
        types={['tradicional']}
        image={image1}
      />
      <CardCoffee
        name="Expresso Americano"
        price={12.9}
        types={['tradicional']}
        image={image1}
      />
      <CardCoffee
        name="Cubano"
        price={12.9}
        types={['tradicional', 'com leite']}
        image={image1}
      />
      <CardCoffee
        name="Macchiato"
        price={12.9}
        types={['tradicional', 'Especial']}
        image={image1}
      />
      <CardCoffee
        name="Expresso forte"
        price={12.9}
        types={['tradicional', 'Alcoólico']}
        image={image1}
      />
    </div>
  )
}
