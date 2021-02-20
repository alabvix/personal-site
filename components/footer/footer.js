export default function Footer(){
    return (
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
                <Link href="personal"><a>Contact me</a></Link>
            </li>
        </ul>
    )
}