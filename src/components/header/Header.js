/* eslint-disable */
import React from "react";
import styled from "styled-components";

import SortData from "./headerSortData.json";
import HeaderHashTag from "./headerHashTagStringData.json";

const Header = () => {
  //추후 각 sort별 클릭 구현 (수산시장, 쇼핑몰, 도매)
  const [sort, setSort] = React.useState(SortData.sort);

  return (
    <HeaderWrap>
      <HeaderLogoLineDiv>
        <Logo src="https://www.tpirates.com/static/media/logo_ic.e5dc2602.svg" />
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
          return <HashTagString key={item.name}>{item.name}</HashTagString>;
        })}
      </SearchDiv>
    </HeaderWrap>
  );
};

const HeaderWrap = styled.div`
  padding: 0 12px;
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

export default Header;
