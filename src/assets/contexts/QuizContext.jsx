import { createContext , useEffect, useContext, useReducer} from "react";

const  QuizContext = createContext();
const question_per_second = 30
const initalState = {status : "loading"  ,  questions:[] ,  index : 0 , answer : null , point: 0  , totalTime :0 };

function reducer(state , action){
switch(action.type){
case "dataRecevid": return{...state , status : 'ready', questions : action.payload };
case "dataFailed": return{...state , status:"error"};
case "start" : return {...state  , status : "startQuiz"  , totalTime : state.questions.length * question_per_second};
case "selectedAnswer": const question = state.questions.at(state.index);
return{...state   , answer : action.payload , point : action.payload ==question.correctOption ? state.point + question.points: state.point };
case "nextQuestion" : return {...state , index : state.index + 1 , answer : null};
case "endOfQuiz" : return {...state , status :"finish"}
case "timer" : if(state.totalTime ==0) return{...state , status : 'finish'};
return {...state , totalTime : state.totalTime - 1};
case "reset" : return({...initalState  ,  status : "ready" , questions : state.questionso})
default:throw new Error("unknown action")
    }
    
}
export default function QuizProvider({children}){
    const  [{status , questions , index , answer , point , totalTime}, dispatch]= useReducer(reducer , initalState);

    const questionLength  = questions.length;
    const totalPoint = questions.reduce((acc,curr)=>{
        return acc += curr.points
    },0)
    useEffect(function(){

            async  function getQuestions(){
                try{
                const res = await fetch('http://localhost:9000/questions');
                const data =  await res.json();
                dispatch({type:"dataRecevid" , payload:data});
                
                }catch(err){dispatch({type:"dataFailed"})} 
        }
        getQuestions();
    },[dispatch])

    return  <QuizContext.Provider value={{
        status,
        questions,
        index,
        answer,
        point,
        totalTime,
        questionLength,
        totalPoint,
        dispatch
    }}>
        {children}
    </QuizContext.Provider>
}

function useQuestions(){
const context = useContext(QuizContext);
return context;

}
// eslint-disable-next-line react-refresh/only-export-components
export{QuizProvider,useQuestions}