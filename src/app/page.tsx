import { DefaultOverlayContent } from '@/components/slider/default-overlay-content'
import { Model } from '@/components/slider/model'
import Image from 'next/image'
import testImage from '../../public/test.jpeg'

const SlideImages = [
  {
    id: 1,
    label: 'Model One',
    img: testImage,
    description: 'Order Online for delivery 1',
  },
  {
    id: 2,
    label: 'Model Two',
    img: testImage,
    description: 'Order Online for delivery 2',
  },
  {
    id: 3,
    label: 'Model Three',
    img: testImage,
    description: 'Order Online for delivery 3',
  },
]

export default function Home() {
  return (
    <div className="h-screen">
      <Model.Wrapper>
        <div>
          {SlideImages.map((slide) => (
            <Model.Section
              key={slide.id}
              modelname={slide.label}
              overlaynode={
                <DefaultOverlayContent
                  label="Modal One"
                  description="Order Online for delivery"
                />
              }
            >
              <Image src={slide.img} alt="Test" className="w-full" />
            </Model.Section>
          ))}
        </div>
      </Model.Wrapper>
    </div>
  )
}
