import React from 'react'
import styled from 'styled-components'
 export function Header() {
  return (
  <Nav>
    <Logo src="./images/logo.svg"/>
    <NavMenu>
    <a href='#'>
        <img  alt="logo"src="./images/home-icon.svg"/>
        <span>HOME</span>
    </a>


    </NavMenu>


</Nav>
   
  );
}

export default Header;

const Nav=styled.div`
height:70px;
background:#090b13;
display:flex;
align-items:center;
padding:0 36px;
`
const Logo=styled.img`
    width:80px;

`
const NavMenu = styled.div`
display:flex;
a{
    display:flex;
    align-items:center;
    padding: 0 12px;
    img{
        height:20px;
    }
    span
}

`