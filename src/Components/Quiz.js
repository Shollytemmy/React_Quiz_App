import React, {useReducer, useState} from "react";
import Question from "./Question";

const initialState = {
  currentQuestionIndex: 0,
  questions: []
}

const reducerFunc = (state, action) => {
 
  if(action.type === "NEXT_BUTTON"){
    return{...state, currentQuestionIndex: state.currentQuestionIndex + 1}
  }
}

function Quiz() {
  const [state, dispatch] = useReducer(reducerFunc, initialState)
  console.log('state', state);
  
  
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
