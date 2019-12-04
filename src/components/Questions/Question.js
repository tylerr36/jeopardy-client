// import React, { useState, useEffect } from 'react'
// import { Link, Redirect } from 'react-router-dom'
// import axios from 'axios'
//
// import apiUrl from '../../apiConfig'
// import Layout from '../shared/Layout'
//
// const Question = props => {
//   const [question, setQuestion] = useState(null)
//   const [deleted, setDeleted] = useState(false)
//
//   useEffect(() => {
//     axios(`${apiUrl}/questions/${props.match.params.id}`)
//       .then(res => setQuestion(res.data.question))
//       .catch(console.error)
//   }, [])
//
//   const destroy = () => {
//     axios({
//       url: `${apiUrl}/questions/${props.match.params.id}`,
//       method: 'DELETE'
//     })
//       .then(() => setDeleted(true))
//       .catch(console.error)
//   }
//
//   if (!question) {
//     return <p>Loading...</p>
//   }
//
//   if (deleted) {
//     return <Redirect to={
//       { pathname: '/', state: { msg: 'Question succesfully deleted!' } }
//     } />
//   }
//
//   return (
//     <Layout>
//       <h4>{question.question}</h4>
//       <p>Question: {question.question}</p>
//       <p>Answer: {question.answer}</p>
//       <button onClick={destroy}>Delete Question</button>
//       <Link to={`/questions/${props.match.params.id}/edit`}>
//         <button>Edit</button>
//       </Link>
//       <Link to="/questions">Back to all questions</Link>
//     </Layout>
//   )
// }
//
// export default Question







import React, { useEffect, useState } from 'react'
// import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import apiUrl from '../../apiConfig'
import Button from 'react-bootstrap/Button'
import QuestionForm from './QuestionForm'

const Question = props => {
  const [question, setQuestion] = useState(null)
  const [questionEdit, setQuestionEdit] = useState({question: '', answer: ''})
  const userId = props.user._id

  useEffect(() => {
    axios({
      url: `${apiUrl}/questions/${props.match.params.id}`,
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${props.user.token}`
      }
    })
      .then(res => setQuestion(res.data.question))
      .catch(console.error)
  }, [])

  const handleDelete = event => {
    axios({
      url: `${apiUrl}/questions/${props.match.params.id}`,
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${props.user.token}`
      }
    })
      .then(() => {
        props.alert({ heading: 'Success', message: 'You deleted a question', variant: 'warning' })
        props.history.push('/questions')
      })
      .catch(() => {
        props.alert({ heading: 'Uh oh', message: 'Something went wrong', variant: 'danger' })
      })
  }

  const handleUpdate = event => {
    event.preventDefault()
    console.log(props.match)
    axios({
      url: `${apiUrl}/questions/${props.match.params.id}`,
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${props.user.token}`
      },
      data: { questionEdit }
    })
      .then(() => {
        props.alert({ heading: 'Success', message: 'Update your question!', variant: 'warning' })
        props.history.push(`/questions/${props.match.params.id}`)
      })
      .catch(() => {
        props.alert({ heading: 'Uh oh', message: 'Something went wrong', variant: 'danger' })
      })
  }
  const handleChange = event => {
    event.persist()
    setQuestionEdit({ ...questionEdit, [event.target.name]: event.target.value })
  }

  if (!question) {
    return <p>Loading...</p>
  }

  return (
    <div>
      {/* if question is true, then output the question, otherwise put a paragraph saying "Loading" */}
      <h2>{question.question}</h2>
      <h2>{question.answer}</h2>
      {/* Only show a delete button if the question belongs to the user/user's ID */}
      {userId === question.owner && <Button onClick ={handleUpdate} variant={'danger'}>Update</Button>}
      {userId === question.owner && <Button onClick ={handleDelete} variant={'danger'}>Delete</Button>}


      {/* if question is true, then output the question, otherwise put a paragraph saying "Loading" */}
      {/*<h2>{question.question}</h2>
      <h2>{question.answer}</h2>*/}
      {/* Only show a delete button if the question belongs to the user/user's ID */}
      <QuestionForm
        question={questionEdit}
        handleChange={handleChange}
        handleSubmit={handleUpdate}
        cancelPath='/'
      />
    </div>
  )
}

export default withRouter(Question)
