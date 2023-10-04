import React from 'react'
import styled from 'styled-components'

function Login() {
  return (
    <Container>
        <CTA>
            <CTALogoOne  src="./images/cta-logo-one.svg"/>
            <SignUp>GET ALL THERE</SignUp>
            <Description>
            ​In reality, someone has to have familiarity with HTML-CSS-JS. If you do React right away, you might get lost.
            </Description>
        </CTA>
    </Container>
  )
}

export default Login

const Container=styled.div`
position:relative;
min-height:calc(100vh - 70px);
display:flex;
align-items:center;
justify-content:center;
overflow:hidden;
    &:before {
        background-position:top;
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
const CTA=styled.div`
max-width:650px;
width:90%;
padding:80px 40px;
display:flex;
flex-direction:column;

`
const CTALogoOne=styled.img`    `
const SignUp=styled.a`
background:#0063e5;
width:100%;
height:100%;
font-weight:bold;
padding: 17px 0;
color:#f9f9f9;
border-radius:4px;
text-align:center;
font-size:20px;
cursor:pointer;
transition: 0.3s ease all;
letter-spacing:1.5px;
&:hover{
    background:#0483ee;
}
`
const Description=styled.p`
color:rgb(249,249,249);
font-size:11px;
letter-spacing:1.5px;
text-align:center;

`