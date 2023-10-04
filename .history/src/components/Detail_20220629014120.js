
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
            <AddBtn></AddBtn>
            <GroupWatchBtn></GroupWatchBtn>
        </Controls>
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
`
const PlayBtn=styled.div``
const TrailerBtn=styled.div``
const AddBtn=styled.div``
const GroupWatchBtn=styled.div``