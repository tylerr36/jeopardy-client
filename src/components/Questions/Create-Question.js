import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import QuestionForm from './QuestionForm'

const CreateQuestion = props => {
  const [question, setQuestion] = useState({ question: '', answer: '' })

  const handleChange = event => {
    event.persist()
    setQuestion({ ...question, [event.target.name]: event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    axios({
      url: `${apiUrl}/questions`,
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${props.user.token}`
      },
      data: { question }
    })
      .then(response => {
        props.alert({ heading: 'Great question!', message: 'Create another!', variant: 'success' })
        props.history.push(`/questions`)
      })
      .catch(console.error)
  }

  return (
    <div>
      <h1>Create a question!</h1>
    <QuestionForm
      question={question}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      cancelPath='/'
    />
    </div>
  )
}

export default withRouter(CreateQuestion)
