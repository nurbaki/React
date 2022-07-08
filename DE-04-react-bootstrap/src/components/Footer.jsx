import React from 'react'
import { Navbar } from 'react-bootstrap'

function Footer() {
  return (
    <div>
        <Navbar fixed="bottom" className='justify-content-center bg-dark p-4 text-light fixed-bottom'>
        <p>Copyright {new Date().getFullYear()}</p>
        </Navbar>
    </div>
  )
}

export default Footer