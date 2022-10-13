import React, { useContext } from "react"
import { QuizContext } from "../contexts/QuizContexts"
import { Answer } from "./Answer"
const Question = () => {
    const [quizState] = useContext(QuizContext)
    const curIndex =quizState.questions[quizState.currentQuestionIndex]
    return(
        <div>
            <div className="question">{curIndex.question}</div>
            <div className="answers">
            <Answer />
            <Answer />
            <Answer />
            <Answer />

            </div>
        </div>
        
    )
}

export default Question