import Meta from '../components/Meta.js'
// import img from 'next/image'
import Link from 'next/link'
import clientsStyle from '../styles/Clients.module.css'

const clients = () => {
  return (
    <div className={clientsStyle.container}>
      <Meta title='Clients' />
      <div>Trusted by</div>
      <div>
        <Link href="http://www.driveshop.com" passHref>
          <img alt='driveshop-logo' src='/driveshop-logo.png' width='222' height='64' />
        </Link>
      </div>
      <div>
        <Link href="http://www.gettyimages.com" passHref>
          <img alt='getty-logo' src='/getty-logo.png' width='182' height='36' />
        </Link>
      </div>
      <div>
        <Link href="http://iotaink.com" passHref>
          <img alt='iota-ink-logo' src='/iota-ink-logo.png' width='174' height='63' />
        </Link>
      </div>
      <div>
        <Link href="http://liftingsea.com">Lifting Sea LLC</Link>
      </div>
      <div>
        <Link href="http://www.rossstrategic.com" passHref>
          <img alt='ross-strategic-logo' src='/ross-strategic-logo.png' width='167' height='72' />
        </Link>
      </div>
      <div>
        <Link href="http://www.shainin.com" passHref>
          <img alt='shainin-logo' src='/shainin-logo.jpeg' width='178' height='66' />
        </Link>
      </div>
      <div>
        <Link href="http://www.wavepoetry.com" passHref>
          <img alt='wave-books-logo' src='/wave-books-logo.png' width='295' height='43' />
        </Link>
      </div>
      <div>
        <Link href="http://www.windermere.com" passHref>
          <img alt='windermere-logo' src='/windermere-logo.png' width='218' height='83' />
        </Link>
      </div>
    </div>
  )
}

export default clients
