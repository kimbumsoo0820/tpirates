/* eslint-disable */
import React from "react";
import styled from "styled-components";
import StoreMenuCard from "./StoreMenuCard";

import MenuSectionMoreButton from "./MenuSectionMoreButton";
import PriceSectionMoreButton from "./PriceSectionMoreButton";

const StorePriceInfo = () => {
  const [menuMore, setMenuMore] = React.useState(false);
  const [priceMore, setPriceMore] = React.useState(false);

  const MenuMoreClick = () => {
    setMenuMore(!menuMore);
  };
  const PriceMoreClick = () => {
    setPriceMore(!priceMore);
  };
  return (
    <Wrap>
      <CallDiv>
        전화시 '인어교주해적단 보고 전화드립니다.' 말씀해 주세요.
      </CallDiv>
      <Imgs src="https://media.vlpt.us/images/kbs2082/post/d9bb7cfd-f5ae-4989-bebf-0a656cbecc67/image.png"></Imgs>
      <StoreMenuCard data={1}></StoreMenuCard>
      {menuMore === true && <StoreMenuCard data={2}></StoreMenuCard>}

      <MenuSelectionWrap>
        {menuMore === false && (
          <>
            <MenuBlur></MenuBlur>

            <MenuSectionMoreButton
              MenuMoreClick={MenuMoreClick}
            ></MenuSectionMoreButton>
          </>
        )}
        {menuMore === true && (
          <MenuSectionMoreButton
            MenuMoreClick={MenuMoreClick}
            arrow={true}
          ></MenuSectionMoreButton>
        )}
      </MenuSelectionWrap>

      <Wrap>
        <IMG src="https://media.vlpt.us/images/kbs2082/post/7abcbf3c-d16b-40b4-a717-f3abc1c81ecb/image.png"></IMG>
        {priceMore === true && (
          <IMG2 src="https://media.vlpt.us/images/kbs2082/post/eb772ebf-e57b-47cb-9b4f-773f7d5c41b6/image.png"></IMG2>
        )}

        <PriceSelectionWrap>
          {priceMore === false && (
            <>
              <MenuBlur></MenuBlur>

              <PriceSectionMoreButton
                PriceMoreClick={PriceMoreClick}
              ></PriceSectionMoreButton>
            </>
          )}
          {priceMore === true && (
            <PriceSectionMoreButton
              PriceMoreClick={PriceMoreClick}
              arrow={true}
            ></PriceSectionMoreButton>
          )}
        </PriceSelectionWrap>
      </Wrap>
      <IMG src="https://media.vlpt.us/images/kbs2082/post/22befa09-8d9f-40a2-b140-99e58f68eb57/image.png" />
    </Wrap>
  );
};

const Wrap = styled.div`
  display: block;
`;

const IMG = styled.img`
  width: 100%;
`;
const IMG2 = styled.img`
  width: 100%;
  margin-top: -5px;
`;

const MenuSelectionWrap = styled.div`
  position: relative;
  background-color: #ffffff;
  padding-bottom: 36px;
`;
const PriceSelectionWrap = styled.div`
  position: relative;
  background-color: #ffffff;
  padding-bottom: 36px;
`;

const MenuBlur = styled.div`
  position: absolute;
  top: -114px;
  width: 100%;
  height: 114px;
  background: transparent linear-gradient(181deg, #ffffff12 0%, #ffffff 100%) 0%
    0% no-repeat padding-box;
  opacity: 1;
  pointer-events: none;
`;

const Imgs = styled.img`
  width: 100%;
`;

const CallDiv = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -1px;
  font-size: 14px;
  font-weight: bold;
  width: 100%;
  height: 80px;
  color: #1c79bc;
  background-color: white;
`;

export default StorePriceInfo;
