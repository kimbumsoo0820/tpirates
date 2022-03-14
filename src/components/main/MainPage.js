/* eslint-disable */
import React from "react";
import styled from "styled-components";
import Filter from "./Filter/Filter";
import { useSelector, useDispatch } from "react-redux";
import { dataActions } from "../../redux/modules/data";

import RollingBanner from "./RollingBanner/RollingBanner";

const MainPage = () => {
  const dispatch = useDispatch();

  dispatch(dataActions.getDataAPI());
  return (
    <div>
      <RollingBanner />
      <Filter />
    </div>
  );
};

export default MainPage;
