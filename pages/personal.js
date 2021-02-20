import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import MainMenu from '../components/main-menu/main-menu'
import LinkBar from '../components/link-bar/link-bar'

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

      <br></br>
      <hr></hr>

      <LinkBar></LinkBar>
      
    </Layout>

  )
}
