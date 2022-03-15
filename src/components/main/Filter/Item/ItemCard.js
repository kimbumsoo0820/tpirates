/* eslint-disable */
import React from "react";
import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";
import { filterAction } from "../../../../redux/modules/filter";

const ItemCard = (props) => {
  const dispatch = useDispatch();
  //   console.log(props);
  const Item = props;

  const selectItem = (item, code) => {
    if (item !== null) {
      // console.log(item);
      dispatch(filterAction.getLabel(item));
      dispatch(filterAction.getLabelCode(code));
    }
  };

  return (
    <div>
      <ButtonDiv>
        <RegionButton
          clickAble={Item.label}
          onClick={() => {
            if (Item.label !== null) {
              selectItem(Item.label, Item.code);
              props.getFilter2();
            }
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
  width: 140px;
  height: 85px;
  border: 1px solid #dddddd;
  color: #777777;
  justify-content: center;
  align-items: center;
  cursor: ${(props) => (props.clickAble ? "pointer" : null)}; ;
`;
export default ItemCard;
