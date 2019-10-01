import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './Header'
import StreamCreate from './streamPages/StreamCreate'
import StreamDelete from './streamPages/StreamDelete'
import StreamEdit from './streamPages/StreamEdit'
import StreamList from './streamPages/StreamList'
import StreamShow from './streamPages/StreamShow'

const App = () => {
  return (
    <div className='ui container'>
      <BrowserRouter>
        <Header />
        <Route exact path='/' component={StreamList} />
        <Route exact path='/streams/new' component={StreamCreate} />
        <Route exact path='/streams/edit' component={StreamEdit} />
        <Route exact path='/streams/delete' component={StreamDelete} />
        <Route exact path='/streams/show' component={StreamShow} />
      </BrowserRouter>
    </div>
  )
}
export default App
