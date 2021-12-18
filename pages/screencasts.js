import Meta from '../components/Meta'
import styles from '../styles/Screencasts.module.css'

const screencasts = () => {
  return (
    <div className={styles.container}>
      <Meta title='Screencasts' />
      <h1>Functional Composition with JavaScript</h1>
      <Meta title='About' />
      <iframe width="560" height="315" src="https://www.youtube.com/embed/QnpPVJpfH3M" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> 
    </div>
  )
}

export default screencasts