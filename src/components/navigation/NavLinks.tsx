import { NavLink } from 'react-router-dom'
import { cn } from '~/utils/css'

const links = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path: '/explore',
    name: 'Explore',
  },
  {
    path: '/tours',
    name: 'Tours',
  },
  {
    path: '/contact',
    name: 'Contact Us',
  },
]

export default function NavLinks() {
  return (
    <div className='flex gap-4'>
      {links.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          className={({ isActive }) =>
            cn(
              'px-2 py-1 font-bold hover:text-red-500',
              isActive ? 'border-b-2 border-b-red-500 text-red-500' : 'text-blue-900',
            )
          }
        >
          {link.name}
        </NavLink>
      ))}
    </div>
  )
}
