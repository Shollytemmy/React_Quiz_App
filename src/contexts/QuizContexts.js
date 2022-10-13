import { createContext, useReducer } from "react";
import questions from '../data'




const initialState = {
  currentQuestionIndex: 0,
  questions
}

const reducerFunc = (state, action) => {
 
  if(action.type === "NEXT_BUTTON"){
    return{...state, currentQuestionIndex: state.currentQuestionIndex + 1}
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