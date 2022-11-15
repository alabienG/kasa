import {HashRouter, Route, Routes} from "react-router-dom";
import App from "../../App";
import Location from "../../pages/Location";
import Header from "../Header";
import Banner from "../Banner";
import APropos from "../../pages/APropos";
import ErrorPage from "../../pages/ErrorPage";

const MyRouter = () => {
    return (
        <>
            <HashRouter>
                <Header/>

                <Routes>
                    <Route exact path="/" element={<App/>}/>
                    <Route path="/location/:id" element={<Location/>}/>
                    <Route path="/a-propos" element={<APropos/>}/>
                    <Route path="/*" element={<ErrorPage/>}/>
                </Routes>
            </HashRouter>
        </>
    )
}

export default MyRouter