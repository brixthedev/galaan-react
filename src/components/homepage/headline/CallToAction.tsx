export default function CallToAction() {
  return (
    <div className='w-[60ch]'>
      <h1 className='text-4xl font-extrabold tracking-tight text-red-600 lg:text-5xl'>
        The quick, brown fox jumps over a lazy dog. DJs flock by when MTV.
      </h1>
      <p className='leading-7 [&:not(:first-child)]:mt-6'>
        The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog.
      </p>
      <button className='mt-8 w-full rounded-xl bg-blue-950 p-2 text-white transition-colors hover:bg-blue-900'>
        Get started
      </button>
    </div>
  )
}
