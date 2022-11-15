import Banner from "../../components/Banner";
import home from "../../assets/home.jpg"
import {Link} from "react-router-dom";

const ErrorPage = () => {
    return (
        <>
            <Banner img={home}/>
            <div className="container">
                <span className="error-msg">404</span>
                <p className="error-msg">Page not found</p>

                <Link className="" to="/">Retour à la page d'accueil</Link>
            </div>
        </>
    )
}

export default ErrorPage