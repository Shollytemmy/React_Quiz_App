import React, { useContext } from "react"
import { QuizContext } from "../contexts/QuizContexts"
import { Answer } from "./Answer"
const Question = () => {
    const [quizState] = useContext(QuizContext)
    const curQuestion =quizState.questions[quizState.currentQuestionIndex]
    // console.log("curQuestion", curQuestion)
    return(
        <div>
            <div className="question">{curQuestion.question}</div>
            <div className="answers">
                {quizState.answers.map((answer) => (
                    <Answer answerText = {answer} />
                ))}
       

            </div>
        </div>
        
    )
}

export default Question