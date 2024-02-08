import { useQuestions } from "../contexts/QuizContext"

export default function StartScreen(){
const {questionLength , dispatch} = useQuestions()
return <div className="start">
    <h1> Welcome to React Quiz</h1>
    <h2>{questionLength} question  to test your mastery React</h2>
    <button onClick={()=> dispatch({type : 'start'})} className="btn btn-ui">Let's Start</button>
</div>
}