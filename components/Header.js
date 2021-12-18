// import Image from 'next/image'
import headerStyles from '../styles/Header.module.css'

const Header = () => {
  return (
    <div className={headerStyles.header}>
      {/* <h1>Rubylogic</h1> */}
      <img alt='logo' src='/logo.png' width='284' height='67' />
    </div>
  )
}

export default Header
