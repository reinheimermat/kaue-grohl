'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa'
import { MdMenu } from 'react-icons/md'

const links = [
  {
    name: 'Sobre',
    link: '#sobre',
  },
  {
    name: 'Galeria',
    link: '#galeria',
  },
  {
    name: 'Projetos',
    link: '#projetos',
  },
  {
    name: 'Instagram',
    link: '#instagram',
  },
  {
    name: 'Indicações',
    link: '#indicações',
  },
]

const social = [
  {
    link: 'https://instagram.com/kauegrohl',
    icon: <FaInstagram className="text-lg" />,
  },
  {
    link: 'https://facebook.com/kauegrohl',
    icon: <FaFacebook className="text-lg" />,
  },
  {
    link: 'https://wa.me/5511999999999',
    icon: <FaWhatsapp className="text-lg" />,
  },
]

export function Sidebar() {
  const [toggle, setToggle] = useState(false)

  return (
    <nav className="pe-8 lg:flex lg:h-full lg:flex-col lg:justify-between">
      <section className="flex items-center justify-between gap-2 pb-8 uppercase lg:flex-col lg:items-start lg:justify-normal lg:pb-0">
        <aside>
          <Link href={'/'}>
            <h1 className="text-wrap text-2xl font-bold text-primary lg:pb-8">
              Kaue Grohl
            </h1>
          </Link>
        </aside>

        <aside className="hidden lg:flex lg:flex-col lg:gap-4">
          {links.map((item, index) => (
            <Link href={item.link} key={index}>
              <div className="hover:text-primary focus-visible:text-primary">
                {item.name}
              </div>
            </Link>
          ))}
        </aside>

        {/* Mobile */}
        <aside className="block lg:hidden">
          <MdMenu
            onClick={() => setToggle(!toggle)}
            className="relative z-10 cursor-pointer text-3xl text-primary"
          />

          {toggle && (
            <div className="absolute right-0 top-0 z-0 h-screen w-full bg-black ps-8 pt-16 md:w-2/3">
              <header className="pb-8">
                <h1 className="text-2xl font-bold text-primary">Kaue Grohl</h1>
              </header>
              <section className="flex flex-col gap-2">
                {links.map((item, index) => (
                  <Link href={item.link} key={index}>
                    <div className="py-2">{item.name}</div>
                  </Link>
                ))}
              </section>
              <section className="pt-12">
                <h2>Meus contatos</h2>

                <div className="flex gap-4 pt-4 text-primary">
                  {social.map((item, index) => (
                    <Link href={item.link} target="_blank" key={index}>
                      <div className="hover:text-zinc-50">{item.icon}</div>
                    </Link>
                  ))}
                </div>
              </section>
            </div>
          )}
        </aside>
      </section>
      <section className="hidden uppercase lg:block">
        <h2>Meus Contatos</h2>

        <div className="flex gap-4 pt-4 text-primary">
          {social.map((item, index) => (
            <Link href={item.link} target="_blank" key={index}>
              <div className="hover:text-zinc-50">{item.icon}</div>
            </Link>
          ))}
        </div>
      </section>
    </nav>
  )
}
