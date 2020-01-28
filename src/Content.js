import React, {useState} from 'react';

function Content(props) {

  const containerCSS = {
    background: '#D81F26',
    color: 'white',
    margin: 'auto',
    textAlign: 'center',
    maxWidth: '50%',
    fontFamily: 'Arial',
    marginTop: '10px',
    fontSize: 'small'
  };

  const coverCSS = {
    width: '150px',
    height: '200px',
    paddingTop: '10px'
  };

  const buttonCSS = {
    background: 'black',
    color:'white',
    border: 'none',
    fontWeight: '900',
    marginTop: "5px",
    cursor: 'pointer',
    borderRadius: '50%'
  };

  const counterCSS = {
    color: 'black',
    fontWeight: '900',
    margin: '0px 0px'
  };

  const h4CSS = {
    textDecoration: 'underline',
    fontWeight: '900',
    marginTop: '0px'
  };

  const imgCSS = {
    maxWidth: '10%',
    borderRadius: '50%',
    paddingBottom: '10px'
  };

  const linkCSS = {
    color: 'white'
  };

  const handleClick = (e) => { 
    let title = e.target.title;
    props.voting(title);
  };

  return (
    <div style={containerCSS}>

      <img style={coverCSS} src={props.series.cover}/>

      <div>
         {<button style={buttonCSS} onClick={e => handleClick(e)} title={props.series.title}>♥</button>}
      </div>
      <p style={counterCSS}>{props.series.counter}</p>
      
      <h4 style={h4CSS}>
        <a style={linkCSS} href="https://reelgood.com/tv/source/netflix">{props.series.title}</a>
      </h4>

      <div>{props.series.year}</div>

      <h4>Submission:</h4>
      <img style={imgCSS} src={props.series.submission}/>

    </div>
  )
};

export default Content