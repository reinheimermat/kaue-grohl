import Image from 'next/image'
import dog from '@/assets/dog.jpeg'
import kaue from '@/assets/kaue.jpg'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function GridHome() {
  return (
    <article className="grid grid-cols-1 grid-rows-3 gap-x-8 lg:grid-cols-2">
      <aside className="row-start-1 overflow-hidden rounded-xl lg:row-span-3">
        <Image
          src={kaue}
          alt="Imagem 1"
          className="h-full w-full rounded-xl object-cover transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </aside>
      <aside className="row-start-3 overflow-hidden rounded-xl lg:row-span-2">
        <Image
          src={dog}
          alt="Imagem 1"
          className="h-full w-full rounded-xl object-cover transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </aside>
      <aside className="row-start-2 my-auto flex flex-col text-center lg:row-span-2 lg:my-0 lg:justify-between lg:pt-8">
        <h1 className="pb-8 text-3xl font-bold uppercase">arte & tattoo</h1>

        <Button
          asChild
          className="h-24 w-full text-xl uppercase text-black lg:text-2xl"
        >
          <Link href={'https://wa.me/reinheimermat'}>Agendar um horário</Link>
        </Button>
      </aside>
    </article>
  )
}
