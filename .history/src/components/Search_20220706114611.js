import React,{useRef,useEffect,useState} from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import {Link} from 'react-router-dom'
function Search() {
  const inputRef = useRef(null);
  const newUrl=`
  https://api.themoviedb.org/3/search/movie?api_key=4621eb930eceb8d23839805cd87e953a&language=en-US&query=`inputRef.current.value`&page=1&include_adult=false`
  const [popular, setPopular] = useState([]);
  const fetchPopular = async () => {
    const data = await fetch(newUrl);
    const movies = await data.json();
    setPopular(movies.results);
    console.log(movies);
  };
  useEffect(() => {
    fetchPopular();
  
  }, []);
  const handleSubmit=()=>{
    fetchPopular();
  }
  return (
    <Container>
      <h1>Search the Movie you like:</h1>
      <Input>
       <input   ref={inputRef} type="text"placeholder='any movies....' id="fname" name="fname"></input>
      <SearchIcon className="search-icon" onClick={handleSubmit}></SearchIcon>
       </Input>
    <h1>Our Great Movies:</h1>
    <Content>
      {popular.map((movie)=>{
        return <Wrap key={movie.id} movie={movie.id}>
          <Link to={`/detail1/${movie.id}`}>
            <img src={"https://image.tmdb.org/t/p/w500"+ movie.poster_path} />
            </Link>
        </Wrap>
      })}
    </Content>
    </Container>
  )
}

export default Search
const Container= styled.main`
position:relative;
display:flex;
align-items:center;
flex-direction:column;
text-align:center;
justify-content:center;
min-height:calc(100vh - 70px);
padding: 0 calc(3.5vw + 5px);
overflow:hidden;
    &:before {
        background:url("./images/searching-bg.jpg") center center/cover no-repeat fixed;
        content:"";
        position:absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        opacity:0.5;
        z-index:-1;
    }
    input{
      width:400px;
      height:35px;
      background:#191919;
      color:white;
      border-color:transparent;
    }
    input:focus {
      border-color:transparent;
      border-width:0;
      border-style:none;
      outline:0;
    }
    h1{
      width:400px;
    }
`
const Input=styled.div``
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