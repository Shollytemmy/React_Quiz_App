import React, { useContext } from "react"
import { QuizContext } from "../contexts/QuizContexts"
import { Answer } from "./Answer"
const Question = () => {
    const [quizState, dispatch] = useContext(QuizContext)
    const curQuestion =quizState.questions[quizState.currentQuestionIndex]
    // console.log("curQuestion", curQuestion)
     
    
    return(
        <div>
            <div className="question">{curQuestion.question}</div>
            <div className="answers">
                {quizState.answers.map((answer, index) => (
                 
                    
                    <Answer 
                    answerText = {answer}
                     key={index}
                     index = {index}
                     currentAnswer = {quizState.currentAnswer}
                     correctAnswer = {curQuestion.correctAnswer}
                      onSelect = {(answerText) => dispatch({type: "SELECT_ANSWER", payload: answerText})}
                       />
                ))}
       

            </div>
        </div>
        
    )
}

export default Question