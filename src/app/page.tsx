import Image from 'next/image'
import { GridHome } from './components/grid-home'
import { Sidebar } from './components/sidebar'
import kaue from '@/assets/kaue.jpg'

export default function Home() {
  return (
    <main className="container pt-16 lg:grid lg:grid-cols-6">
      <header>
        <Sidebar />
      </header>
      <section className="lg:col-span-5">
        <GridHome />
      </section>
      <section className="pt-48 lg:col-span-6">
        <h1 className="text-2xl font-bold uppercase text-primary">Sobre mim</h1>

        <article className="flex flex-col gap-8 pt-16 lg:flex-row">
          <Image src={kaue} alt="Foto de Kaue Grohl" className="w-full" />

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit
            veritatis a distinctio quia? Itaque, impedit rem. Molestias maiores
            ipsam accusamus ullam similique voluptas alias enim, quidem eveniet
            mollitia iure dolore.
          </p>
        </article>
      </section>
    </main>
  )
}
