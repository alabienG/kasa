import {Link} from "react-router-dom";


const Navigation = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/a-propos">A propos</Link></li>
            </ul>
        </nav>

    )

}
export default Navigation