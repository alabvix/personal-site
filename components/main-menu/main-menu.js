import Link from 'next/link'

export default function MainMenu(){
    return (
        <center>
            <ul class="mainMenu">
                <li>
                    <Link href="/"><a>Home</a></Link>
                </li>
                <li>
                    <Link href="curriculum">Curriculum Vitae</Link>
                </li>
                <li>
                    <Link href="personal"><a>Personal Projects</a></Link>
                </li>
                <li>
                    <a href="mailto:alab.home@gmail.com">Contact me</a>
                </li>
            </ul>
        </center>
    )
}