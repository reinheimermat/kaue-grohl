import { GridHome } from './components/grid-home'
import { Sidebar } from './components/sidebar'

export default function Home() {
  return (
    <main className="container pt-16 lg:grid lg:grid-cols-6">
      <header>
        <Sidebar />
      </header>
      <section className="lg:col-span-5">
        <GridHome />
      </section>
    </main>
  )
}
