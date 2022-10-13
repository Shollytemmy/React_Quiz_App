import React from "react";
import ReactDOM from "react-dom";
import Quiz from './Components/Quiz'
import { QuizProvider } from "./contexts/QuizContexts";
import "./index.css"

ReactDOM.render(
  <React.StrictMode>
    <QuizProvider>
    <Quiz />

    </QuizProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
