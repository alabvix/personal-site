import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import MainMenu from '../components/main-menu/main-menu'
import Image from 'next/image'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <MainMenu></MainMenu>
      <section className={utilStyles.center}>
          <div  className={utilStyles.contentBox}>
            <ul className={utilStyles.list}>
                <li className={utilStyles.listItem}>
                      <a href="https://drive.google.com/file/d/1VZlLL5UoHMbbz55mVnJG-c7Zmwja-Eo6/view?usp=sharing" target="_blank">
                        <Image
                          priority
                          unoptimized={true}
                          src="/images/pdffile.png"
                          height={120}
                          width={94}
                        /> 
                      </a>
                </li>
            </ul>
            Curriculum in English PDF file
          </div>
      </section>
    </Layout>
  )
}
