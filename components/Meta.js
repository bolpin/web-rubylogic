import Head from 'next/head'

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <link rel='icon' href='/favicon.ico' />
      <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
  title: 'Rubylogic',
  keywords: 'web development, programming, react, ruby on rails, ruby, nextjs, es6, consulting, contracting, custom software',
  description: 'I build custom software for the web and help businesses thrive with technology',
}

export default Meta
