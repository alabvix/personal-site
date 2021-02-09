import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import MainMenu from '../components/main-menu/main-menu'

export default function OpenSource() {
  return (

    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <MainMenu></MainMenu>

      <section className={utilStyles.center}>
        Comming soon
      </section>
      
    </Layout>

  )
}
