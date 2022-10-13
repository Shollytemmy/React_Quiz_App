import { createContext, useReducer } from "react";
import questions from '../data'




const initialState = {
  currentQuestionIndex: 0,
  questions,
  showResults: false
}

const reducerFunc = (state, action) => {
 
  if(action.type === "NEXT_BUTTON"){
    const showResults = state.currentQuestionIndex === state.questions.length - 1
    const currentQuestionIndex = showResults ? state.currentQuestionIndex : state.currentQuestionIndex + 1

    return{...state, currentQuestionIndex,
        showResults 
    }
    
  }
  return {...state}
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