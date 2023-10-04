import React from 'react'
import styled from 'styled-components'
function Search() {
  return (
    <Container>
      <h1>Search the Movie you like:</h1>
       <input type="text"placeholder='any movies....' id="fname" name="fname"></input>
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
      
    }
    h1{
      width:400px;
    }
`