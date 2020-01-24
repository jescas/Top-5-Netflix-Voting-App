import React, { Component } from 'react'
import App from './App'

function Header() {
  return(
    <header style={headercss}>
      <strong>Top 5 Netflix Series 2019</strong>
    </header>
  )
}

const headercss = {
  background: '#D81F26',
  color: 'white',
  padding: '10px 0px',
  letterSpacing: '2px'
}

export default Header;
