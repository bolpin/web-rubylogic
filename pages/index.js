import { serverUrl } from '../config'
// import Meta from '../components/Meta.js'
// import ArticleList from '../components/ArticleList'
import homeStyles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <div className={homeStyles.home}> 
        {/* <ArticleList articles={articles} /> */}
        <h2>About</h2>
        <p>I create web applications and other custom software solutions for businesses.
        I&apos;ve helped companies large and small with the design and construction of fast, powerful web and database apps that are optimized for search engines and that can grow with your business.</p>
        <p>My technological interests tend towards platforms like Next.js and Rails that find a nice balance between performance, maintainability and flexibility.  Clean code matters! I&apos;ve found that businesses can realize a significant return on investment with the right technology stack and team.</p>
        <p>You won&apos;t get an invoice from me that does not represent <span>significant value</span> delivered.  If you somehow do, simply let me know and <span>don&apos;t pay the invoice</span>.  I&apos;ll gladly refer you to another consultancy that may be a better fit for your needs.</p>
        <h2>Contact</h2>
        <p>You can reach me at <b>bolpin@gmail dot com</b>.</p>
        <p>I live in Seattle, Washington.</p>
      </div>
    </>
  )
}

// export const getStaticProps = async () => {
//   const res = await fetch(`${serverUrl}/api/articles`)
//   const articles = await res.json()

//   return {
//     props: {
//       articles,
//     },
//   }
// }

