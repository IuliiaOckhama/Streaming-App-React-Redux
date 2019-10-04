import { SubmissionError } from 'redux-form'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

function validateForm(values) {
  return sleep(500).then(() => {
    if (!values.title && !values.description) {
      throw new SubmissionError({
        title: 'You must enter the title',
        description: 'You must enter a description',
      })
    } else if (!values.title) {
      throw new SubmissionError({
        title: 'You must enter the title',
      })
    } else if (!values.description) {
      throw new SubmissionError({
        description: 'You must enter a description',
      })
    }
  })
}
export default validateForm
