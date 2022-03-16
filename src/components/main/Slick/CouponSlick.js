/* eslint-disable */
import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class PauseOnHover extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <>
        <Title>이번 주 쿠폰</Title>
        <Container>
          <Slider {...settings}>
            <div>
              <IMG src="/image/Coupon3.PNG" />
            </div>
            <div>
              <IMG src="/image/Coupon3.PNG" />
            </div>
            <div>
              <IMG src="/image/Coupon3.PNG" />
            </div>
            <div>
              <IMG src="/image/Coupon3.PNG" />
            </div>
            <div>
              <IMG src="/image/Coupon3.PNG" />
            </div>
            <div>
              <IMG src="/image/Coupon3.PNG" />
            </div>
          </Slider>
        </Container>
      </>
    );
  }
}
const IMG = styled.img`
  width: 140px;
  height: 73px;
  cursor: pointer;
`;
const Container = styled.div`
  background-color: #f8f8f8;
  .slick-dots {
    .slick-active {
      button::before {
        display: none;
      }
    }
    button::before {
      display: none;
    }
  }
`;

const Title = styled.p`
  font-size: 15px;
  color: #1c79bc;
  font-weight: bold;
  margin-top: 50px;
  margin-left: 15px;
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
