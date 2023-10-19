import { useNavigate } from 'react-router-dom'
import FeaturedCard from '~/components/homepage/featured/FeaturedCard'
import { Button } from '~/components/ui/button'

export default function Success() {
  const navigate = useNavigate()
  return (
    <div>
      <div className='my-16 flex flex-col items-center'>
        <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight text-red-500 lg:text-5xl'>
          Great! Thanks for purchasing our package!
        </h1>
        <h3 className='mb-16 mt-4 scroll-m-20 text-2xl font-semibold tracking-tight'>
          Your receipt and e-ticket will be sent to your email.
        </h3>
        <div className='flex flex-col gap-2'>
          <Button
            onClick={() => navigate('/tours', { relative: 'path' })}
            className='w-96 rounded-xl bg-blue-950 text-white hover:bg-blue-900'
          >
            Back to Marketplace
          </Button>
          <Button
            onClick={() => navigate('/', { relative: 'path' })}
            className='w-96 rounded-xl border-blue-950 text-blue-950'
            variant={'outline'}
          >
            Back to Home
          </Button>
        </div>
        <img src='/images/galaan-logo.jpg' alt='Galaan logo' className='mt-8 w-80' />
      </div>

      <div className='flex flex-col items-center bg-slate-100 py-8'>
        <div className='mb-8 ml-16 w-full'>
          <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight'>Suggested Packages</h3>
        </div>

        <FeaturedCard />
      </div>
    </div>
  )
}
