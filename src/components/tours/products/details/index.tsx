import { zodResolver } from '@hookform/resolvers/zod'
import { format } from 'date-fns'
import * as Icon from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'
import { Button } from '~/components/ui/button'
import { Calendar } from '~/components/ui/calendar'
import { Form, FormControl, FormField, FormItem, FormMessage } from '~/components/ui/form'
import { Input } from '~/components/ui/input'
import { Popover, PopoverContent, PopoverTrigger } from '~/components/ui/popover'
import { cn } from '~/utils/css'

const FormSchema = z.object({
  date: z.date({
    required_error: 'A date is required.',
  }),
  numberOfPeople: z.number({
    required_error: 'Total number of persons is required.',
  }),
  tour: z.string(),
  cost: z.number(),
})

export default function ProductDetails() {
  const [cost, setCost] = useState(0)
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      tour: 'Beach Resort Day Pass',
    },
  })
  const navigate = useNavigate()
  const onSubmit = (data: z.infer<typeof FormSchema>) =>
    navigate('/tours/book', { relative: 'path', state: data })

  return (
    <div className='p-16'>
      <div className='grid h-[480px] grid-cols-2 grid-rows-2 gap-4'>
        <div
          className='row-span-2 overflow-hidden rounded-xl border border-slate-200 shadow-xl'
          style={{
            backgroundImage: 'url("/images/beach-2.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        <div
          className='overflow-hidden rounded-xl border border-slate-200 shadow-xl'
          style={{
            backgroundImage: 'url("/images/beach-1.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        <div
          className='overflow-hidden rounded-xl border border-slate-200 shadow-xl'
          style={{
            backgroundImage: 'url("/images/beach-3.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>

      <div className='mt-8 flex items-center justify-between'>
        <div>
          <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight text-blue-950 lg:text-5xl'>
            Beach Resort Day Pass
          </h1>
          <p className='leading-7'>Activity and Recreation</p>
        </div>
        <Icon.Heart className='cursor-pointer text-red-500 hover:fill-red-500' />
      </div>

      <div className='mt-8 grid grid-cols-3 gap-16'>
        <div className='col-span-2'>
          <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight'>Description</h3>
          <p className='leading-7 [&:not(:first-child)]:mt-6'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>

          <h3 className='mt-8 scroll-m-20 text-2xl font-semibold tracking-tight'>Inclusions</h3>
          <ul className='list-disc'>
            <li>Private vehicle</li>
            <li>Professional and local tour guide</li>
            <li>Snacks and refreshments</li>
          </ul>

          <h3 className='mt-8 scroll-m-20 text-2xl font-semibold tracking-tight'>
            Destinations and/or Attractions
          </h3>
          <ul className='list-disc'>
            <li>Beach resort</li>
            <li>Hotel</li>
            <li>Restaurant</li>
            <li>Bar</li>
          </ul>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='h-max rounded-xl border border-slate-200 p-8 shadow-xl'
          >
            <h1 className='mb-8 scroll-m-20 text-4xl font-extrabold tracking-tight text-blue-950 lg:text-5xl'>
              Php 900.00
            </h1>

            <div className='flex flex-col gap-2'>
              <FormField
                control={form.control}
                name='date'
                render={({ field }) => (
                  <FormItem className='flex flex-col'>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={'outline'}
                            size={'lg'}
                            className={cn(
                              'w-full justify-between rounded-xl px-4 text-left font-normal',
                              !field.value && 'text-muted-foreground',
                            )}
                          >
                            {field.value ? format(field.value, 'PPP') : <span>Select date</span>}
                            <Icon.Calendar className='ml-auto h-4 w-4 opacity-50' />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className='w-auto p-0' align='end'>
                        <Calendar
                          mode='single'
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) => date < new Date() || date < new Date('1900-01-01')}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='numberOfPeople'
                render={() => (
                  <FormItem className='flex flex-col'>
                    <Input
                      placeholder='Number of persons'
                      type='number'
                      onChange={(e) => {
                        const totalCost = Number(e.target.value) * 900
                        form.setValue('numberOfPeople', Number(e.target.value))
                        form.setValue('cost', Number(e.target.value) * 900)
                        setCost(totalCost)
                      }}
                      className='rounded-xl'
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className='mt-4 h-[2px] bg-slate-300' />
            <div className='mt-8 flex justify-between'>
              <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight'>Total</h3>
              <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight'>
                {cost.toFixed(2)}
              </h3>
            </div>
            <Button type='submit' className='mt-8 w-full rounded-xl bg-blue-950 hover:bg-blue-900'>
              Book now
            </Button>
          </form>
        </Form>
      </div>
    </div>
  )
}
