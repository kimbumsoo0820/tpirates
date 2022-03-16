import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { Component } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import SlickImgData from "./storeSlickImgs.json";

export default class SimpleSlider extends Component {
  render(props) {
    const settings = {
      //   autoplay: true, // 자동 스크롤 사용 여부
      dots: true,
      infinite: true,
      lazyLoad: true,
      speed: 200,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };

    return (
      <Wrap>
        <Slider {...settings}>
          <StoreImg src={SlickImgData[2].image}></StoreImg>
          <StoreImg src={SlickImgData[3].image}></StoreImg>
          <StoreImg src={SlickImgData[4].image}></StoreImg>
        </Slider>
      </Wrap>
    );
  }
}

const StoreImg = styled.img`
  width: 100%;
  height: 230px;
  /* object-fit: cover; */
`;

const Wrap = styled.div`
  cursor: pointer;
  margin: 5% auto;
  width: 100%;
  .slick-prev:before {
  }
  .slick-next:before {
    opacity: 1;
    color: black;
  }

  .slick-dots {
    .slick-active {
      button::before {
        width: 5px;
        color: #777777;
      }
    }
    button::before {
      color: #777777;
      width: 5px;
    }
  }
`;

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}
