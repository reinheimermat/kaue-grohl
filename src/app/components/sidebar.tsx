import Link from 'next/link'
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa'

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
  return (
    <nav>
      <Link href={'/'}>
        <h1 className="text-primary text-2xl font-bold">Kaue Grohl</h1>
      </Link>
      <aside className="flex flex-col gap-2 pt-8 uppercase">
        {links.map((item, index) => (
          <Link href={item.link} key={index}>
            <div className="hover:text-primary focus-visible:text-primary">
              {item.name}
            </div>
          </Link>
        ))}
      </aside>
      <aside className="pt-52 uppercase">
        <h2>Meus Contatos</h2>

        <div className="text-primary flex gap-4 pt-4">
          {social.map((item, index) => (
            <Link href={item.link} target="_blank" key={index}>
              <div className="hover:text-zinc-50">{item.icon}</div>
            </Link>
          ))}
        </div>
      </aside>
    </nav>
  )
}
