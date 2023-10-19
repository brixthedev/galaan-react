import * as Icon from 'lucide-react'
import { cn } from '~/utils/css'

const filters = ['Most read', 'Trending', 'New']

export default function Explore() {
  return (
    <div className='mx-8 my-16'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          {filters.map((filter, index) => (
            <p
              key={index}
              className={cn(
                'cursor-pointer px-4 py-1 text-slate-400',
                index === 0 ? 'rounded-full border border-slate-400 font-bold text-black' : '',
              )}
            >
              {filter}
            </p>
          ))}
        </div>
        <input
          type='text'
          placeholder='Search'
          className='w-96 rounded-xl border border-slate-400 px-4 py-1'
        />
      </div>
      <div className='flex items-end justify-between'>
        <h1 className='mt-8 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
          Most Read
        </h1>
        <div className='flex items-center gap-2'>
          <span className='italic underline'>View all</span>
          <Icon.MoveRight />
        </div>
      </div>
      <div className='mt-8 grid h-[640px] grid-cols-3 grid-rows-2 gap-4'>
        <div
          className='relative row-span-2 overflow-hidden rounded-xl text-white shadow-xl'
          style={{
            backgroundImage: 'url("/images/article-1.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div
            className='absolute inset-0 flex flex-col justify-end p-4'
            style={{
              background:
                'linear-gradient(180deg, rgba(235,244,245,0) 0%, rgba(239,68,68,.6) 100%)',
            }}
          >
            <p className='w-[20ch] text-2xl font-bold'>Breaking boundaries and touching lives</p>
          </div>
        </div>
        <div
          className='relative col-span-2 overflow-hidden rounded-xl text-white shadow-xl'
          style={{
            backgroundImage: 'url("/images/most-read-1.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div
            className='absolute inset-0 flex flex-col justify-end p-4'
            style={{
              background:
                'linear-gradient(180deg, rgba(235,244,245,0) 0%, rgba(239,68,68,.6) 100%)',
            }}
          >
            <p className='w-[20ch] text-2xl font-bold'>
              The quick, brown fox jumps over a lazy dog.
            </p>
          </div>
        </div>
        <div
          className='relative overflow-hidden rounded-xl text-white shadow-xl'
          style={{
            backgroundImage: 'url("/images/most-read-2.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div
            className='absolute inset-0 flex flex-col justify-end p-4'
            style={{
              background:
                'linear-gradient(180deg, rgba(235,244,245,0) 0%, rgba(239,68,68,.6) 100%)',
            }}
          >
            <p className='w-[20ch] text-2xl font-bold'>Zwei flinke Boxer jagen die quirlige.</p>
          </div>
        </div>
        <div
          className='relative overflow-hidden rounded-xl text-white shadow-xl'
          style={{
            backgroundImage: 'url("/images/more-1.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div
            className='absolute inset-0 flex flex-col justify-end p-4'
            style={{
              background:
                'linear-gradient(180deg, rgba(235,244,245,0) 0%, rgba(239,68,68,.6) 100%)',
            }}
          >
            <p className='w-[20ch] text-2xl font-bold'>
              Voyez ce jeu exquis wallon, de graphie en.
            </p>
          </div>
        </div>
      </div>
      <div className='flex items-end justify-between'>
        <h1 className='mt-16 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
          Trending
        </h1>
        <div className='flex items-center gap-2'>
          <span className='italic underline'>View all</span>
          <Icon.MoveRight />
        </div>
      </div>

      <div className='mt-8 grid h-[640px] grid-cols-3 grid-rows-2 gap-4'>
        <div
          className='relative row-span-2 overflow-hidden rounded-xl border border-slate-200 text-white shadow-xl'
          style={{
            backgroundImage: 'url("/images/trending-1.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div
            className='absolute inset-0 flex flex-col justify-end p-4'
            style={{
              background:
                'linear-gradient(180deg, rgba(235,244,245,0) 0%, rgba(239,68,68,.6) 100%)',
            }}
          >
            <div className='flex flex-col gap-4'>
              <p className='w-[20ch] text-2xl font-bold'>Breaking boundaries and touching lives</p>
              <div className='h-[2px] bg-white' />
              <p>Culture</p>
            </div>
          </div>
        </div>
        <div className='flex overflow-hidden rounded-xl border border-slate-200 shadow-xl'>
          <div
            className='h-full w-2/3'
            style={{
              backgroundImage: 'url("/images/trending-2.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className='flex w-full flex-col justify-center gap-4 p-4'>
            <p className='w-[16ch] text-2xl font-bold'>Still still stellar, topping the charts!</p>
            <div className='h-[2px] bg-black' />
            <p>Tips and Advice</p>
          </div>
        </div>
        <div className='flex overflow-hidden rounded-xl border border-slate-200 shadow-xl'>
          <div
            className='h-full w-2/3'
            style={{
              backgroundImage: 'url("/images/trending-2.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className='flex w-full flex-col justify-center gap-4 p-4'>
            <p className='w-[16ch] text-2xl font-bold'>When the curtain closes.</p>
            <div className='h-[2px] bg-black' />
            <p>History</p>
          </div>
        </div>
        <div className='flex overflow-hidden rounded-xl border border-slate-200 shadow-xl'>
          <div
            className='h-full w-2/3'
            style={{
              backgroundImage: 'url("/images/trending-2.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className='flex w-full flex-col justify-center gap-4 p-4'>
            <p className='w-[16ch] text-2xl font-bold'>Good morning weather hackers!</p>
            <div className='h-[2px] bg-black' />
            <p>Activities</p>
          </div>
        </div>
        <div className='flex overflow-hidden rounded-xl border border-slate-200 shadow-xl'>
          <div
            className='h-full w-2/3'
            style={{
              backgroundImage: 'url("/images/trending-2.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className='flex w-full flex-col justify-center gap-4 p-4'>
            <p className='w-[16ch] text-2xl font-bold'>Your Mori is also a streamer!</p>
            <div className='h-[2px] bg-black' />
            <p>Food and Drink</p>
          </div>
        </div>
      </div>
    </div>
  )
}
