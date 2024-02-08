import { useQuestions } from "../contexts/QuizContext";

export default function NextButton(){
    const {answer , index , dispatch , questionLength} = useQuestions();
    if(answer === null) return "";
    return<>
    {index !==questionLength -1 ? <button className="btn  btn-ui" onClick={()=>{dispatch({type : "nextQuestion"})}}>Next</button>:<button className="btn btn-ui" onClick={()=>dispatch({type:"endOfQuiz"})}>Finsh Quiz</button> }
    </>
}