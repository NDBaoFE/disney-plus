import React, { useEffect } from 'react'
import styled from 'styled-components';
import ImageSlider from "./ImageSlider";
import Viewers from './Viewers';
import Movies from './Movies';
import db from './firebase.js'
  function Home() {
  
    useEffect(()=>{
       
    });


  return (
    <Container>
        <ImageSlider />
        <Viewers/>
        <Movies/>
    </Container>
  )
}

export default Home
const Container= styled.main`
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
    }
`