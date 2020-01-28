import React, {Component} from 'react'
import App from './App'

function Header() {
  return(
    <header style={headerCSS}>
      <a style={linkCSS} href="https://www.netflix.com"><strong>Top 5 Netflix Series 2019</strong></a>
    </header>
  )
};

const headerCSS = {
  fontFamily: 'arial',
  background: '#D81F26',
  color: 'white',
  padding: '10px 0px',
  letterSpacing: '2px',
  margin: 'auto',
  textAlign: 'center',
  maxWidth: '50%',
  textDecoration: 'underline',
  textDecorationColor: 'white',
  textDecorationStyle: 'double'
};

const linkCSS = {
  color: 'white'
};

export default Header;
