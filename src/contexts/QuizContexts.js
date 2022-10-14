import { createContext, useReducer } from "react";
import questions from '../data'
import { shuffleAnswers } from "../helpers";




const initialState = {
  currentQuestionIndex: 0,
  questions,
  showResults: false,
  answers: shuffleAnswers(questions[0]), 
  currentAnswer: ''
}

const reducerFunc = (state, action) => {
  console.log(state, action);
  switch(action.type){
    case "SELECT_ANSWER":{
      return {...state, currentAnswer: action.payload}
    }
    case "NEXT_BUTTON":{
      const showResults = state.currentQuestionIndex === state.questions.length - 1
    const currentQuestionIndex = showResults ? state.currentQuestionIndex : state.currentQuestionIndex + 1
    const answers = showResults ? [] : shuffleAnswers(state.questions[currentQuestionIndex])

    return{...state, 
      currentQuestionIndex,
        showResults,
        answers
    }

    }

    case "RESTART": {
       return initialState

    }
    default:{
      return state
    }
  }
 
 
}

export const QuizContext = createContext()

export const QuizProvider = ({children}) => {
      const value = useReducer(reducerFunc, initialState)
    return(
        <QuizContext.Provider value={value}>
            {children}
        </QuizContext.Provider>
    )
}