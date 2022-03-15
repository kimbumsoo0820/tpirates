/* eslint-disable */
import React from "react";
import styled from "styled-components";

import StoreData from "../../../data/storeData.json";
import StoreCard from "./StoreCard";

const StoreList = () => {
  //   console.log(StoreData);
  const StoreDataset = StoreData;
  return (
    <Wrap>
      <Title>프리미엄 가게</Title>
      {StoreDataset.map((data) => {
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
export default StoreList;
