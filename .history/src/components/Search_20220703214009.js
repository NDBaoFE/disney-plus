import React from 'react'
import styled from 'styled-components'
function Search() {
  return (
    <Container>
      <h1>Search the Movie you like:</h1>
       <input type="text" id="fname" name="fname"></input>
    </Container>
  )
}

export default Search
const Container=styled.div`
display:flex;`