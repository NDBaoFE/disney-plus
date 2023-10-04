import React from 'react'
import styled from 'styled-components'
import {selectMovies} from '../features/movie/MovieSlice'
import {useSelector} from 'react-redux'
function Movies() {
    const movies=useSelector(selectMovies);
    console.log(movies);
  return (
    <Container>
        <h2>Recommened for you</h2>
        <Content>
            <Wrap>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg"/>
            </Wrap>
            <Wrap>
            <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg"/>
            </Wrap>
            <Wrap>
            <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg"/>
            </Wrap>
            <Wrap>
            <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg"/>
            </Wrap>
            <Wrap>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg"/>
            </Wrap>
            <Wrap>
            <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg"/>
            </Wrap>
            <Wrap>
            <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg"/>
            </Wrap>
            <Wrap>
            <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg"/>
            </Wrap>
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