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
        Check my open source projects at:
      </section>
      
      <section className={utilStyles.center}>
        <ul className={utilStyles.list}>
            <li className={utilStyles.listItem}>
              <a href="https://github.com/alabvix" target="_blank">GitHub</a>
            </li>
            <li className={utilStyles.listItem}>
              <a href="https://gitlab.com/users/alabvix/groups" target="_blank">GitLab</a>
            </li>
          </ul>
      </section>

    </Layout>

  )
}
