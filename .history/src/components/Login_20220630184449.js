import React from 'react'
import styled from 'styled-components'

function Login() {
  return (
    <Container>Login</Container>
  )
}

export default Login

const Container=styled.div`
position:relative;
min-height:calc(100vh - 70px);
padding: 0 calc(3.5vw + 5px);
overflow:hidden;
    &:before {
        background:url("./images/login-background.jpg") center center/cover no-repeat fixed;
        content:"";
        position:absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        z-index:-1;
    }
`