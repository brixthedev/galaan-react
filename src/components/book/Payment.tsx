import { format } from 'date-fns'
import * as Icon from 'lucide-react'
import { useLocation, useNavigate } from 'react-router-dom'
import { type Data } from '~/components/book/Confirm'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'

export default function Payment() {
  const { state }: { state: Data } = useLocation()
  const navigate = useNavigate()
  return (
    <div className='flex justify-between p-16'>
      <div className='w-[600px]'>
        <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight text-blue-950 lg:text-5xl'>
          Payment
        </h1>
        <h3 className='my-8 scroll-m-20 text-2xl font-bold tracking-tight'>{state.tour}</h3>
        <p className='mb-2 leading-7 [&:not(:first-child)]:mt-6'>Payment Methods</p>
        <div className='flex flex-col gap-4 rounded-xl border-2 border-blue-950 p-8 shadow-xl'>
          <div className='flex items-center gap-4'>
            <Icon.Circle className='fill-blue-950' />
            <img src='/images/mastercard.png' alt='Mastercard' className='w-20' />
          </div>
          <div>
            <Label htmlFor='cardholder'>Cardholder Name</Label>
            <Input id='cardholder' className='w-full' />
          </div>
          <div>
            <Label htmlFor='number'>Card Number</Label>
            <Input id='number' className='w-full' />
          </div>
          <div className='flex gap-4'>
            <div className='w-1/2'>
              <Label htmlFor='exp'>Exp Date</Label>
              <Input id='exp' className='w-full' />
            </div>
            <div className='w-1/2'>
              <Label htmlFor='cvv'>CVV</Label>
              <Input id='cvv' className='w-full' />
            </div>
          </div>
        </div>
        <div className='mt-4 flex items-center gap-4 rounded-xl border border-slate-200 p-8'>
          <Icon.Circle className='text-blue-950' />
          <img src='/images/visa.png' alt='Visa' className='w-20' />
        </div>
        <div className='mt-4 flex items-center gap-4 rounded-xl border border-slate-200 p-8'>
          <Icon.Circle className='text-blue-950' />
          <img src='/images/gcash.png' alt='GCash' className='w-20' />
        </div>
        <div className='mt-4 flex items-center gap-4 rounded-xl border border-slate-200 p-8'>
          <Icon.Circle className='text-blue-950' />
          <img src='/images/paypal.png' alt='Paypal' className='w-20' />
        </div>
        <div className='flex justify-center'>
          <Button
            onClick={() => navigate('/tours/success')}
            className='mt-4 w-96 rounded-xl bg-red-500 text-white'
          >
            Submit and Pay
          </Button>
        </div>
      </div>

      <div className='flex h-max w-96 flex-col gap-4 rounded-xl border border-slate-200 p-8 shadow-xl'>
        <h3 className='scroll-m-20 text-2xl font-bold tracking-tight'>{state.tour}</h3>
        <div className='flex justify-between'>
          <p className='leading-7'>Date</p>
          <p className='font-bold leading-7'>{format(new Date(state.date), 'PPP')}</p>
        </div>
        <div className='flex justify-between'>
          <p className='leading-7'>Number of people</p>
          <p className='font-bold leading-7'>{state.numberOfPeople}</p>
        </div>
        <div className='h-[2px] bg-black' />
        <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight'>Price Details</h3>
        <div className='flex justify-between'>
          <p className='leading-7'>Subtotal</p>
          <p className='font-bold leading-7'>Php {state.cost.toFixed(2)}</p>
        </div>
        <div className='flex justify-between'>
          <p className='leading-7'>Other fees</p>
          <p className='font-bold leading-7'>Php 100.00</p>
        </div>
        <div className='h-[2px] bg-black' />
        <div className='flex justify-between'>
          <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight'>Total</h3>
          <h3 className='scroll-m-20 text-2xl font-bold tracking-tight text-red-500'>
            Php {(state.cost + 100).toFixed(2)}
          </h3>
        </div>
      </div>
    </div>
  )
}
