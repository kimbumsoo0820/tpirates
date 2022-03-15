import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { Component } from "react";
import styled from "styled-components";
import Slider from "react-slick";

import slickData from "../../../data/slickData.json";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      autoplay: true, // 자동 스크롤 사용 여부
      dots: true,
      infinite: true,
      lazyLoad: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <Wrap>
        <Slider {...settings}>
          {slickData.map((data) => {
            return (
              <div key={data.id}>
                <SlickDecWrapDivBlock>
                  <SlickDecDivFlexBetween>
                    <PLargest>
                      {data.label} &nbsp;{" "}
                      <PmediumDark>{data.market}</PmediumDark>{" "}
                    </PLargest>
                    <PmediumDark>전일시세</PmediumDark>{" "}
                  </SlickDecDivFlexBetween>
                  <SlickDecDivFlexBetween>
                    <PmediumGray>{data.description}</PmediumGray>{" "}
                    <SlickDecDivDivFlex>
                      <StarRating>★{data.summary.rating}</StarRating>
                      <PmediumGray>{data.summary.comments}</PmediumGray>
                    </SlickDecDivDivFlex>
                  </SlickDecDivFlexBetween>
                </SlickDecWrapDivBlock>
                <StoreImgDiv>
                  <StoreImg src={data.thumbnail}></StoreImg>
                </StoreImgDiv>
              </div>
            );
          })}
        </Slider>
      </Wrap>
    );
  }
}

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
        color: #333333;
      }
    }
    button::before {
      color: #e9e9e9;
      width: 5px;
    }
  }
`;

const SlickDecWrapDivBlock = styled.div`
  height: 50px;
  display: block;
  background-color: white;
  padding: 10px;
`;

const SlickDecDivFlexBetween = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
`;
const SlickDecDivDivFlex = styled.div`
  display: flex;
  background-color: white;
`;

const PLargest = styled.div`
  display: flex;
  font-size: 15px;
  align-items: center;
  color: #555555;
`;
const PmediumDark = styled.div`
  font-size: 13px;
  color: #777777;
`;
const PmediumGray = styled.div`
  font-size: 13px;
  color: #999999;
`;
const StarRating = styled.div`
  font-size: 13px;
  margin-right: 8px;
  color: #ff9300;
`;
const StoreImgDiv = styled.div`
  height: 230px;
  width: 100%;
`;
const StoreImg = styled.img`
  width: 100%;
  height: 230px;
  /* object-fit: cover; */
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
