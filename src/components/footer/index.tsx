export default function Footer() {
  return (
    <div className='flex justify-between bg-blue-950 p-16 text-white'>
      <div>
        <p className='mb-2 text-lg font-bold'>About Galaan</p>
        <p>About Us</p>
        <p>Galaan Blog</p>
        <p>Careers</p>
      </div>
      <div>
        <p className='mb-2 text-lg font-bold'>Head Office</p>
        <p>Qymera Building, 1226, 6807 Ayala</p>
        <p>Ave, Makati, 1227 Metro Manila,</p>
        <p>Philippines</p>
      </div>
      <div>
        <p className='mb-2 text-lg font-bold'>Customer Support</p>
        <p>customer_service@galaan.com</p>
        <p>09228227014</p>
        <p>8 810-7888</p>
      </div>
      <div>
        <p className='mb-2 text-lg font-bold'>Subscribe to get exclusive offers and discounts!</p>
        <p>By clicking subscribe, you agree to our</p>
        <p>Terms and Conditions and Privacy Policy.</p>
        <div className='mt-4 flex justify-between gap-4'>
          <input
            type='text'
            placeholder='Enter your email address'
            className='w-full rounded-xl px-4 py-2'
          />
          <button className='rounded-xl bg-red-500 p-2 px-4 hover:bg-red-400'>Subscribe</button>
        </div>
      </div>
    </div>
  )
}
