/* eslint-disable */
import React, { useState } from "react";
import styled from "styled-components";
import Filter from "./Filter/Filter";
import MainSlick from "./Slick/MainSlick";
import { useInView } from "react-intersection-observer";

import { useSelector, useDispatch } from "react-redux";
import { filterNow, filterZone, filterItem } from "../../redux";

import { nowPageAction } from "../../redux/modules/nowPage";
import { scrollPageAction } from "../../redux/modules/scrollPage";

import RollingBanner from "./RollingBanner/RollingBanner";
import CouponSlick from "./Slick/CouponSlick";
import StoreList from "./StoreList/StoreList";

const MainPage = () => {
  const [ref, inView] = useInView();
  const dispatch = useDispatch();
  const FilterNow = useSelector(filterNow);
  const FilterZone = useSelector(filterZone);
  const FilterItem = useSelector(filterItem);

  const [page, setPage] = useState(1);

  //무한스크롤 Intersection Observer
  React.useLayoutEffect(() => {
    dispatch(nowPageAction.getNowPage("mainPage"));
    if (inView === true) {
      setPage(page + 1);
      dispatch(scrollPageAction.getScroll(page));
    }
  }, [inView]);

  return (
    <Background>
      <RollingBanner />
      <Filter />
      {FilterNow === null && (
        <>
          {FilterItem === "모든품목" && FilterZone === "모든 지역" && (
            <MainSlick />
          )}
          <CouponSlick />
          <StoreList
            page={page}
            FilterZone={FilterZone}
            FilterItem={FilterItem}
          />
          <Observer ref={ref}></Observer>
        </>
      )}
      <IMG src="https://media.vlpt.us/images/kbs2082/post/22befa09-8d9f-40a2-b140-99e58f68eb57/image.png" />
    </Background>
  );
};

const Background = styled.div`
  background-color: #eeeeee;
  height: auto;
`;
const Observer = styled.div`
  height: 100px;
  width: 100%;
  background-color: transparent;
  /* background-color: white; */

  margin-top: -100px;
`;
const IMG = styled.img`
  width: 100%;
`;
export default MainPage;
