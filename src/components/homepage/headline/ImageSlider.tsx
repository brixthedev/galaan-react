import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function ImageSlider() {
  const [index, setIndex] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((currentIndex) => {
        if (currentIndex === 5) return 1
        return currentIndex + 1
      })
    }, 5000)
    return () => clearInterval(interval)
  })

  return (
    <div className='relative h-[432px] w-[768px] overflow-hidden rounded-xl'>
      <AnimatePresence>
        <motion.img
          key={index}
          initial={{ x: 768 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
          exit={{ x: -768 }}
          src={`/images/slider-${index}.jpg`}
          alt='A tourist spot in the Philippines'
          className='absolute h-full w-full object-cover object-center'
        />
      </AnimatePresence>
    </div>
  )
}
