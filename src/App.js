// import logo from './logo.svg';
// import './App.css';
// import gif from './components/gif';
// import data from './data';
// import seacrh from './pages/search/indes';
import Seacrh from './pages/search/indes';
import React, { useState } from 'react';
import Gif from './components/gif';
import './App.css';

const API_KEY = '8Hty21wzZ85j4rqOgB1vDzdqV0f223fa';

// class App extends React.Component {
//   state = {
//     search: '',
//     gifs: {},
//   };

const App = () => {
  const [search, setSearch] = useState('');
  const [gift, setGift] = useState({});


  const searchbarChange = (e) => {
    setSearch(e.target.value);
  };

  const getGifs = (e) => {
    e.preventDefault();
    const temp = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${search}&limit=12`;
    fetch(temp)
      .then((res) => res.json())
      .then(data => {
      setGift(data);
      });
    
  };

    return (
      <>
        <Seacrh getData={getGifs} getSearch={searchbarChange} />
        {gift.data?.map((gif) => (
          <Gif title={gif.title} url={gif.images.fixed_width.url} key={gif.id}/>
        ))}
      </>
    );
  
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Search</h1>
//       </header>
//       <div className="main">
//         <Gif 
//         image={data[0].url}
//         />
//       </div>
//     </div>
//   );
// }
// const giphy_secret_key = process.env.REACT_APP_GIPHY_KEY;
// export default App;
