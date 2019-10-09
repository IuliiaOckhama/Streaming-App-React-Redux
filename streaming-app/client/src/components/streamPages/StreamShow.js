import React, { Component } from 'react'
import { connect } from 'react-redux'
import flv from 'flv.js'
import { fetchStream } from '../../actions'

class StreamShow extends Component {
  constructor(props) {
    super(props)
    this.videoRef = React.createRef()
  }
  componentDidMount() {
    const { id } = this.props.match.params
    this.streamInfo = this.props.fetchStream(id)
    this.buildPlayer(id)
  }
  componentDidUpdate() {
    this.buildPlayer()
  }
  buildPlayer(id) {
    if (!this.streamInfo) {
      return
    }
    this.player = flv.createPlayer({
      type: 'flv',
      url: `http://localhost:8000/live/${id}.flv`,
    })
    this.player.attachMediaElement(this.videoRef.current)
    this.player.load()
  }

  render() {
    const {
      stream = {
        title: 'Loading title...',
        description: 'Loading description...',
      },
    } = this.props
    return (
      <div>
        <h1>{stream.title}</h1>
        <video ref={this.videoRef} style={{ width: '100%' }} controls />
        <h3>{stream.description}</h3>
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] }
}
export default connect(
  mapStateToProps,
  { fetchStream }
)(StreamShow)
