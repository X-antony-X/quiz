import Start from "./Start";
import { useLocation } from "react-router-dom";

function Result(){
    const location = useLocation();
    const { answer , total} = location.state || { answer : 0 ,total : 0};

    return(
        <div className="result">
            <div><img src="./moon.png" alt="" className="result-moon"/></div>
            <div className="result-text">your result is {answer} out of {total}</div>
            <div><i className="result-sun sun fa-solid fa-sun"></i></div>
        </div>
    );
}

export default Result;