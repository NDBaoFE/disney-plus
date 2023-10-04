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
    <UserImg src="https://scontent.fhph1-2.fna.fbcdn.net/v/t39.30808-6/274111826_2733176383655656_3286006730486157059_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6MJXrCaNbU8AX_DvNDI&_nc_ht=scontent.fhph1-2.fna&oh=00_AT_3XI39Iyq8QwS6Kk7RnKZhQ56ya2K6_yn0zgVgMlzcKg&oe=62C02EC2"/>
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
width:40px;
height:40px;
border-radius:50%;`