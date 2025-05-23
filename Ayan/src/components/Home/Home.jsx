import { useTranslation } from "react-i18next";
import './Home.css'
import About from "../About/About";
import Services from "../Services/Services";
import Portoflio from "../Portoflio/Portoflio";
import Header from "../Header/Header";
import Contacs from "../Contacs/Contacs";

const Home = ({ about, services, portfolio, contact}) => {
    const { t, i18n } = useTranslation();

    const homeitems = t("HomeText", { returnObjects: true });


    return (
        <>
            <div className="app">
                <div className="home" >
                    <img className="logoimg" src="/logo.png" alt="" />
                    <h2 className="hometext first">{homeitems[0]}</h2>
                    <h3 className="hometext">{homeitems[1]}</h3>
                    <h3 className="hometext">{homeitems[2]}</h3>
                </div>
                <About about={about} />
                <Services services={services} />
                <Portoflio portfolio={portfolio} />
                <Contacs contacts={contact}/>
            </div>
        </>
    )
}

export default Home