import FeaturedCard from '~/components/homepage/featured/FeaturedCard'

export default function Products() {
  return (
    <div>
      <h1 className='ml-8 mt-16 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
        Products
      </h1>
      <div className='mt-8 flex justify-center'>
        <FeaturedCard />
      </div>
      <div className='mt-8 flex justify-center'>
        <FeaturedCard />
      </div>
      <div className='mt-8 flex justify-center'>
        <FeaturedCard />
      </div>
      <div className='mt-8 flex justify-center'>
        <FeaturedCard />
      </div>
    </div>
  )
}
