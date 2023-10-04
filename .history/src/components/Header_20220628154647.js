import React from 'react'
import styled from 'styled-components'
 export function Header() {
  return (
  <Nav>
    <Logo src=""/>
    <NavMenu />


</Nav>
   
  );
}

export default Header;

const Nav=styled.div`
height:70px;
background:#090b13;

`
const Logo=styled.img`
    width:80px;

`
const NavMenu = style.div