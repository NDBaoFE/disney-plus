import React,{useEffect,useState} from 'react'
import styled from 'styled-components';
function Movie() {
 const url =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=4621eb930eceb8d23839805cd87e953a&page=1";
    const [popular, setPopular] = useState([]);
    useEffect(() => {
      fetchPopular();
    }, []);
    let newURL=url;
  const fetchPopular = async () => {
      const data = await fetch(newURL);
      const movies = await data.json();
      console.log(movies);
      setPopular(movies.results);
    };
    
    const handleInCreasePage=()=>
{
  count++;
  console.log(count);
  let seprate=newURL.split('&page=');
  newURL=seprate[0]+'&page='+count;
  fetchPopular();
}    

    let count=1;
  return (<Container>
    <h1>Our Great Movies:</h1>
    <Content>
      {popular.map((movie)=>{
        return <Wrap key={movie.id} movie={movie.id}>
            <img src={"https://image.tmdb.org/t/p/w500"+ movie.poster_path} />
        </Wrap>
      })}
    </Content>
    <Controls>
    <h1 className='change-page-btn'>Prev</h1>
    <h1 className='counter'>{count}</h1>
    <h1 onClick={handleInCreasePage} className='change-page-btn'>Next</h1>
    </Controls>
    </Container>
  )
}

export default Movie
const Wrap=styled.div`
border-radius:10px;
overflow:hidden;
border:3px solid rgba(249,249,249,0.1);
box-shadow: rgb( 0 0 0 / 69%) 0 26px 30px -10px, rgb( 0 0 0 / 73%) 0px 16px 10px -10px;
transition: 0.3s ease all;
img{
    width:100%;
    height:100%;
    object-fit:cover;
}
&:hover{
    transform:scale(1.05);
    border:3px solid rgba(249,249,249,0.8);
}`
const Content=styled.div`
display:grid;
grid-template-columns:repeat(4,minmax(0,1fr));
grid-gap:25px;`
const Container=styled.div`
display:flex;
flex-direction:column;
align-items:center`
const Controls=styled.div`
display:flex;
justify-content: space-between;
width:500px;`