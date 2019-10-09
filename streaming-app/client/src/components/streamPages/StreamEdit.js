import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchStream, editStream } from '../../actions'
import StreamForm from './StreamForm'
class StreamEdit extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id)
  }
  onSubmit = formValues => {
    this.props.editStream(this.props.match.params.id, formValues)
  }
  render() {
    const {
      stream = {
        title: 'Loading title...',
        description: 'Loading description...',
      },
    } = this.props
    const { title, description } = stream
    return (
      <div>
        <h3>Edit a stream</h3>
        <StreamForm
          initialValues={{ title, description }}
          onSubmit={this.onSubmit}
        />
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] }
}
export default connect(
  mapStateToProps,
  { fetchStream, editStream }
)(StreamEdit)
