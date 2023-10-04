import React, {useEffect} from 'react';
import styled from 'styled-components';
import { selectUserName, selectUserPhoto, setUserLogin, setSignOut } from '../features/user/userSlice';
import { useSelector, useDispatch } from 'react-redux';
import { auth, provider } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
function Header() {
    let profileURL="";
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);
    
    useEffect(() => {
        if(selectUserName) navigate('/login')
    // eslint-disable-next-line
    }, [])

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if(user) {
                dispatch(setUserLogin({
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL
                }))

                navigate('/');
            }
        })
    // eslint-disable-next-line
    }, [])
    const signIn = () => {
        auth.signInWithPopup(provider)
            .then((result) => {
                let user = result.user;
                dispatch(setUserLogin({
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL
                }))
                profileURL=user.photoURL;
                console.log(profileURL);
                navigate('/');
            })
    }

    const signOut = () => {
        auth.signOut()
            .then(() => {
                dispatch(setSignOut());
                navigate('/login');
            })
    }
  return (
  <Nav>
    <Logo  src={process.env.PUBLIC_URL + '/images/logo.svg'}/>
    {
        !userName ?(
            <LoginContainer>
        <Login onClick={signIn}>Login</Login>
        </LoginContainer>):
            <>
                <NavMenu>
    <Link to={`/`}>
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
    <Link to={`/series`}>
    <img  alt="logo" src={process.env.PUBLIC_URL + '/images/series-icon.svg'} />
        <span>SERIES</span>
    </Link>

    </NavMenu>
    <User>
    <UserImg   src="https://scontent.fsgn13-3.fna.fbcdn.net/v/t39.30808-6/274111826_2733176383655656_3286006730486157059_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=DYTrA9TXwgIAX-3v4hT&_nc_ht=scontent.fsgn13-3.fna&oh=00_AT_UGUHfSLRyUowhwmsdKGgh9DUxN-arnCnfIwjNsfZWdQ&oe=62C42342"/>
    <li onClick={signOut}>Sign Out</li>
    </User>
            </>
    }
    
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
const Login=styled.div`
border:1px solid #f9f9f9;
padding : 8px 16px;
border-radius:4px;
leter-spacing:1.5px;
text-transform:uppercase;
background-color:rgba(0,0,0,0.6);
transition:0.3s ease all;
&:hover{
    color:black;
    background-color:#f9f9f9;
    border-color:transparent;
}
`
const LoginContainer=styled.div`
display:flex;
flex:1;
justify-content:flex-end;
`
const User=styled.div`

&:hover>img{
    border:1px solid rgba(249,249,249,0.1);
}
&:hover>li{
    display:block;
    cursor-pointer;
}
li
    position:absolute;
    background: black;
    width:60px;
    height:60px;
    display:none;
    z-index:99;
    cursor-pointer;
}
`