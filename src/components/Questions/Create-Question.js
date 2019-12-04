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
        props.alert({ heading: 'Success', message: 'Great question!', variant: 'success' })
        // props.history.push(`/questions/${response.data.question._id}`)
      })
      .catch(console.error)
  }

  return (
    <QuestionForm
      question={question}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      cancelPath='/'
    />
  )
}

export default withRouter(CreateQuestion)
