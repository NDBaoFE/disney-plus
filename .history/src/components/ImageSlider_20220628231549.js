import React from 'react'
import Slider from 'react-slick';
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function ImageSlider() {


  let settings ={
    dots:true,
    infinite:true,
    speed:500,
    slidesToScroll: 1,
    slidesToShow:1
  };
  return (
    <Carousel>ImageSlider</Carousel>
  )
}

export default ImageSlider

const Carousel= styled.(Slider)