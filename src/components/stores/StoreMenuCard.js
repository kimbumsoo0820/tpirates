/* eslint-disable */
import React from "react";
import styled from "styled-components";

import StoreSlick from "./StoreSlick";
import StoreSlick2 from "./StoreSlick2";
import SlickImgData from "./storeSlickImgs.json";
const StoreMenuCard = (props) => {
  //   console.log(props);
  return (
    <Wrap>
      <BlockCard>
        <FlexBetweenDiv>
          {props.data === 1 && <TitleP>전남스페셜</TitleP>}
          {props.data === 2 && <TitleP>활모둠회</TitleP>}
          <MenuCartBtn>메뉴 담기</MenuCartBtn>
        </FlexBetweenDiv>
        {props.data === 1 && <StoreSlick></StoreSlick>}
        {props.data === 2 && <StoreSlick2></StoreSlick2>}

        {props.data === 1 && (
          <Imgs src="https://media.vlpt.us/images/kbs2082/post/61311fe5-ad81-40b1-b1bc-c95f9fea397c/image.png"></Imgs>
        )}
        {props.data === 2 && (
          <Imgs src="https://media.vlpt.us/images/kbs2082/post/887a7369-fc1d-4d52-8b02-a9826ed2d956/image.png"></Imgs>
        )}
      </BlockCard>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: block;
`;

const MenuCartBtn = styled.p`
  color: #1c79bc;
  border: 1px solid #1c79bc;
  border-radius: 3px;
  width: 85px;
  text-align: center;
  height: 28px;
  font-size: 12px;
  background-color: #ffffff;
  letter-spacing: -0.6px;
  line-height: 26px;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

const TitleP = styled.p`
  display: flex;
  justify-content: space-between;
  font-size: 15px;
  font-weight: bold;
  color: #555555;
`;

const FlexBetweenDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const BlockCard = styled.div`
  margin-top: 15px;
  display: block;
  background-color: white;
  width: 400px;
  height: auto;
  padding: 10px;
`;

const Imgs = styled.img`
  width: 100%;
`;

export default StoreMenuCard;
