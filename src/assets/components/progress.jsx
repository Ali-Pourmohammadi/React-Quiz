import { useQuestions } from "../contexts/QuizContext"

export default function Progress(){
    const {questionLength , index , answer  , point , totalPoint} = useQuestions();
    return <header className="progress">
        <progress max={questionLength} value={index +Number(answer!==null)}></progress>
        <p>Question <strong>{index +1}</strong>  / {questionLength} </p>
        <p><strong>{point}</strong>  / {totalPoint}</p>
    </header>
}