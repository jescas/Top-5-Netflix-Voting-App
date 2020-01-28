import React, {useState} from 'react';
import Header from './Header';
import Content from './Content.js';

function App() {

  //sorting with map method inspired by: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  const voting = (title) => {
    let array = []
    state.map(e => {
      if (title === e.title) {
        e.counter++
      } array.push(e);
    })
    array.sort((first, last) => last.counter-first.counter); setState(array);
  };

  const [state, setState] = useState(
    [
      {
      id: 1,
      cover: 'https://m.media-amazon.com/images/M/MV5BNWNmYzQ1ZWUtYTQ3ZS00Y2UwLTlkMDctZThlOTJkMGJiNzBiXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_.jpg',
      title: 'Mindhunter 2',
      year: 'August, 2019',
      submission: 'https://vignette.wikia.nocookie.net/mindhunter/images/f/f1/2x06BillTench.png/revision/latest/top-crop/width/300/height/300?cb=20191201181624',
      counter: 0,
    },
    {
      id: 2,
      cover: 'https://m.media-amazon.com/images/M/MV5BZmJjM2YzOWEtOTYxYi00YjhkLTliMzgtMTA2MTc0NDQ1MDM4XkEyXkFqcGdeQXVyODY5OTk4MA@@._V1_UX182_CR0,0,182,268_AL_.jpg',
      title: 'When They See Us',
      year: 'May, 2019',
      submission: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/jharell-jerome-as-korey-wise-netflix-when-they-see-us-1559555625.jpg?crop=0.667xw:1xh;center,top&resize=480:*',
      counter: 0,
    },
    {
      id: 3,
      cover: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/bb/You_Season_2.jpg/220px-You_Season_2.jpg',
      title: 'You: Season 2',
      year: 'December, 2019',
      submission: 'https://www.refinery29.com/images/9090722.jpg?format=webp&width=720&height=864&quality=85',
      counter: 0,
    },
    {
      id: 4,
      cover: 'https://i.redd.it/tl2uuclwbpv11.jpg',
      title: 'The Witcher',
      year: 'December, 2019',
      submission: 'https://static1.purebreak.com/articles/8/18/76/48/@/700657-the-witcher-saison-1-pourquoi-anya-cha-diapo-1.jpeg',
      counter: 0,
    },
    {
      id: 5,
      cover: 'https://m.media-amazon.com/images/M/MV5BODkwNmY1MjgtY2ZlNS00MWVmLWEzZTktYmMyNDQzMjlmMGY2XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
      title: 'Dead to Me',
      year: 'May, 2019',
      submission: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dtm-1557417928.jpg?crop=0.670xw:1.00xh;0.292xw,0&resize=480:*',
      counter: 0,
    }
    ]
    );

  return (
    <div className="App">
      <Header />
      {state.map((e) => <Content series={e} voting={voting} />)}
    </div>
  )
};

export default App;