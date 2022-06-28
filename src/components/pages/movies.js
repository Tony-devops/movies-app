import '../../assets/scss/index.scss';
import { useEffect, useState } from 'react';
import ClipLoader from "react-spinners/ClipLoader";

function Movies() {

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
    <div className="Movies">
      <h1>Movies</h1>
      {
        loading ? 
          <div><ClipLoader color={'red'} size={20} /><br /> Loading movies ... </div>
        :
          <div className="Movies__container">
            {
              movies.length > 0 &&
              movies.map((movie, i) => {
                return (
                  <div key={i} className="Movies__item">
                    
                    <h3 className={i === 0 ? 'special-h3' : ''}>{movie.title}</h3>
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

export default Movies;