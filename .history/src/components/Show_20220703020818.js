import React from 'react'
import styled from 'styled-components'
import {useParams} from 'react-router-dom'

function Show() {
    const { id } = useParams();
  return (
    <div>Show</div>
  )
}

export default Show