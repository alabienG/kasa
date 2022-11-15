import Banner from "../../components/Banner";
import home from "../../assets/home.jpg";
import ElementLocation from "../../components/ElementLocation";

const APropos = () => {
    return (
        <>
            <Banner img={home} altTxt="image bannière"/>
            <ElementLocation titre="Fiabilité" items="lorem ipsum" equipement={false}/>
            <ElementLocation titre="Respect" items="lorem ipsum" equipement={false}/>
            <ElementLocation titre="Service" items="lorem ipsum" equipement={false}/>
            <ElementLocation titre="Responsabilité" items="lorem ipsum" equipement={false}/>
        </>
    )
}
export default APropos