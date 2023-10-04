
import React, {useEffect,useState }from 'react'
import styled from 'styled-components'
import {useParams} from 'react-router-dom'
import db from '../firebase'

function Detail1() {
    const { id } = useParams();
    const [movie, setMovie] = useState({});

   const url='https://api.themoviedb.org/3/movie/'+id+'?&api_key=4621eb930eceb8d23839805cd87e953a&language=en-US'
   const backdrop_url='https://image.tmdb.org/t/p/w1920_and_h800_multi_faces'
   console.log(url);
   useEffect(() => {
    fetchPopular();
  
  }, []);
  const fetchPopular = async () => {
    const data = await fetch(url);
    const movies = await data.json();
    setMovie(movies);
  };
  console.log(movie);
  return (
    <Container>
        {movie&&(
        <> 
            <Background>
                <img src={backdrop_url+movie.backdrop_path}/>
            </Background>
            <Controls>
                <PlayBtn>
                <img src={process.env.PUBLIC_URL + '/images/play-icon-black.png'} /> 
                    <span>Play</span>
                </PlayBtn>
                <TrailerBtn>
                <img src={process.env.PUBLIC_URL + '/images/play-icon-white.png'} /> 
                    <span>Trailer</span>
                </TrailerBtn>
                <AddBtn>
                    <span>+</span>
                </AddBtn>
                <GroupWatchBtn>
                    <img src={process.env.PUBLIC_URL + '/images/group-icon.png'} /> 
                </GroupWatchBtn>
            </Controls>
            <SubTitle>
            {movie.original_title}
            </SubTitle>
            <Description>
                  {movie.overview}
            </Description>
        </>)}
       
    </Container>
  )
}

export default Detail1

const Container=styled.div`
min-height: calc(100vh - 70px);
padding : 0 calc(35 vw +5px);
postion:relative;`;


const Background=styled.div`
position:relative;
top:0;
bottom;
left:0;
right:0;
z-index:-1;
opacity:0.8;    img{
    width:100%;
    height:100%;
    object-fit:cover;
}
`
const Controls=styled.div`
display:flex;
margin-left:30px;
align-items:center;
margin-top:250px;
`
const PlayBtn=styled.div`
border-radius:5px;
font-size:15px;
display:flex;
width:150px;
color:black;
align-items:center;
height:56px;
background:rgb(249,249,249);
border-none;
justify-content:center;
padding:0px 24px
cursor:pointer;
letter-spacing:1.8px;
transition:0.3s ease all ;
margin-right:22px;
text-transform:uppercase;
&:hover{
    background:rgb(198,198,198);
}`
const TrailerBtn=styled(PlayBtn)`
background:rgba(0,0,0,0.3);
color:rgb(249,249,249);
border:1px  solid rgb(249,249,249);
transition:0.3s ease all ;
cursor:pointer;`
const AddBtn=styled.div`
width:44px;
height:44px;
border-radius:50%;
background:rgba(0,0,0,0.3);
display:flex;
justify-content:center;
border:1px solid rgb(249,249,249);
cursor:pointer;
margin-right:10px;
span{
    font-size:30px;
}

`
const GroupWatchBtn=styled(AddBtn)`
background: rgb(0,0,0);`

const SubTitle=styled.div`
font-size:15px;
color:rgb(249,249,249);
min-height:20px;
margin-top:20px;
margin-left:30px;`


const Description=styled.div`
font-size:20px;
color:rgb(249,249,249);
min-height:1.4px;
height:30vh;
margin-top:16px;
margin-left:30px;
max-width:600px;
`