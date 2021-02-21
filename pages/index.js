import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import MainMenu from '../components/main-menu/main-menu'


export default function Home() {
  return (

    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <MainMenu className={utilStyles.center}></MainMenu>

      <section className={utilStyles.headingMd}>
        <p>Hi, I'm Andre, software developer with more than 15 years
          of experience. My main profissional areas are web development and back-end.
          In my free time I enjoy creating indie games, music and writing some 
          sci-fi/fantasy stuff.</p>
      </section>

      <br></br>
      
    </Layout>
  )
}
