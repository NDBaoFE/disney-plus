import React,{useRef,useEffect} from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
function Search() {
  const inputRef = useRef(null);
  const newUrl=`
  https://api.themoviedb.org/3/search/movie?api_key='4621eb930eceb8d23839805cd87e953a'&language=en-US&query=alo0&page=1&include_adult=false`;
  const [popular, setPopular] = useState([]);
  const fetchPopular = async () => {
    const data = await fetch(newUrl);
    console.log(newURL);
    const movies = await data.json();
    setPopular(movies.results);
  };
  useEffect(() => {
    fetchPopular();
  
  }, []);
  const handleSubmit=()=>{
    console.log(inputRef.current.value);
  }
  return (
    <Container>
      <h1>Search the Movie you like:</h1>
      <Input>
       <input   ref={inputRef} type="text"placeholder='any movies....' id="fname" name="fname"></input>
      <SearchIcon className="search-icon" onClick={handleSubmit}></SearchIcon>
       </Input>
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