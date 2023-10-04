import React,{useEffect,useState} from 'react'

function Movie() {
  const [popular, setPopular] = useState([]);
 const url =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=4621eb930eceb8d23839805cd87e953a";
useEffect(() => {
    fetchPopular();
  },[]);
const fetchPopular = async () => {
    const data = await fetch(url);
    const movies = await data.json();
    console.log(movies.results);
    setPopular(movies.results);
  };



  return (
    <div>
      {popular.map((movie)=>{
        return <Movie key={movie.id} movie={movie.id}
      })}
    </div>
  )
}

export default Movie