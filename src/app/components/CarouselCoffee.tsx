'use client'

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import { CardCoffee } from './CardCoffee'
import image1 from '../../assets/coffees/Image.svg'
import image2 from '../../assets/coffees/Image-1.svg'
import image3 from '../../assets/coffees/Image-2.svg'
import image4 from '../../assets/coffees/Image-3.svg'

export function CarouselCoffee() {
  const [sliderRef] = useKeenSlider({
    loop: false,
    rtl: false,
    mode: 'free',
    slides: {
      spacing: 8,
      perView: 4,
    },
    breakpoints: {
      '(max-width:800px)': {
        slides: {
          perView: 1,
        },
      },
      '(min-width:800px)': {
        slides: {
          perView: 2,
        },
      },
      '(min-width:1100px)': {
        slides: {
          perView: 3,
        },
      },
      '(min-width:1440px)': {
        slides: {
          perView: 4,
        },
      },
      '(min-width:1750px)': {
        slides: {
          perView: 6,
        },
      },
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
        image={image2}
      />
      <CardCoffee
        name="Expresso Cremoso"
        price={12.9}
        types={['tradicional']}
        image={image3}
      />
      <CardCoffee
        name="Expresso Gelado"
        price={12.9}
        types={['tradicional', 'Gelado']}
        image={image4}
      />
    </div>
  )
}
