import CallToAction from '~/components/homepage/headline/CallToAction'
import ImageSlider from '~/components/homepage/headline/ImageSlider'

export default function Headline() {
  return (
    <div className='flex items-center justify-evenly bg-gradient-to-r from-[#ebf4f5] to-[#b5c6e0] pb-24 pt-16'>
      <CallToAction />
      <ImageSlider />
    </div>
  )
}
