import Link from 'next/link'
import styles from './main-menu.module.css'

export default function MainMenu(){
    return (
        <ul className={styles.mainMenu}>
            <li>
                <Link href="/"><a>Home</a></Link>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/alabvix/" target="_blank">LinkedIn</a>
            </li>
            <li>
                <Link href="opensource"><a>Open source</a></Link>
            </li>
            <li>
                <Link href="personal"><a>Personal Projects</a></Link>
            </li>
        </ul>
    )
}