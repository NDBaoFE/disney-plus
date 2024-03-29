import React from 'react'
import styled from 'styled-components'
import {useParams} from 'react-router-dom'

function Show() {
    const { id } = useParams();
  return (
    <Container>Show</Container>
  )
}

export default Show

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
