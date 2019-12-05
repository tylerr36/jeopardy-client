// // import React, { Component } from 'react'
// // import { Redirect } from 'react-router-dom'
// // import axios from 'axios'
// // import apiUrl from '../apiConfig.js'
// // import Layout from '../shared/Layout.js'
// // import QuestionForm from './QuestionForm.js'
// //
// // class QuestionEdit extends Component {
// //   constructor () {
// //     super()
// //
// //     this.state = {
// //       question: {
// //         question: '',
// //         answer: ''
// //       },
// //       updated: false
// //     }
// //   }
// //
// //   componentDidMount () {
// //     axios(`${apiUrl}/questions/${this.props.match.params.id}`)
// //       .then(res => {
// //         // console.log(res)
// //         // Fill up state
// //         this.setState({ question: res.data.question })
// //       })
// //       .catch(console.error)
// //   }
// //
// //   handleChange = (event) => {
// //     // Store the updated data in an object
// //     const updatedField = {
// //       [event.target.name]: event.target.value
// //     }
// //     // Combine that object with the current state
// //     const editedQuestion = Object.assign(this.state.question, updatedField)
// //     // Set the state to the new object
// //     this.setState({ question: editedQuestion })
// //   }
// //
// //   handleSubmit = (event) => {
// //     event.preventDefault()
// //
// //     axios({
// //       url: `${apiUrl}/questions/${this.props.match.params.id}`,
// //       method: 'PATCH',
// //       data: {
// //         question: this.state.question
// //       }
// //     })
// //       .then(res => {
// //         this.setState({ updated: true })
// //       })
// //       .catch(console.error)
// //   }
// //
// //   render () {
// //     const { question, updated } = this.state
// //     // const question = this.state.question
// //     // const createdId = this.state.createdId
// //
// //     if (updated) {
// //       return <Redirect to={`/questions/${this.props.match.params.id}`}/>
// //     }
// //     return (
// //       <Layout>
// //         <h3>Update a Question</h3>
// //         <QuestionForm
// //           question={question}
// //           handleChange={this.handleChange}
// //           handleSubmit={this.handleSubmit}
// //         />
// //       </Layout>
// //     )
// //   }
// // }
// //
// // export default QuestionEdit
//
//
//
//
//
//
//
//
//
//

// import React, { useState } from 'react'
// import { withRouter } from 'react-router-dom'
// import axios from 'axios'
//
// import apiUrl from '../../apiConfig'
// import QuestionForm from './QuestionForm'
//
// const UpdateQuestion = props => {
//   const [question, setQuestion] = useState({ question: '', answer: '' })
//
//   const handleChange = event => {
//     event.persist()
//     setQuestion({ ...question, [event.target.name]: event.target.value })
//   }
//
//   const handleSubmit = event => {
//     event.preventDefault()
//     axios({
//       url: `${apiUrl}/questions/:id}`,
//       method: 'PATCH',
//       headers: {
//         'Authorization': `Bearer ${props.user.token}`
//       },
//       data: { question }
//     })
//       .then(response => {
//         props.alert({ heading: 'Success', message: 'Great question!', variant: 'success' })
//         props.history.push(`/questions/${response.data.question._id}`)
//       })
//       .catch(console.error)
//   }
//
//   return (
//     <QuestionForm
//       question={question}
//       handleChange={handleChange}
//       handleSubmit={handleSubmit}
//       cancelPath='/'
//     />
//   )
// }
//
// export default withRouter(UpdateQuestion)
