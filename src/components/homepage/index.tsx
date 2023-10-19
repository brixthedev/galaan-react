import Articles from '~/components/homepage/articles'
import Categories from '~/components/homepage/categories'
import Featured from '~/components/homepage/featured'
import Headline from '~/components/homepage/headline'
import More from '~/components/homepage/more'

export default function HomepageContents() {
  return (
    <div className='flex w-screen min-w-[1470px] flex-col justify-center'>
      <Headline />
      <Categories />
      <Featured />
      <Articles />
      <More />
    </div>
  )
}
