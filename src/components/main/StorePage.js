/* eslint-disable */
import React from "react";
import styled from "styled-components";

import StoreInfo from "../stores/StoreInfo";
import StorePriceInfo from "../stores/StorePriceInfo";
import StoreWalk from "../stores/StoreWalk";

import { useSelector, useDispatch } from "react-redux";
import { nowPageAction } from "../../redux/modules/nowPage";

const StorePage = () => {
  const dispatch = useDispatch();
  const [priceButton, setPriceButton] = React.useState(true);
  const [walkButton, setWalkButton] = React.useState(false);

  const [scrollPosition, setScrollPosition] = React.useState(0);

  React.useEffect(() => {
    dispatch(nowPageAction.getNowPage("storePage"));
  });

  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    console.log(window.scrollY || document.documentElement.scrollTop);
  };
  React.useEffect(() => {
    window.addEventListener("scroll", updateScroll);
    console.log(scrollPosition);
  }, []);

  const priceOnclick = () => {
    if (priceButton !== true) {
      setPriceButton(!priceButton);
      setWalkButton(!walkButton);
    }
  };

  const walkOnclick = () => {
    if (walkButton !== true) {
      setWalkButton(!walkButton);
      setPriceButton(!priceButton);
    }
  };
  return (
    <Wrap>
      <StoreInfo />
      <StoreBackground>
        <Wrap>
          <FilterFlexDiv scrollPosition={scrollPosition}>
            <FilterButtonPrice
              priceButton={priceButton}
              onClick={() => {
                priceOnclick();
              }}
            >
              가격 정보
            </FilterButtonPrice>
            <FilterButtonWalk
              walkButton={walkButton}
              onClick={() => {
                walkOnclick();
              }}
            >
              탐방기
            </FilterButtonWalk>
            <FilterButton>리뷰 270</FilterButton>
            <FilterButton>위치</FilterButton>
          </FilterFlexDiv>
          {priceButton === true && <StorePriceInfo />}
          {walkButton === true && <StoreWalk />}
        </Wrap>
      </StoreBackground>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: block;
`;

const FilterButtonPrice = styled.p`
  display: flex;
  justify-content: center;
  width: 110px;
  height: 40px;
  line-height: 40px;
  background-color: ${(props) => (props.priceButton ? "white" : "#eeeeee")};
  font-weight: inherit;
  border: 1px #dddddd solid;
  font-size: 13px;
  color: ${(props) => (props.priceButton ? "#1c79bc" : "#777777")};

  cursor: pointer;
`;
const FilterButtonWalk = styled.p`
  display: flex;
  justify-content: center;
  width: 100px;
  height: 40px;
  line-height: 40px;
  background-color: ${(props) => (props.walkButton ? "white" : "#eeeeee")};
  font-weight: inherit;
  border: 1px #dddddd solid;
  font-size: 13px;
  color: ${(props) => (props.walkButton ? "#1c79bc" : "#777777")};

  cursor: pointer;
`;
const FilterButton = styled.p`
  display: flex;
  justify-content: center;
  width: 100px;
  height: 40px;
  line-height: 40px;
  background-color: #eeeeee;
  font-weight: inherit;
  border: 1px #dddddd solid;
  font-size: 13px;
  color: #777777;

  cursor: pointer;
`;
const FilterFlexDiv = styled.div`
  /* margin-top: 10px; */
  position: ${(props) => (props.scrollPosition > 200 ? "fixed" : null)};
  top: ${(props) => (props.scrollPosition > 200 ? "40px" : null)};
  /* position: fixed; */
  z-index: 99999;
  display: flex;
  width: 100%;
  height: 50px;
`;
const StoreBackground = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #eeeeee;
`;

export default StorePage;
