import * as Icon from 'lucide-react'

const categories = [
  {
    name: 'Tour Packages',
    Icon: Icon.BaggageClaim,
  },
  {
    name: 'Hotels',
    Icon: Icon.Hotel,
  },
  {
    name: 'Destinations',
    Icon: Icon.MapPin,
  },
  {
    name: 'Activities',
    Icon: Icon.ShipWheel,
  },
]

export default function CategoryCard() {
  return (
    <div className='flex gap-8'>
      {categories.map(({ name, Icon }) => (
        <div
          key={name}
          className='flex aspect-square w-40 flex-col items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white text-red-500 shadow-xl'
        >
          <Icon size={80} />
          <p className='text-lg font-bold'>{name}</p>
        </div>
      ))}
    </div>
  )
}
