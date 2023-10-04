
import React from 'react'
import styled from 'styled-components'

function Detail() {
  return (
    <Container>
        <Background>
            <img src='https://api.time.com/wp-content/uploads/2018/06/bo-rgb-s120_22a_cs_pub-pub16-318.jpg'/>
        </Background>
        <ImageTitle>
            <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78'/>
        </ImageTitle>
        <Controls>
            <PlayBtn>
                <img src='./images/play-icon-black.png'/>
                <span>Play</span>
            </PlayBtn>
            <TrailerBtn>
            <img src='./images/play-icon-white.png'/>
                <span>Trailer</span>
            </TrailerBtn>
            <AddBtn>
                <span>+</span>
            </AddBtn>
            <GroupWatchBtn>
                <img src="./images/group-icon.png"/>
            </GroupWatchBtn>
        </Controls>
        <SubTitle>
            2022-2hr 30 min-Fantasy-Kids-Family
        </SubTitle>
        <Description>
        🔴Disney+ Clone - ReactJS Challenge (Learn Redux, React JS, Styled Components, and Firebase) | Day 1
        </Description>
    </Container>
  )
}

export default Detail

const Container=styled.div`
min-height: calc(100vh - 70px);
padding : 0 calc(35 vw +5px)
postion:relative;`;


const Background=styled.div`
position:fixed;
top:0;
bottom;
left:0;
right:0;
z-index:-1;
opacity:0.8;    img{
    width:100%;
    height:100%;
    object-fit:cover;
}
`
const ImageTitle=styled.div`
height:30vh;
width:35vw;
min-height:170px;
min-width:200px;
img{

    width:100%;
    height:100%;
    object-fit:contain;
}`
const Controls=styled.div`
display:flex;
margin-left:30px;
align-items:center;
`
const PlayBtn=styled.div`
border-radius:5px;
font-size:15px;
display:flex;
width:150px;
color:black;
align-items:center;
height:56px;
background:rgb(249,249,249);
border-none;
justify-content:center;
padding:0px 24px
cursor:pointer;
letter-spacing:1.8px;
transition:0.3s ease all ;
margin-right:22px;
text-transform:uppercase;
&:hover{
    background:rgb(198,198,198);
}`
const TrailerBtn=styled(PlayBtn)`
background:rgba(0,0,0,0.3);
color:rgb(249,249,249);
border:1px  solid rgb(249,249,249);
transition:0.3s ease all ;
cursor:pointer;`
const AddBtn=styled.div`
width:44px;
height:44px;
border-radius:50%;
background:rgba(0,0,0,0.3);
display:flex;
justify-content:center;
border:1px solid rgb(249,249,249);
cursor:pointer;
margin-right:10px;
span{
    font-size:30px;
}

`
const GroupWatchBtn=styled(AddBtn)`
background: rgb(0,0,0);`

const SubTitle=styled.div`
font-size:15px;
color:rgb(249,249,249);
min-height:20px;
margin-top:20px;`


const Description=styled.div`
font-size:20px;
color:rgb(249,249,249);
min-height:1.4;
margin-top:16px;
`