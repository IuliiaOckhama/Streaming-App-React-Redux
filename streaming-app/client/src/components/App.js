import React, { Component } from 'react'
import { Router, Route } from 'react-router-dom'
import history from '../History'
import Header from './Header'
import StreamCreate from './streamPages/StreamCreate'
import StreamDelete from './streamPages/StreamDelete'
import StreamEdit from './streamPages/StreamEdit'
import StreamList from './streamPages/StreamList'
import StreamShow from './streamPages/StreamShow'

class App extends Component {
  submit = values => {
    alert('Hello')
  }
  render() {
    return (
      <div className='ui container'>
        <Router history={history}>
          <Header />
          <Route exact path='/' component={StreamList} />
          <Route exact path='/streams/new' component={StreamCreate} />
          <Route exact path='/streams/edit/:id' component={StreamEdit} />
          <Route exact path='/streams/delete/:id' component={StreamDelete} />
          <Route exact path='/streams/show' component={StreamShow} />
        </Router>
      </div>
    )
  }
}
export default App
