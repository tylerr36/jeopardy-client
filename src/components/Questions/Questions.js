import React, { useEffect, useState } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
// import { Link } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup'

const Questions = props => {
  // this initializes the state
  const [questions, setQuestions] = useState([])

  // make an API call
  useEffect(() => {
    console.log(props)
    axios({
      url:`${apiUrl}/questions`,
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${props.user.token}`
      }
    })
      .then(response => {
        // to make our questions appear in a mapped list, we create the "const questionsJsx" file a few lines down
        setQuestions(response.data.questions)
      })
    // calling the alert here from the app.js file
    // alert function in the app.js file is expecting a [heading, message, variant], so we have to add those in brackets below
      .then(() => props.alert({ heading: 'Success', message: 'You got questions', variant: 'success' }))
      .catch(console.error)
  }, [])

  const questionsJsx = questions.map(question => (
    <ListGroup.Item key={question._id} as={'a'} href={`#/questions/${question._id}`}>
      {question.question}
    </ListGroup.Item>
  ))

  return (
    <div>
      <h1>Questions</h1>
      <ListGroup>
        {questionsJsx}
      </ListGroup>
    </div>
  )
}

export default Questions
