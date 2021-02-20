import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import MainMenu from '../components/main-menu/main-menu'
import LinkBar from '../components/link-bar/link-bar'

export default function Home() {
  return (

    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <MainMenu></MainMenu>

      <section className={utilStyles.headingMd}>
        
      </section>

      <br></br>

      <ul className={utilStyles.list}>
          <li className={utilStyles.listItem}>
              <a href="https://docs.google.com/document/d/e/2PACX-1vS4LySBgSr9B24Cs6Sp8wDhAWnUK6NXy8xU68TxZPlggoQTjCdgh9PiNsiZGPivOBq6iOr4u92Nb8Ay/pub" target="_blank">Curriculum in English</a>
          </li>
          <li className={utilStyles.listItem}>
              <a href="https://gitlab.com/users/alabvix/groups" target="_blank">Curriculum em Português do Brasil</a>
          </li>
      </ul>

      <br></br>
      <hr></hr>

      <LinkBar></LinkBar>
      
    </Layout>
  )
}
