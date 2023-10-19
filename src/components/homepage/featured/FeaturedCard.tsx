import * as Icon from 'lucide-react'
import { Link } from 'react-router-dom'

const featured = [
  {
    title: 'Beach Resort Day Pass',
    location: 'Iloilo',
    src: '/images/featured-1.jpg',
  },
  {
    title: 'Baguio Cultural Tour',
    location: 'Baguio',
    src: '/images/featured-2.jpg',
  },
  {
    title: 'Bohol Countryside Tour',
    location: 'Bohol',
    src: '/images/featured-3.jpg',
  },
  {
    title: 'Cebu Heritage Tour',
    location: 'Cebu',
    src: '/images/featured-4.jpg',
  },
]

export default function FeaturedCard() {
  return (
    <div className='grid w-max grid-cols-4 gap-8'>
      {featured.map((feature) => (
        <Link key={feature.title} to='/tours/1'>
          <div className='aspect-square w-96 cursor-pointer overflow-hidden rounded-xl shadow-xl'>
            <img
              src={feature.src}
              alt='Featured tourist spot'
              className='aspect-video h-2/4 w-full object-cover object-center'
            />
            <div className='flex h-2/4 flex-col justify-between p-4'>
              <p className='text-2xl font-bold'>{feature.title}</p>
              <div className='flex items-center justify-between'>
                <p className='rounded-full border border-slate-200 px-4 py-1'>{feature.location}</p>
                <Icon.Heart className='text-red-500' />
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
