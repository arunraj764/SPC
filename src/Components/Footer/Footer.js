import React from 'react'
import './Footer.css'

const Footer = () => {
  const day = new Date();
  let year = day.getFullYear()
  return (
    <div className='footer'>
      <p>© {year} SPC. All rights reserved.</p>
      <ul>
        <li><a href="">Terms of Services</a></li>
        <li><a href="">Privacy Policy</a></li>
      </ul>
    </div>
  )
}

export default Footer
