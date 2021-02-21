import Link from 'next/link'

const menuClick = (item) => {
    console.log("clicou em " + item)
}

export default function MainMenu(){
    

    return (
            <ul className="mainMenu">
                <li>
                    <Link href="/" >
                        <a onClick={menuClick('home')}>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="curriculum" >
                        <a onClick={menuClick('curriculum')}>Curriculum Vitae</a>
                    </Link>
                </li>
                <li>
                    <Link href="personal">
                        <a>Personal Projects</a>
                    </Link>
                </li>
                <li>
                    <a href="mailto:alab.home@gmail.com">Contact me</a>
                </li>
            </ul>
        
    )
}