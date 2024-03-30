import Image from 'next/image'
import dog from '@/assets/dog.jpeg'

export function Grid() {
  return (
    <article className="grid grid-cols-2 gap-4 lg:gap-8">
      <Image
        src={dog}
        alt="Foto de Kaue Grohl"
        width={500}
        height={500}
        className="w-full rounded-xl"
      />
      <Image
        src={dog}
        alt="Foto de Kaue Grohl"
        width={500}
        height={500}
        className="w-full rounded-xl"
      />
      <Image
        src={dog}
        alt="Foto de Kaue Grohl"
        width={500}
        height={500}
        className="w-full rounded-xl"
      />
      <Image
        src={dog}
        alt="Foto de Kaue Grohl"
        width={500}
        height={500}
        className="w-full rounded-xl"
      />
    </article>
  )
}
