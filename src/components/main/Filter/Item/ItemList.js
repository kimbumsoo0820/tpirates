/* eslint-disable */
import React from "react";
import styled from "styled-components";

import itemData from "../../../../data/itemData.json";
import ItemCard from "./ItemCard";

const Item = (props) => {
  // console.log(itemData);

  return (
    <ButtonDiv>
      {itemData.map((item) => {
        return (
          <ItemCard
            key={item.label}
            {...item}
            getFilter2={props.getFilter2}
          ></ItemCard>
        );
      })}
    </ButtonDiv>
  );
};

const ButtonDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(139px, 1fr));
  width: 100%;
  margin: auto;
`;

export default Item;
