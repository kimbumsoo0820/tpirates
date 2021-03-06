/* eslint-disable */
import React from "react";
import styled from "styled-components";

import BannerData from "../../../data/bannerData.json";
import { history } from "../../../redux/configureStore";

const RollingBanner = () => {
  const [BannerDataSet, SetBannerDataSet] = React.useState(0);
  const [BannerStringSet, SetBannerStringSet] = React.useState(BannerData[0]);
  const [BannerStringSet2, SetBannerStringSet2] = React.useState(BannerData[1]);

  const [DropDownTrueOrFalse, SetDropDownTrueOrFalse] = React.useState(false);

  //화살표 모양 반전
  const DropDownChange = () => {
    SetDropDownTrueOrFalse(!DropDownTrueOrFalse);
  };
  //롤링배너 타이머
  React.useEffect(() => {
    setTimeout(() => {
      if (BannerDataSet >= 1) {
        SetBannerDataSet(0);
      } else {
        SetBannerDataSet(BannerDataSet + 1);
      }
    }, 2200);
  }, [DropDownTrueOrFalse, BannerDataSet]);

  const Page = () => {
    history.push(`${BannerData.uri}`);
  };
  return (
    <OutWrap>
      <Wrap
        onClick={() => {
          Page();
        }}
      >
        <RollingBannerDiv>
          <RollingString BannerDataSet={BannerDataSet}>
            {BannerStringSet.label} : {BannerStringSet.price}{" "}
            {BannerStringSet.comment}
          </RollingString>

          <RollingString2 BannerDataSet={BannerDataSet}>
            {BannerStringSet2.label} : {BannerStringSet2.price}{" "}
            {BannerStringSet2.comment}
          </RollingString2>
        </RollingBannerDiv>

        {DropDownTrueOrFalse === false && (
          <DownOrUpArrow
            onClick={() => {
              DropDownChange();
            }}
          >
            ▼
          </DownOrUpArrow>
        )}
        {DropDownTrueOrFalse && (
          <DownOrUpArrow
            onClick={() => {
              DropDownChange();
            }}
          >
            ▲
          </DownOrUpArrow>
        )}
      </Wrap>

      <ArrowTrueWrap active={DropDownTrueOrFalse}>
        <RollingBannerDiv>
          <RollingStringSub>
            {BannerData[BannerDataSet].permalink}
          </RollingStringSub>
        </RollingBannerDiv>
      </ArrowTrueWrap>
    </OutWrap>
  );
};

const OutWrap = styled.div`
  display: block;
  margin-top: 100px;
`;

const Wrap = styled.div`
  display: flex;
  width: 100%;
  height: 35px;
  margin: 0;
  background-color: #1c79bc;
`;

const RollingBannerDiv = styled.div`
  width: 380px;
  height: 35px;
  margin: 0;
  overflow: hidden;
  justify-content: center;
  text-align: center;
  align-items: center;

  cursor: pointer;
`;
const RollingString = styled.p`
  font-size: 15px;

  color: white;
  margin-left: 5px;
  transform: ${(props) =>
    props.BannerDataSet === 0 ? "translateY(20px)" : "translateY(-8px)"};
  transition: all 0.5s;

  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
`;

const RollingString2 = styled.p`
  font-size: 15px;
  margin: 5px;
  color: white;
  margin-left: 5px;
  transform: ${(props) =>
    props.BannerDataSet === 0 ? "translateY(-43px)" : "translateY(0px)"};
  transition: all 0.5s;

  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
`;

const RollingStringSub = styled.p`
  font-size: 15px;
  margin: 5px;
  color: white;
  margin-left: 5px;
`;

const DownOrUpArrow = styled.p`
  color: white;
  /* width: 20px; */
  font-size: 18px;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  cursor: pointer;

  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
`;

const ArrowTrueWrap = styled.div`
  display: ${(props) => (props.active ? "flex" : "none")};
  width: 420px;
  height: 35px;
  background-color: #1c79bc;
`;

export default RollingBanner;
