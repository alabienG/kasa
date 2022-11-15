import {Link} from "react-router-dom";

const Card = (props) => {
    const {appart} = props
    return (
        <Link to={"/location/" + appart.id}>
            <div className="card">
                <img className="card_img" src={appart.cover} alt={appart.title}/>

                <p className="titre_card">{appart.title}</p>
            </div>
        </Link>
    )
}
export default Card