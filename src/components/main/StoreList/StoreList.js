/* eslint-disable */
import React, { useState } from "react";
import styled from "styled-components";

import StoreData from "../../../data/storeData.json";
import StoreCard from "./StoreCard";

const StoreList = (props) => {
  //   console.log(props);
  const nowPage = props.page;

  const Item = props.FilterItem;
  const zone = props.FilterZone;

  const [filterStoreArr, setFilterStoreArr] = useState([]);

  function pushStoreToArr(zone) {
    setFilterStoreArr((filterStoreArr) => [...filterStoreArr, zone]);
  }

  React.useEffect(() => {
    if (zone === "모든 지역") {
      setFilterStoreArr(StoreData);
    } else {
      StoreData.map((item) => {
        const stringVal = item.market;
        const filteringZone = stringVal.indexOf(zone) !== -1;
        if (filteringZone === true) {
          pushStoreToArr(item);
        }
      });
    }
  }, []);

  const slicedStoreDataset = filterStoreArr.slice(0, 10 * nowPage);

  return (
    <Wrap>
      <Title>프리미엄 가게</Title>
      {filterStoreArr.length === 0 && <NoResult>결과값이 없습니다.</NoResult>}
      {slicedStoreDataset.map((data) => {
        return <StoreCard key={data.id} {...data} />;
      })}
    </Wrap>
  );
};

const Wrap = styled.div`
  margin-top: 30px;
  display: block;
  width: 100%;
`;
const Title = styled.p`
  font-size: 15px;
  color: #1c79bc;
  font-weight: bold;

  margin-left: 15px;
`;

const NoResult = styled.p`
  font-size: 15px;
  color: #333333;
  font-weight: bold;
  margin-left: 15px;
`;
export default StoreList;
