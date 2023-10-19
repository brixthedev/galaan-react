import Categories from '~/components/tours/categories'
import Products from '~/components/tours/products'

export default function ToursContents() {
  return (
    <div className='my-16 flex w-screen min-w-[1470px] flex-col justify-center'>
      <Categories />
      <Products />
    </div>
  )
}
