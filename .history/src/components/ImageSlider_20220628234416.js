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
    slidesToShow:1,
    autoplay:true
  };
  return (
    <Carousel {...settings}>
      <Wrap>
        <img src="./images/slider-badging.jpg" />
      </Wrap>
      <Wrap>
        <img src="./images/slider-badag.jpg" />
      </Wrap>
      </Carousel>
  )
}

export default ImageSlider

const Carousel= styled(Slider)`
margin-top:20px;

ul li button{
  &:before{
    font-size:10px;
    color:rgba(150 ,158,171);
  }
}
li.slick-active button::before{
  color:white;
}
.slick-list{
  overflow:visible;
}
button{
  z-index:1;
}`
  const Wrap=styled.div`
  img{
    border:4px solid transparent;
    width:100%;
    height:100%;
    boder-radius:4px;
    box-shadow: rgb( 0 0 0 / 69%) 0 26px 30px -10px, rgb( 0 0 0 / 73%) 0px 16px 10px -10px;

    &:hover{
      border:4px solid rgba(249,249,249,0.8);
    }
  }`