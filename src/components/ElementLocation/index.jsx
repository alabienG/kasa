import {useState} from "react";

const ElementLocation = (props) => {

    const {titre, items, equipement} = props
    const [up, setUp] = useState(true)

    const handleClick = () => {
        setUp(!up)
    }

    const statut = up ? <i className="fa-solid fa-chevron-up" onClick={() => handleClick()}></i> :
        <i className="fa-solid fa-chevron-down" onClick={() => handleClick()}></i>

    const contenu = up ? <div className="element-content">
        {equipement ?
            items.map((element, index) => (
                <p className="element_equipement" key={index}> {element}</p>
            ))
            : items
        }
    </div> : ""
    return (
        <div className="element">
            <div className="element_title">
                <span>{titre}</span>
                {statut}
            </div>

            {contenu}

        </div>
    )
}

export default ElementLocation