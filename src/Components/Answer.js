import React from 'react'

export const Answer = ({answerText, onSelect, index}) => {
  const lettersMapped = ['A', 'B', 'C', 'D']
  return (
    <div className='answer'>
        <div className="answer-letter">{lettersMapped[index]}</div>
        <div className="answer-text" onClick={() => onSelect(answerText)}>{answerText}</div>
        </div>
  )
}
