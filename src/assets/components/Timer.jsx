import { useEffect } from "react"
import { useQuestions } from "../contexts/QuizContext";

export default function Timer(){
    const {dispatch , totalTime} = useQuestions();
    const min = Math.floor(totalTime / 60);
    const  sec = totalTime % 60;
    useEffect(function(){
        const id = setInterval(()=>{
            dispatch({type:"timer"})
        } , 1000)
        return ()=>{clearInterval(id)}
    },[dispatch])
return <div className="timer">
    {min <10 && 0}{min}:
      { sec < 10 && 0}{sec}
</div>    
}