import React from 'react'
import { connect } from 'react-redux'
import { createStream } from '../../actions'
import StreamForm from './StreamForm'

class StreamCreate extends React.Component {
  onSubmit = formFieldsValues => {
    this.props.createStream(formFieldsValues)
  }

  render() {
    return (
      <div>
        <h3>Create new stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    )
  }
}
export default connect(
  null,
  { createStream }
)(StreamCreate)
