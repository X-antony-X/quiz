import { useState , useEffect} from "react";

function Timer(){
    // const [timer,setTimer] = useState(1800);
    // const minutes = Math.floor(timer / 60);
    // const seconds = timer % 60;
    // function decreaseTime(prev){
    //     if(prev > 0){
    //         return prev - 1;
    //     }
    //     else {
    //         return 0;
    //     }
    // }
    // function startInterval(){
    //     const id = setInterval(() => setTimer(decreaseTime),1000);
    //     return id;
    // }
    // function stopInterval(id){
    //     clearInterval(id);
    // }
    // useEffect(function(){
    //     const id = startInterval(setTimer);
    //     return function(){
    //         stopInterval(id);
    //     }
    // },[]
// );
    const [time,setTime] = useState(1800);
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    
     function decreaseTime(prev){
        if (prev > 0){
            return prev - 1;
        }else {
            return 0;
        }
     }
     function startInterval(){
        const id = setInterval(() => setTime(decreaseTime),1000);
        return id;
     }
     function stopInterval(id){
        clearInterval(id);
     }
     useEffect(function (){
        const id = startInterval();//closures
        return function(){
            stopInterval(id);
        }
     }
    ,[])
    return (
        <div className="timer">
            {minutes.toString().padStart(2,"0")} : {seconds.toString().padStart(2,"0")}
        </div>
    )
}

export default Timer;