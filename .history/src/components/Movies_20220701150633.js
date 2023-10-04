import React from 'react'
import styled from 'styled-components'
import {selectMovies} from '../features/movie/MovieSlice'
import {useSelector} from 'react-redux'
function Movies() {
    const movies=useSelector(selectMovies);
  return (
    <Container>
        <h2>Recommened for you</h2>
        <Content>
            {movies&& 
                movies.map((movie)=>(
            <Wrap>
                <img src={movie.cardImg}/>
            </Wrap>
                ))

            }
        </Content>
    </Container>
  )
}

export default Movies

const Container=styled.div``
const Content=styled.div`
display:grid;
grid-template-columns:repeat(4,minmax(0,1fr));
grid-gap:25px;`
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
}
`