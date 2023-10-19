import FeaturedCard from '~/components/homepage/featured/FeaturedCard'
import MorePackages from '~/components/homepage/featured/MorePackages'

export default function Featured() {
  return (
    <div className='mt-16 flex flex-col items-center'>
      <FeaturedCard />
      <MorePackages />
    </div>
  )
}
