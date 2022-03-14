/* eslint-disable */
import React from "react";
import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";
import { filterAction } from "../../../../redux/modules/filter";

const ItemCard = (props) => {
  const dispatch = useDispatch();
  console.log(props);
  const Item = props;

  const selectItem = (item) => {
    dispatch(filterAction.getLabel(item));
  };

  return (
    <div>
      <ButtonDiv>
        <RegionButton
          onClick={() => {
            selectItem(Item.label);
            props.getFilter2();
          }}
        >
          {Item.label}
        </RegionButton>
      </ButtonDiv>
    </div>
  );
};

const ButtonDiv = styled.div`
  width: 139px;
  background-color: white;
`;

const RegionButton = styled.button`
  display: flex;
  background-color: white;
  width: 135px;
  height: 85px;
  border: 1px solid #dddddd;
  color: #777777;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
export default ItemCard;
