/* eslint-disable */
import React from "react";
import styled from "styled-components";
import zoneData from "../../../../data/zoneData.json";
import { filterZone } from "../../../../redux";
import { useSelector, useDispatch } from "react-redux";

import RegionCard from "./RegionCard";

const Region = (props) => {
  const nowZone = props.nowZone;

  const foundZone = zoneData.find((element) => element.label === nowZone);

  return (
    <div>
      {zoneData.map((zoneData) => {
        return (
          <RegionCard
            key={zoneData.label}
            {...zoneData}
            nowZone={nowZone}
            foundZone={foundZone}
          />
        );
      })}
    </div>
  );
};

export default Region;
