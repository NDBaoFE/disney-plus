import React from 'react'
import styled from 'styled-components'
function Viewers() {
  return (
    <Container>
        <Wrap>
            <img src='./images/viewers-disney.png'/>
        </Wrap>
        <Wrap>
            <img src='./images/viewers-disney.png'/>
        </Wrap>
        <Wrap>
            <img src='./images/viewers-disney.png'/>
        </Wrap>
        <Wrap>
            <img src='./images/viewers-disney.png'/>
        </Wrap>
        <Wrap>
            <img src='./images/viewers-disney.png'/>
        </Wrap>
    </Container>
  )
}

export default Viewers

const Container=styled.div`
margin-top:30px;
display:grid;
grid-template-columns`
const Wrap=styled.div``