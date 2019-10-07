import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchStreams } from '../../actions'

class StreamList extends Component {
  componentDidMount() {
    this.props.fetchStreams()
  }
  renderAdminButtons(stream) {
    if (stream.userId === this.props.currentUserId) {
      return (
        <div className='right floated content'>
          <button className='ui button primary'>Edit</button>
          <button className='ui button negative'>Delete</button>
        </div>
      )
    }
  }
  renderList() {
    return this.props.streams.map(stream => {
      return (
        <div className='item' key={stream.id}>
          {this.renderAdminButtons(stream)}
          <i className='large middle aligned icon camera' />
          <div className='content'>
            {stream.title}
            <div className='description'>{stream.description}</div>
          </div>
        </div>
      )
    })
  }
  renderCreateButton() {
    if (this.props.isSignedIn) {
      return (
        <div>
          <Link to='/streams/new' className='ui button primary'>
            Create new stream
          </Link>
        </div>
      )
    }
  }
  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className='ui celled list'>{this.renderList()}</div>
        {this.renderCreateButton()}
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  }
}
export default connect(
  mapStateToProps,
  { fetchStreams }
)(StreamList)