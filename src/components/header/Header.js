/* eslint-disable */
import React from "react";
import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";
import { nowPageAction } from "../../redux/modules/nowPage";
import { nowPage } from "../../redux";
import { history } from "../../redux/configureStore";
import SortData from "./headerSortData.json";
import HeaderHashTag from "./headerHashTagStringData.json";

const Header = () => {
  const nowPageCheck = useSelector(nowPage);

  //추후 각 sort별 클릭 구현 (수산시장, 쇼핑몰, 도매)
  const [sort, setSort] = React.useState(SortData.sort);

  const refresh = () => {
    location.href = "/";
  };
  const goToBack = () => {
    history.push("/");
  };

  return (
    <>
      {nowPageCheck === "mainPage" && (
        <>
          <HeaderWrap>
            <HeaderLogoLineDiv>
              <Logo
                onClick={() => {
                  refresh();
                }}
                src="https://www.tpirates.com/static/media/logo_ic.e5dc2602.svg"
              />
              <StringDiv>
                {sort.map((item) => {
                  return (
                    <StringSort active={item.active} key={item.name}>
                      {item.name}
                    </StringSort>
                  );
                })}
              </StringDiv>
            </HeaderLogoLineDiv>

            <SearchDiv>
              <SearchIcon src="https://tpirates.com/static/media/ftp_fa_Search.0d0a1317.svg"></SearchIcon>
              {HeaderHashTag.tags.map((item) => {
                return (
                  <HashTagString key={item.name}>{item.name}</HashTagString>
                );
              })}
            </SearchDiv>
          </HeaderWrap>
        </>
      )}
      {nowPageCheck === "storePage" && (
        <>
          <StoreHeaderWrap>
            <FlexDiv>
              <BackArrowImg
                onClick={() => {
                  goToBack();
                }}
                src="https://www.tpirates.com/static/media/bul_back.3bf9ebfc.svg"
              ></BackArrowImg>
              <TitleText>전남수산 마포농수산물시장</TitleText>
            </FlexDiv>
            <FlexDiv>
              <img src="https://www.tpirates.com/static/media/bul_view.b0cb34f7.svg" />
              <ShowText>10.3 만</ShowText>
            </FlexDiv>
          </StoreHeaderWrap>
        </>
      )}
    </>
  );
};

const HeaderWrap = styled.div`
  padding: 0 12px;
  position: fixed;
  width: 396px;
  background-color: white;
  z-index: 10000000;
`;
const HeaderLogoLineDiv = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  width: 150px;
  height: 28px;
  cursor: pointer;
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
`;
const StringDiv = styled.div`
  width: 100%;
  display: flex;
  margin-left: 50px;
`;
const StringSort = styled.p`
  height: 23px;
  background-color: ${(props) => (props.active ? "#1D79BC" : null)};
  color: ${(props) => (props.active ? "white" : null)};
  border-radius: 10px;
  margin-left: 10px;
  padding: 0 2px;
  cursor: pointer;

  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
`;

const SearchDiv = styled.div`
  width: 376px;
  height: 44px;
  margin-left: 10px;
  display: flex;
  align-items: center;
  /* padding: 0 12px; */
`;

const SearchIcon = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 15px;

  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
`;

const HashTagString = styled.p`
  color: #333333;
  font-size: 15px;
  margin-right: 5px;
  cursor: pointer;

  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
`;

const StoreHeaderWrap = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  width: 398px;
  height: 35px;
  padding: 11px;
  background-color: white;
  z-index: 10000000;
  align-items: center;
`;
const FlexDiv = styled.div`
  display: flex;
`;

const BackArrowImg = styled.img`
  cursor: pointer;
`;

const TitleText = styled.div`
  font-size: 15px;
  color: #555555;
  font-weight: bold;
  margin-left: 13px;
`;

const ShowText = styled.div`
  font-size: 12px;
  color: #999;
  display: flex;
  align-items: center;
`;

export default Header;
