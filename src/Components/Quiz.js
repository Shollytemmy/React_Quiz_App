import React, {useContext} from "react";
import { QuizContext } from "../contexts/QuizContexts";
import Question from "./Question";



function Quiz() {

  const [quizState, dispatch] = useContext(QuizContext)

  
  
  return( 
    <div className="quiz">
      {quizState.showResults && 
      <div className="results">
        <div className="congratulations">Congratulation</div>
        <div className="results-info">
          <div>You've completed the Quiz</div>
          <div>You scored {quizState.correctAnswersCount} out of {quizState.questions.length}</div>
        </div>
        <div className="next-button" onClick={() => dispatch({type: "RESTART"})}>ReStart</div>
      </div>
      }
   { !quizState.showResults &&
    <div>
    <div className="score">Question {quizState.currentQuestionIndex + 1}/{quizState.questions.length}</div>
    <Question />
    <div className="next-button" onClick={() => dispatch({type: 'NEXT_BUTTON'})}>Next Question</div>
  
    </div> 
    }
   
    </div>
    )
}

export default Quiz;
