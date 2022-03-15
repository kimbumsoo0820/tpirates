/* eslint-disable */
import React from "react";
import styled from "styled-components";
import Filter from "./Filter/Filter";
import MainSlick from "./Slick/MainSlick";

import { useSelector, useDispatch } from "react-redux";
import { filterNow, filterZoneCode, filterItemCode } from "../../redux";

import RollingBanner from "./RollingBanner/RollingBanner";
import CouponSlick from "./Slick/CouponSlick";
import StoreList from "./StoreList/StoreList";

const MainPage = () => {
  const FilterNow = useSelector(filterNow);
  const FilterItem = useSelector(filterItemCode);
  const FilterZone = useSelector(filterZoneCode);

  return (
    <Background>
      <RollingBanner />
      <Filter />
      {FilterNow === null && (
        <>
          {FilterItem === null && FilterZone === null && <MainSlick />}
          <CouponSlick />
          <StoreList />
        </>
      )}
    </Background>
  );
};

const Background = styled.div`
  background-color: #eeeeee;
  height: 100%;
`;
export default MainPage;
