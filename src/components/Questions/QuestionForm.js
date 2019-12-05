import React from 'react'
import { Link } from 'react-router-dom'

const QuestionForm = ({ question, handleSubmit, handleChange, cancelPath }) => (
  <form onSubmit={handleSubmit}>
    <label htmlFor="question">Question</label>
    <input
      id="question"
      placeholder="Enter/update question!"
      value={question.question}
      name="question"
      onChange={handleChange}
    />

    <label htmlFor="answer">Answer</label>
    <input
      id="answer"
      placeholder="Enter/update answer!"
      value={question.answer}
      name="answer"
      onChange={handleChange}
    />

    <button type="submit">Submit</button>
    <Link to={cancelPath}>
      <button type="button">Cancel</button>
    </Link>
  </form>
)

export default QuestionForm
