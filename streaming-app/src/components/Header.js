import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='ui secondary pointing menu'>
      <Link to='/' className='item'>
        Streamy
      </Link>
      <div className='right menu'>
        <Link to='/' className='item'>
          All streams
        </Link>
      </div>
    </div>
  )
}
export default Header
