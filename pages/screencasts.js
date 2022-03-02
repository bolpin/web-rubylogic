import Meta from '../components/Meta'
import styles from '../styles/Screencasts.module.css'

const screencasts = () => {
  return (
    <div className={styles.container}>
      <Meta title='Screencasts' />
      <h1>Functional Composition</h1>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/QnpPVJpfH3M" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> 
      {/* <p>
        A console clock for javascript, written in a declarative
        functional style with piped-together functions.
      </p> */}
      <p>
        Code (with some enhancements beyond those covered above) can be found{' '}
        <a href='https://github.com/bolpin/functional-programming/blob/master/console-clock.js'>here</a>
        {' '}and{' '}<a href='https://github.com/bolpin/functional-programming/blob/master/cities.json'>here.</a>
      </p>

    </div>
  )
}

export default screencasts