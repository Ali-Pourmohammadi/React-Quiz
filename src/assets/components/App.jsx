import Header from "./Header"
import Error from "./Error"
import Loader from "./Loader"
import StartScreen from "./StartScreen"
import {  useQuestions } from "../contexts/QuizContext"
import Questions from "./Qustions"
import Main from "./main"
import NextButton from "./NextButton"
import Progress from "./progress"
import FinshScreen from "./FinishScreen"
import Timer from "./Timer"

export default function App(){
    const {status} = useQuestions();

return <div className="app">
        <Header/>
        {status == "loading" && <Loader/>}
        {status == "error" && <Error/>}
        {status  == "ready" && <StartScreen/>}
        <Main>
        {status == "startQuiz" &&
        <>
        <Progress/>
         <Questions/>
        <Timer/>
        <NextButton/>
        </>}
         {status == "finish" && <FinshScreen/>} 
        </Main>
    </div>
}