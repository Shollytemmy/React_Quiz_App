import React from 'react'

export const Answer = ({answerText, onSelect, index, currentAnswer, correctAnswer}) => {
  const lettersMapping = ['A', 'B', 'C', 'D']
  const isCorrect = currentAnswer && answerText === correctAnswer
  const isWrong = currentAnswer === answerText && currentAnswer !==correctAnswer

  const correctAnswerClass = isCorrect ? 'correct-answer': ''
  const wrongAnswerClass = isWrong ? 'wrong-answer': ''
  const disableClass = currentAnswer ? 'disabled-answer' : ''
  return (
    <div className={`answer ${correctAnswerClass} ${wrongAnswerClass} ${disableClass}`}>
        <div className="answer-letter">{lettersMapping[index]}</div>
        <div className="answer-text" onClick={() => onSelect(answerText)}>{answerText}</div>
        </div>
  )
}
