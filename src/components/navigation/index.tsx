import GalaanLogo from '~/components/navigation/GalaanLogo'
import NavLinks from '~/components/navigation/NavLinks'
import NavMenu from '~/components/navigation/NavMenu'

export default function Navbar() {
  return (
    <div className='sticky top-0 z-50 flex w-full items-center justify-between bg-white p-4 shadow-xl'>
      <GalaanLogo />
      <div className='flex items-center gap-8'>
        <NavLinks />
        <NavMenu />
      </div>
    </div>
  )
}
