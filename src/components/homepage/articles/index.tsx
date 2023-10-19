import FeaturedArticle from '~/components/homepage/articles/FeaturedArticle'
import ReadArticles from '~/components/homepage/articles/ReadArticles'

export default function Articles() {
  return (
    <div className='mt-16 flex items-center justify-evenly'>
      <ReadArticles />
      <FeaturedArticle />
    </div>
  )
}
