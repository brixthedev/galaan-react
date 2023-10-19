import DiscoverMore from '~/components/homepage/more/DiscoverMore'
import FeaturedImage from '~/components/homepage/more/FeaturedImage'

export default function More() {
  return (
    <div className='my-16 flex items-center justify-evenly'>
      <FeaturedImage />
      <DiscoverMore />
    </div>
  )
}
