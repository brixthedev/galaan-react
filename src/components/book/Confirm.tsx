import { format } from 'date-fns'
import { useLocation, useNavigate } from 'react-router-dom'
import { Button } from '~/components/ui/button'
import { Checkbox } from '~/components/ui/checkbox'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'

export interface Data {
  date: Date
  cost: number
  tour: string
  numberOfPeople: number
}

export default function Confirm() {
  const { state }: { state: Data } = useLocation()
  const navigate = useNavigate()
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    navigate('/tours/payment', { relative: 'path', state })
  }

  return (
    <div className='m-16'>
      <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight text-blue-950 lg:text-5xl'>
        Confirm Details
      </h1>
      <div className='mt-8 flex justify-between'>
        <div className='mt-8 flex w-[600px] flex-col gap-4'>
          <h3 className='scroll-m-20 text-2xl font-bold tracking-tight'>{state.tour}</h3>

          <div className='flex justify-between'>
            <p>Date</p>
            <p className='font-bold'>{format(new Date(state.date), 'PPP')}</p>
          </div>

          <div className='flex justify-between'>
            <p>Number of people</p>
            <p className='font-bold'>{state.numberOfPeople}</p>
          </div>

          <div className='h-[2px] bg-black' />

          <form onSubmit={onSubmit}>
            <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight'>
              Participant 1 Information
            </h3>

            <div className='mt-4 flex flex-col gap-2'>
              <Label htmlFor='name1'>Name</Label>
              <Input
                type='text'
                placeholder='First name'
                id='name1'
                className='w-full rounded-xl'
              />
              <Input type='text' placeholder='Last name' className='w-full rounded-xl' />
            </div>

            <div className='mt-4 flex flex-col gap-2'>
              <Label htmlFor='dob1'>Birthdate</Label>
              <Input
                type='text'
                placeholder='MM / DD / YYYY'
                id='dob1'
                className='w-full rounded-xl'
              />
            </div>

            <div className='mt-4 flex flex-col gap-2'>
              <Label htmlFor='num1'>Mobile Number</Label>
              <Input
                type='tel'
                placeholder='09xx xxx xxxx'
                id='num1'
                className='w-full rounded-xl'
              />
            </div>
            <div className='mt-4 flex flex-col gap-2'>
              <Label htmlFor='email1'>Email Address</Label>
              <Input
                type='email'
                placeholder='sample@email.com'
                id='email1'
                className='w-full rounded-xl'
              />
            </div>

            <h3 className='mt-4 scroll-m-20 text-2xl font-semibold tracking-tight'>
              Participant 2 Information
            </h3>

            <div className='mt-4 flex flex-col gap-2'>
              <Label htmlFor='name2'>Name</Label>
              <Input
                type='text'
                placeholder='First name'
                id='name2'
                className='w-full rounded-xl'
              />
              <Input type='text' placeholder='Last name' className='w-full rounded-xl' />
            </div>

            <div className='mt-4 flex flex-col gap-2'>
              <Label htmlFor='dob2'>Birthdate</Label>
              <Input
                type='text'
                placeholder='MM / DD / YYYY'
                id='dob2'
                className='w-full rounded-xl'
              />
            </div>

            <div className='mt-4 flex flex-col gap-2'>
              <Label htmlFor='num2'>Mobile Number</Label>
              <Input
                type='tel'
                placeholder='09xx xxx xxxx'
                id='num2'
                className='w-full rounded-xl'
              />
            </div>
            <div className='mt-4 flex flex-col gap-2'>
              <Label htmlFor='email2'>Email Address</Label>
              <Input
                type='email'
                placeholder='sample@email.com'
                id='email2'
                className='w-full rounded-xl'
              />
            </div>

            <div className='mt-8 flex items-center space-x-2'>
              <Checkbox
                id='terms'
                className='data-[state=checked]:border-red-500 data-[state=checked]:bg-red-500 data-[state=checked]:text-primary-foreground'
              />
              <label
                htmlFor='terms'
                className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
              >
                I have read and understood the Terms and Conditions and Privacy Policy.
              </label>
            </div>

            <Button
              type='submit'
              className='mt-4 w-full rounded-xl bg-red-500 text-white hover:bg-red-400'
            >
              Continue
            </Button>
          </form>
        </div>

        <div className='flex h-max w-96 flex-col gap-4 rounded-xl border border-slate-200 p-8 shadow-xl'>
          <h3 className='col-span-2 scroll-m-20 text-2xl font-semibold tracking-tight'>
            Price Details
          </h3>
          <div className='flex justify-between'>
            <p>Php 900 x {state.numberOfPeople}</p>
            <p>Php {(900 * state.numberOfPeople).toFixed(2)}</p>
          </div>
          <div className='flex justify-between'>
            <p>Other fees</p>
            <p>Php 100.00</p>
          </div>
          <div className='h-[2px] bg-black' />
          <div className='flex justify-between'>
            <h3 className='col-span-2 scroll-m-20 text-2xl font-semibold tracking-tight'>Total</h3>
            <h3 className='col-span-2 scroll-m-20 text-2xl font-bold tracking-tight text-red-500'>
              {(state.cost + 100).toFixed(2)}
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}
