import { useState } from "react";
import Timer from "../components/Timer";
import Data from "../components/data";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Start(){
    const [data,setData] = useState(Data);
    const [index,setIndex] = useState(0);
    const [answer,setAnswer] = useState(0);
    const [selectedAnswers,setSelectedAnswers] = useState(Array(Data.length).fill(""))
    const navigate = useNavigate();
    function next(){
        if (index < data.length - 1){
            setIndex(index+1);
        }
    }
    function back(){
        if (index > 0){
            setIndex(index-1);        
    }}
    function handleAnswer(e){
        let ans = e.target.value;
        const updatedAnswers = [...selectedAnswers];
        updatedAnswers[index] = ans;
        setSelectedAnswers(updatedAnswers);
        let correctCount = 0;
        for (let i = 0; i < data.length; i++) {
            if (updatedAnswers[i] === data[i].ans) {
                correctCount++;
            }
    }
    setAnswer(correctCount);
    //     if (ans === data[index].ans){
    //         setAnswer(answer+1);
    //     }
    }
    function finishQuiz(){
        navigate("/Result",{state:{ answer , total : data.length}})
    }
    console.log(answer)
    return(
        <div>
            <div className='timer-box'>
            <img src="./sun.png" alt="" className="sun-img"/>
            <Timer/>
            <img src="./moon.png" alt="" className="moon-img"/>
            </div>
            <div className="quiz">
                <p className="question">{data[index].q} <img src="img.png" alt="" className="img1"/></p>
                <ul className="answers">
                    <li className="ans-li">
                        <input type="radio" id="ans1" name="answer" onChange={handleAnswer} value={data[index].a} checked={selectedAnswers[index] === data[index].a}/>
                        <label htmlFor="ans1">{data[index].a}</label>
                    </li>
                    <li className="ans-li">
                        <input type="radio" id="ans2" name="answer" onChange={handleAnswer} value={data[index].b} checked={selectedAnswers[index] === data[index].b}/>
                        <label htmlFor="ans2">{data[index].b}</label>
                    </li>
                    <li className="ans-li">
                        <input type="radio" id="ans3" name="answer" onChange={handleAnswer} value={data[index].c} checked={selectedAnswers[index] === data[index].c}/>
                        <label htmlFor="ans3">{data[index].c}</label>
                    </li>
                    <li className="ans-li">
                        <input type="radio" id="ans4" name="answer" onChange={handleAnswer} value={data[index].d} checked={selectedAnswers[index] === data[index].d}/>
                        <label htmlFor="ans4">{data[index].d}</label>
                    </li>
                </ul>
                <ul className="btns">
                    <button className="back btn" onClick={back}>Back</button>
                    <img src="img8.png" alt="" className="img8"/>
                    <button className="next btn" onClick={next}>Next</button>
                </ul>
                <ul className="finish-btn">
                    <button className="finish btn" onClick={finishQuiz}>Finish</button>
                </ul>
            </div>
            <img src="img2.png" alt="" className="img2"/>
            <img src="img3.png" alt="" className="img3"/>
            <img src="img5.png" alt="" className="img5"/>
            <img src="img4.png" alt="" className="img4"/>
            <img src="img6.png" alt="" className="img6"/>
            <img src="img7.png" alt="" className="img7"/>
            <img src="img9.png" alt="" className="img9"/>
        </div>
    );
}

export default Start;

//supabase 
//firebase