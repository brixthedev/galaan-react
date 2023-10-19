export default function FeaturedArticle() {
  return (
    <div
      className='h-[432px] w-[768px] overflow-hidden rounded-xl p-8 text-white'
      style={{
        backgroundImage: 'url("/images/article-1.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className='flex h-full flex-col justify-end gap-4'>
        <p className='ml-4 w-[20ch] text-2xl font-bold'>Breaking boundaries and touching lives</p>
        <div className='h-[2px] bg-white' />
        <span className='ml-4 w-max rounded-full border border-slate-200 px-4 py-1 font-bold'>
          Lifestyle
        </span>
      </div>
    </div>
  )
}
