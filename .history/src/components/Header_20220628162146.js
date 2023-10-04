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
    <a href='/original'>
        <img  alt="logo"src="./images/original-icon.svg"/>
        <span>ORIGINALS</span>
    </a>
    <a href='/movie'>
        <img  alt="logo"src="./images/movie-icon.svg"/>
        <span>MOVIES</span>
    </a>
    <a href='/series'>
        <img  alt="logo"src="./images/series-icon.svg"/>
        <span>SERIES</span>
    </a>

    </NavMenu>
    <UserImg src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"/>

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
    color:inherit;
    align-items:center;
    padding: 0 12px;
    text-decoration:none;
    img{
        height:20px;
    }
    span{
        font-size:13px;
        letter-spacing:1.42px;
    }
}
`
const UserImg=styled.img`
background-color:red;`