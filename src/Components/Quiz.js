import React, {useContext} from "react";
import { QuizContext } from "../contexts/QuizContexts";
import Question from "./Question";



function Quiz() {

  const [quizState, dispatch] = useContext(QuizContext)
  console.log('QuizState', quizState);
  
  
  return( 
    <div className="quiz">
   <div>
    <div className="score">Question 1/18</div>
    <Question />
    <div className="next-button" onClick={() => dispatch({type: 'NEXT_BUTTON'})}>Next Question</div>
  
    </div> 
   
    </div>
    )
}

export default Quiz;
