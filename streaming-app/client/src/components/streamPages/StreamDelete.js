import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Modal from '../Modal'
import history from '../../History'
import { fetchStream, deleteStream } from '../../actions'

class StreamDelete extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id)
  }
  renderActions() {
    const id = this.props.match.params.id
    console.log(id)
    return (
      <>
        <button
          onClick={() => this.props.deleteStream(id)}
          className='ui button negative'
        >
          Delete
        </button>
        <Link to='/' className='ui button'>
          Cancel
        </Link>
      </>
    )
  }
  renderContent() {
    if (!this.props.stream) {
      return <b>'Loading...'</b>
    }
    return (
      <span>
        Are you sure you want to delete the stream with title
        <b> {this.props.stream.title}</b>
      </span>
    )
  }
  render() {
    return (
      <Modal
        title='Delete Stream'
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push('/')}
      />
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] }
}
export default connect(
  mapStateToProps,
  { fetchStream, deleteStream }
)(StreamDelete)
