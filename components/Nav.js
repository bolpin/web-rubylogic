import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/testimonials'>Testimonials</Link>
        </li>
        <li>
          <Link href='/clients'>Clients</Link>
        </li>
        <li>
          <Link href='/screencasts'>Screencasts</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
