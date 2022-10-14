import React, { useContext } from "react"
import { QuizContext } from "../contexts/QuizContexts"
import { Answer } from "./Answer"
const Question = () => {
    const [quizState, dispatch] = useContext(QuizContext)
    const curQuestion =quizState.questions[quizState.currentQuestionIndex]
    // console.log("curQuestion", curQuestion)
       const index = Math.random().toString(36).substring(2)
       console.log('index', index)
    
    return(
        <div>
            <div className="question">{curQuestion.question}</div>
            <div className="answers">
                {quizState.answers.map((answer, idx) => (
                 
                    
                    <Answer answerText = {answer} key={idx} onSelect = {(answerText) => dispatch({type: "SELECT_ANSWER", payload: answerText})} />
                ))}
       

            </div>
        </div>
        
    )
}

export default Question