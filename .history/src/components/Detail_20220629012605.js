import { resetClipboardStubOnView } from '@testing-library/user-event/dist/types/utils';
import React from 'react'
import styled from 'styled-components'

function Detail() {
  return (
    <Container>
      
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

`