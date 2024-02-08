import { useQuestions } from "../contexts/QuizContext"
import Options from "./Options"
export default function Questions(){
    const {questions, answer , dispatch , index} = useQuestions();
    const question = questions.at(index);
    return <>
        <h3>{question.question}</h3>
        <ul>
        <Options answer={answer} options={question.options} dispatch={dispatch} question={question}/>

        </ul>
    </>
}