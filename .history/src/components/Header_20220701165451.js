import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
 export function Header() {
  return (
  <Nav>
    <Logo  src={process.env.PUBLIC_URL + '/images/logo.svg'}/>
    <NavMenu>
    <Link to={`/home`}>
    <img  alt="logo" src={process.env.PUBLIC_URL + '/images/home-icon.svg'} />
        <span>HOME</span>
    </Link>
    <Link to={`/search`}>
    <img  alt="logo" src={process.env.PUBLIC_URL + '/images/search-icon.svg'} />
        <span>SEARCH</span>
    </Link>
     <Link to={`/watchlist`}>
     <img  alt="logo" src={process.env.PUBLIC_URL + '/images/watchlist-icon.svg'} />
        <span>WACHLIST</span>
    </Link>
    <Link to={`/original`}>
    <img  alt="logo" src={process.env.PUBLIC_URL + '/images/original-icon.svg'} />
        <span>ORIGINALS</span>
    </Link>
    <Link to={`/movies`}>
    <img  alt="logo" src={process.env.PUBLIC_URL + '/images/movie-icon.svg'} />
        <span>MOVIES</span>
    </Link>
    <a href='/series'>
    <img  alt="logo" src={process.env.PUBLIC_URL + '/images/series-icon.svg'} />
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
overflow:hidden;
`
const Logo=styled.img`
    width:80px;

`
const NavMenu = styled.div`
display:flex;
flex:1; 
margin-left:30px;
a{
    display:flex;
    color:inherit;
    align-items:center;
    padding: 0 12px;
    text-decoration:none;
    cursor-pointer;
    align-items:center;
    img{
        height:20px;
    }
    span{
        font-size:13px;
        letter-spacing:1.42px;
        position:relative;
        &:after{
            content:"";
            height:2px;
            background:white;
            position:absolute;
            left:0;
            bottom:-6px;
            right:0;
            opacity:0;
            transform:scaleX(0)
        }
    }
    &:hover{
        span:after{
            transform:scaleX(1);
            opacity:1;
            transition:0.3s ease all;
        }
    }
}
`
const UserImg=styled.img`
width:40px;
height:40px;
border-radius:50%;
cursor:pointer;`