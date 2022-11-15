import logo from './logo.svg';
import './App.css';
import {apparts} from "./data/apparts";
import Card from "./components/Card";
import Banner from "./components/Banner";
import home from "./assets/home.jpg"

function App() {

    const data = apparts
    return (
        <div>
            <Banner img={home} altTxt="image bannière" title="Chez vous, partout et ailleurs"/>
            <div className="cards">
                {data.map(element => (
                    <Card appart={element} key={element.id}/>
                ))}
            </div>
        </div>
    );
}

export default App;
