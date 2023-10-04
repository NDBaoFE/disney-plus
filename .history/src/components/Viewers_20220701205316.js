import React from 'react'
import styled from 'styled-components'
function Viewers() {
  return (
    <Container>
        <Wrap>
            <img src='./images/viewers-disney.png'/>
            <video
            loop
            preload='none'
            muted
            onMouseOver={handleMouseOver}>
            onMouseOut={handleMouseOut}><source src="./videos/disney.mp4" type="video/mp4" />
        </Wrap>
        <Wrap>
            <img src='./images/viewers-pixar.png'/>
        </Wrap>
        <Wrap>
            <img src='./images/viewers-marvel.png'/>
        </Wrap>
        <Wrap>
            <img src='./images/viewers-starwars.png'/>
        </Wrap>
        <Wrap>
            <img src='./images/viewers-national.png'/>
        </Wrap>
    </Container>
  )
}

export default Viewers

const Container=styled.div`
margin-top:30px;
display:grid;
grid-gap:25px;
padding:30px 0 25px;
grid-template-columns:repeat(5,minmax(0,1fr));`
const Wrap=styled.div`
border-radius:10px;
cursor:pointer;
border: 3px solid rgba(249,249,249,0.1);
box-shadow: rgb( 0 0 0 / 69%) 0 26px 30px -10px, rgb( 0 0 0 / 73%) 0px 16px 10px -10px;
transition: 0.3s ease all;
img{
    width:100%;
    height:100%;
    object-fit:cover;
}

&:hover{
    box-shadow: rgb( 0 0 0 / 69%) 0 40px 58px -16px, rgb( 0 0 0 / 73%) 0px 30px 22px -10px;
    transform:scale(1.05);
    border:4px solid rgba(249,249,249,0.8);
}`