import Image from 'next/image'
import coffeeBatery from '../../../public/coffeebateryresize.png'
import logoDunkin from '../../../public/logo-dunkin-donuts-256.png'
import logoNestle from '../../../public/logo-nestle-256.png'
import logoPilao from '../../../public/logo-pilao-256.png'
import logoStarbucks from '../../../public/logo-starbucks-256.png'
import blackFriday from '../../../public/blackfridayresize.png'

export function Headline() {
  return (
    <div className="flex items-center gap-4  ">
      <div className="flex-1 bg-zinc-800 rounded-xl px-1.5 py-8 items-center flex gap-5 min-w-[618px] justify-center">
        <Image src={coffeeBatery} width={256} height={256} alt="" />
        <div className="flex flex-col gap-16">
          <p className="font-bold text-lg tracking-widest text-white">
            Atrás de cada pessoa de sucesso existe uma quantidade substancial de
            café.
          </p>
          <div className="flex items-center gap-4 justify-center">
            <Image src={logoStarbucks} width={72} alt="" />
            <Image src={logoPilao} width={72} alt="" />
            <Image src={logoDunkin} width={72} alt="" />
            <Image src={logoNestle} width={72} alt="" />
          </div>
        </div>
      </div>
      <div className="xl:grid hidden  w-72 h-80  rounded-xl bg-[url('../../public/radiallineresize.png')] bg-cover bg-center bg-zinc-800 bg-no-repeat  items-center">
        <Image src={blackFriday} alt="" className="w-full" />
      </div>
    </div>
  )
}
