/* eslint-disable */
import React from "react";
import styled from "styled-components";
import { history } from "../../../redux/configureStore";
import { useSelector, useDispatch } from "react-redux";
import { nowPageAction } from "../../../redux/modules/nowPage";

const StoreCard = (props) => {
  //   console.log(props);
  const dispatch = useDispatch();
  const thumbnail = props.thumbnail;
  const label = props.label;
  const description = props.description;
  const market = props.market;
  const uri = props.uri;
  const summary = props.summary;
  const openClose = props.state;

  const clickStore = () => {
    dispatch(nowPageAction.getNowPage("storePage"));
    history.push(`${uri}`);
  };

  return (
    <Wrap
      onClick={() => {
        clickStore();
      }}
    >
      <StoreImg src={thumbnail} />
      <DesWrapDiv>
        <DisplayBlockDiv>
          <StoreName>
            {label}
            <PmediumGrayMarket>{market}</PmediumGrayMarket>{" "}
          </StoreName>
          <PmediumGray>{description}</PmediumGray>
          <RatingLine>
            <Rating>
              <Star>★</Star>
              {summary.rating} <Comment>({summary.comments})</Comment>
            </Rating>
            {openClose === "OPEN" && <TodayPrice>오늘시세</TodayPrice>}
            {openClose === "CLOSED" && <TodayPrice>전일시세</TodayPrice>}
          </RatingLine>
        </DisplayBlockDiv>
      </DesWrapDiv>
    </Wrap>
  );
};

const Star = styled.p`
  margin-top: -2px;
  margin-right: 2px;
  color: #ff9300;
  font-size: 15px;
`;
const Wrap = styled.div`
  width: 100%;
  height: 130px;
  display: flex;
  margin-top: 10px;
  background-color: white;
  cursor: pointer;

  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
`;
const StoreImg = styled.img`
  width: 130px;
  height: 130px;
`;
const DesWrapDiv = styled.div`
  padding: 10px;
`;

const DisplayBlockDiv = styled.div`
  display: block;
`;

const StoreName = styled.div`
  font-size: 16px;
  display: flex;

  align-items: center;
  font-weight: bold;
  color: #333333;
`;
const PmediumGrayMarket = styled.div`
  font-size: 13px;
  color: #999999;
  font-weight: bold;
  margin-left: 5px;
`;
const PmediumGray = styled.div`
  font-size: 13px;
  color: #999999;
  font-weight: bold;
  width: 260px;
  margin-top: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const RatingLine = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
`;
const Rating = styled.div`
  font-size: 15px;
  display: flex;
`;
const Comment = styled.div`
  font-size: 15px;
  margin-left: 3px;
`;
const TodayPrice = styled.div`
  font-size: 13px;
  color: #1c79bc;
`;
export default StoreCard;
