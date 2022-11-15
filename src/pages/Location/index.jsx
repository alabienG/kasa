import {useParams} from "react-router-dom";
import {apparts} from "../../data/apparts";
import Tag from "../../components/Tag";
import ElementLocation from "../../components/ElementLocation";
import Caroussel from "../../components/Caroussel";

const Location = () => {
    const params = useParams()
    const datas = apparts
    const appart = datas.find(element => element.id === params.id)
    const vide = 5 - appart.rating
    const plein = 5 - vide
    const startPlein = []

    for (let i = 0; i < (5 - vide); i++) {
        startPlein[i] = "blue"
    }

    const startVide = []
    for (let i = 0; i < (5 - appart.rating); i++) {
        startVide[i] = "blue"
    }
    return (
        <>
            <Caroussel images={appart.pictures}/>

            <div className="location_title">
                <div>
                    <p className="title"> {appart.title}</p>
                    <p className="location">{appart.location}</p>
                </div>


                <div className="user">
                    <span>{appart.host.name}</span>
                    <img src={appart.host.picture} className="user_img"/>
                </div>
            </div>

            <div className="tag-stars">
                <div className="tags">
                    {appart.tags.map((element, index) => (
                        <Tag key={index} tag={element}/>
                    ))}
                </div>

                <div className="ratings">
                    {startPlein.map((element, index) => (
                        <i className="fa-solid fa-star blue" key={index}></i>
                    ))}
                    {startVide.map((element, index) => (
                        <i className="fa-solid fa-star" key={index}></i>
                    ))}
                </div>
            </div>

            <div className="elements">
                <ElementLocation titre="Description" items={appart.description} equipement={false}/>
                <ElementLocation titre="Equipements" items={appart.equipments} equipement={true}/>
            </div>
        </>
    )
}
export default Location;