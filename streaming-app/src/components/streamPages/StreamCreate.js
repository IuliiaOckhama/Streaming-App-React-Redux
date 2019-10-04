import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validateForm from '../../utils/validateForm'

class StreamCreate extends React.Component {
  renderInput({ input, label, meta: { touched, error } }) {
    return (
      <div className={`field ${error ? 'error' : ''}`}>
        <label htmlFor={label}>{label}</label>
        <input id={label} placeholder={label} {...input} />
        <div className='ui error message'>
          {touched && error && <span className='header'>{error}</span>}
        </div>
      </div>
    )
  }
  render() {
    const { handleSubmit, submitting } = this.props
    return (
      <form onSubmit={handleSubmit(validateForm)} className='ui form error'>
        <Field name='title' component={this.renderInput} label='Enter Title' />
        <Field
          name='description'
          component={this.renderInput}
          label='Enter Description'
        />
        <button
          className='ui button primary'
          type='submit'
          disabled={submitting}
        >
          Submit
        </button>
      </form>
    )
  }
}

export default reduxForm({
  form: 'streamCreate',
})(StreamCreate)
