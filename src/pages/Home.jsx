import { Link } from "react-router-dom";
import Header from "../components/Header";
import "../components/Header.css";

function Home(){
    return (
        <div className="container">
            <img src="./BG-img.png" alt="" className="home-img"/>
            <div className="home-div">
                <Header/>
                <ul className="home-ul-font">
                    <li><i className="star fa-solid fa-star"></i></li>
                    <li><i className="meteor fa-solid fa-meteor"></i></li>
                    <li><i className="earth fa-solid fa-earth-americas"></i></li>
                    <li><i className="sun fa-solid fa-sun"></i></li>
                </ul>
                <p className="home-p">Start your journey across the stars</p>
                <Link className="start" to='/Start'>Start Now</Link>
            </div>
        </div>
    )
}

export default Home;