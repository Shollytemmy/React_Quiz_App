import React from 'react'

export const Answer = ({answerText, onSelect}) => {
  return (
    <div className='answer'>
        <div className="answer-letter">A</div>
        <div className="answer-text" onClick={() => onSelect(answerText)}>{answerText}</div>
        </div>
  )
}
