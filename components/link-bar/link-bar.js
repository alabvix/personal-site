import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons"; 
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"; 
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons"; 
import { faGithub } from "@fortawesome/free-brands-svg-icons"; 
import { faGitlab } from "@fortawesome/free-brands-svg-icons"; 
import { faSoundcloud } from "@fortawesome/free-brands-svg-icons"; 


export default function LinkBar(){
    return (
        <ul class="mainMenu">
            <li>
                <a href="https://www.linkedin.com/in/alabvix/" target="_blank" title="LinkedIn">
                    <FontAwesomeIcon icon={faLinkedin} size="2x"></FontAwesomeIcon></a>
            </li>
            <li>
                <a href="https://github.com/alabvix" target="_blank" title="Github">
                    <FontAwesomeIcon icon={faGithub} size="2x"></FontAwesomeIcon></a>
            </li>
            <li>
                <a href="https://gitlab.com/alabvix" target="_blank" title="Gitlab">
                    <FontAwesomeIcon icon={faGitlab} size="2x"></FontAwesomeIcon></a>
            </li>
            <li>
                <a href="https://soundcloud.com/viperunit/" target="_blank" title="Soundcloud">
                    <FontAwesomeIcon icon={faSoundcloud} size="2x"></FontAwesomeIcon></a>
            </li>
            <li>
                <a href="https://www.instagram.com/alab.home/" target="_blank" title="Instagram">
                    <FontAwesomeIcon icon={faInstagramSquare} size="2x"></FontAwesomeIcon></a>
            </li>
            <li>
                <a href="https://www.facebook.com/profile.php?id=100000021630957" target="_blank" title="Facebook">
                    <FontAwesomeIcon icon={faFacebookSquare} size="2x"></FontAwesomeIcon></a>
            </li>
            
        </ul>
    )
}