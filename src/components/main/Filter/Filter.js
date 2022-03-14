/* eslint-disable */
import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { filterAction } from "../../../redux/modules/filter";
import { filterNow, filterZone, filterItem } from "../../../redux";

import RegionList from "./Region/RegionList";
import ItemList from "./Item/ItemList";

const Filter = () => {
  const dispatch = useDispatch();

  const [checkSelected, setCheckSelected] = React.useState(false);
  const [checkSelected2, setCheckSelected2] = React.useState(false);

  const FilterNow = useSelector(filterNow);
  const nowZone = useSelector(filterZone);
  const nowItem = useSelector(filterItem);

  const getFilter = (nowState) => {
    dispatch(filterAction.getFilter(nowState));
    setCheckSelected(!checkSelected);
  };
  const getFilter2 = (nowState) => {
    dispatch(filterAction.getFilter(nowState));
    setCheckSelected2(!checkSelected2);
  };
  return (
    <div>
      <ButtonDiv>
        <FilterButton
          onClick={() => {
            getFilter("zone");
          }}
        >
          {nowZone}
        </FilterButton>
        <FilterButton
          onClick={() => {
            getFilter2("label");
          }}
        >
          {nowItem}
        </FilterButton>
        <FilterButton>기본 순 ▼</FilterButton>
      </ButtonDiv>
      <Lists>
        {FilterNow === "zone" && checkSelected && (
          <RegionList nowZone={nowZone} />
        )}
        {FilterNow === "label" && checkSelected2 && <ItemList />}
      </Lists>
    </div>
  );
};

const ButtonDiv = styled.div`
  display: flex;
  background-color: #777777;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const FilterButton = styled.button`
  display: flex;
  background-color: white;
  width: 140px;
  height: 41px;
  border: 1px solid #dddddd;
  color: #1c79bc;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const Lists = styled.div`
  /* overflow: auto; */
`;

export default Filter;