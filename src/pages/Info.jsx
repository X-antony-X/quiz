import { Link } from "react-router-dom";
import Header from "../components/Header";
import "../components/Header.css";
import './Home.css';

function Info(){
    return (
        <div className="container">
            <img src="./BG-img.png" alt="" className="home-img"/>
            <div className="home-div">
                <Header/>
                <ul className="ul-line">
                    <li className="line">This is a quiz about the solar system.</li>
                    <li className="line">The quiz duration is 30 minutes.</li>
                    <li className="line">This is the solar system.</li>
                </ul>
                <img src="./solar-sys.png" alt="" className="info-img"/>
            </div>
        </div>
    );
}

export default Info;