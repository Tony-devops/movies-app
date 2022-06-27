import './assets/css/App.css';
import { useEffect, useState } from 'react';
import ClipLoader from "react-spinners/ClipLoader";

function App() {

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    fetch('https://showtimes.everyday.in.th/api/v2/movie/')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setMovies(data.results);
        setLoading(false);
      });
  },[])  

  useEffect(() => {
    console.log('movies: ', movies )
  },[movies])  



  return (
    <div className="App">
      <h1>Movies</h1>
      {
        loading ? 
          <div><ClipLoader color={'red'} size={20} /><br /> Loading movies ... </div>
        :
          <div style={{display: 'flex'}}>
            {
              movies.length > 0 &&
              movies.map((movie, i) => {
                return (
                  <div key={i} style={{border: '1px solid black'}}>
                    {movie.title}
                    <img src={movie.images[0].url} width="100" />
                  </div> 
                )
              })
            }
            </div>
      }
    </div>
  );

}

export default App;
