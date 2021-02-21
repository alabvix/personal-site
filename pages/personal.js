
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import MainMenu from '../components/main-menu/main-menu'
import Image from 'next/image'

export default function OpenSource() {
  return (

    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <MainMenu></MainMenu>
      <section className={utilStyles.center}>
        <div className={utilStyles.contentBox}>
          <ul className={utilStyles.list}>
              <li className={utilStyles.listItem}>
                  <a href="https://barretogames.itch.io/rgb-starfighter" target="_blank">
                    <Image
                      priority
                      unoptimized={true}
                      src="/images/rgb.jpg"
                      height={150}
                      width={150}
                    /> 
                  </a>
            </li>
          </ul>
        </div>
      </section>
    </Layout>
  )
}
