import CategoryCard from '~/components/homepage/categories/CategoryCard'

export default function Categories() {
  return (
    <div>
      <h1 className='ml-8 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
        Categories
      </h1>
      <div className='mt-8 flex justify-center'>
        <CategoryCard />
      </div>
    </div>
  )
}
