/* eslint-disable */
import React from "react";
import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";

import { filterAction } from "../../../../redux/modules/filter";

const RegionLocation = (props) => {
  const dispatch = useDispatch();
  // console.log(props);
  const label = props.label;
  const code = props.code;

  const clickLocations = (location, code) => {
    dispatch(filterAction.getZone(location));
    dispatch(filterAction.getZoneCode(code));
  };

  return (
    <div>
      <RegionButtonUnder
        onClick={() => {
          clickLocations(label, code);
          props.getFilter();
        }}
      >
        {label}
      </RegionButtonUnder>
    </div>
  );
};

const RegionButtonUnder = styled.button`
  display: flex;
  background-color: white;
  width: 100%;
  height: 30px;
  border: none;
  font-size: 13px;
  color: #777777;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
export default RegionLocation;
