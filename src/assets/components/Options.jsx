export default function Options({options ,  answer  , dispatch,question}){
    const isAnswer = answer !== null;
    return <div className="options">
        {options.map((option , i)=><button key={option} className=
        {`btn btn-option
         ${answer === i ? "answer":""}
         ${isAnswer ?i === question.correctOption?"correct":"wrong":""}
         `}  
         onClick={()=> dispatch({type: "selectedAnswer", payload:i})} disabled ={isAnswer}>{option}</button>)}
    </div>

}