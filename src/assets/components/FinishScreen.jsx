import { useQuestions } from "../contexts/QuizContext"

export default function FinshScreen(){
    const {point , totalPoint , dispatch} = useQuestions();
    return <div className="result">
    <p> end of your Mastery Quiz</p>
    <p> Your Point  : {point} / {totalPoint} </p>
    <button className="btn btn-ui" onClick={()=>{dispatch({type : "reset"})}}>Reset Quiz</button>
    </div>
}