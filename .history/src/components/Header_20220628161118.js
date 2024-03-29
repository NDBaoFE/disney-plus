import React from 'react'
import styled from 'styled-components'
 export function Header() {
  return (
  <Nav>
    <Logo src="./images/logo.svg"/>
    <NavMenu>
    <a href='/home'>
        <img  alt="logo"src="./images/home-icon.svg"/>
        <span>HOME</span>
    </a>
    <a href='/search'>
        <img  alt="logo"src="./images/search-icon.svg"/>
        <span>SEARCH</span>
    </a>
     <a href='/watchlist'>
        <img  alt="logo"src="./images/watchlist-icon.svg"/>
        <span>WASHLIST</span>
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
    span{
        font-size:13px;
        letter-spacing:1.42px;
    }
}

`