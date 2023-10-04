import React from 'react'
import styled from 'styled-components'
 export function Header() {
  return (
  <Nav>
    <Logo src="./images/logo.svg"/>
    <NavMenu />


</Nav>
   
  );
}

export default Header;

const Nav=styled.div`
height:70px;
background:#090b13;
display:flex;
align-items:center;
`
const Logo=styled.img`
    width:80px;

`
const NavMenu = styled.div``