
import React, {useEffect,useState }from 'react'
import styled from 'styled-components'
import {useParams} from 'react-router-dom'

function Detail1() {
    const { id } = useParams();
    const [movie, setMovie] = useState({});
    const [video, setVideo] = useState({});
    const [open,setOpen]=useState(false);
    const [openTrailer,setOpenTrailer]=useState(false);
   const url='https://api.themoviedb.org/3/movie/'+id+'?&api_key=4621eb930eceb8d23839805cd87e953a&language=en-US'
   const backdrop_url='https://image.tmdb.org/t/p/w1920_and_h800_multi_faces';
   const trailer_api=`https://api.themoviedb.org/3/movie/${id}/videos?&api_key=4621eb930eceb8d23839805cd87e953a`;
   useEffect(() => {
    fetchMovie();
     fetchTrailer();
  }, []);
  const fetchMovie = async () => {
    const data = await fetch(url);
    const movies = await data.json();
    setMovie(movies);
  };
  const fetchTrailer = async () => {
    const data = await fetch(trailer_api);
    const videos = await data.json();
    setVideo(videos);
  };
  //reset the render everytime user choose to watch the movie or not
  useEffect(() => {
  }, [openTrailer]);
  const handleShowMovie=()=>{
   setOpen(true);
  }
  const  handleCloseMovie=()=>{
    setOpen(false);
    
  }
  const handleShowTrailer=()=>{
    setOpenTrailer(true);
   }
   const  handleClosetrailer=()=>{
    setOpenTrailer(false);
     
   }
  console.log(video.results[0].key)
  return (
    <Container>
        {movie&&(
        <> 
            <Background>
                <img src={backdrop_url+movie.backdrop_path}/>
            </Background>
            <Show className={open ? 'movie':'active'}>
                <iframe data-src='https://2embed.org/embed/movie?imdb=tt5113044' className="ve-iframe lazy entered loaded" id="ve-iframe" allowFullScreen="allowfullscreen" frameBorder="0" data-ll-status="loaded" src={open?"https://2embed.org/embed/movie?tmdb="+movie.id:''}></iframe>
                <CloseBtn onClick={handleCloseMovie}>X</CloseBtn>
            </Show>
           {openTrailer&&
            <Show className={openTrailer ? 'movie':'active'}>
                    <iframe className='ve-iframe' src={"https://www.youtube.com/embed/"+video.results[0].key} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <CloseBtn onClick={handleClosetrailer}>X</CloseBtn>
            </Show>
}
            <Title>
                {movie.title}
            </Title>
            <Controls>
                <PlayBtn onClick={handleShowMovie}>
                <img src={process.env.PUBLIC_URL + '/images/play-icon-black.png'} /> 
                    <span>Play</span>
                </PlayBtn>
                <TrailerBtn onClick={handleShowTrailer}>
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
            {movie.release_date}
            </SubTitle>
            <Description>
                  {movie.overview}
            </Description>
        </>)}
       
    </Container>
  )
}

export default Detail1

const Container=styled.main`
position:relative;
min-height:calc(100vh - 70px);
padding: 0 calc(3.5vw + 5px);
overflow:hidden;
    &:before {
        background:url("./images/home-background.png") center center/cover no-repeat fixed;
        content:"";
        position:absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        z-index:-1;
    }`


const Background=styled.div`
position:absolute;
top:0;
bottom;
left:0;
right:0;
z-index:-1;
opacity:0.5;
    img{
    width:100%;
    height:calc(100vh - 70px);
    object-fit:cover;
}
`
const Controls=styled.div`
display:flex;
margin-left:30px;
align-items:center;
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
    cursor:pointer;
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
const Title=styled.h1`
font-size:40px;
margin-top:200px;
`
const Show=styled.div`
width:1000px;
height:600px;
background:#090b13;
position:absolute;
top:80px;
`
const CloseBtn=styled.h1`
position:absolute;
top:0;
right:-50px;
cursor:pointer;
width:50px;
height:50px;
background:#090b13;
text-align:center;
border-radius:50%;
`
