import React from 'react'
import styled from 'styled-components'

function Login() {
  return (
    <Container>
        <CTA>
            <CTALogoOne  src="./images/cta-logo-one.svg"/>
            <SignUp>GET ALL THERE</SignUp>
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
width:70%;
padding:80px 40px;
`
const CTALogoOne=styled.img`    `