import React from 'react';
import Header from './Header'
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div style={wrappercss} className="wrapper">
        
        <Header />

      </div>
    )
  }
}

const wrappercss = {
  margin: 'auto',
  textAlign: 'center',
  maxWidth: '50%',
  fontFamily: 'Arial'
}

export default App;
