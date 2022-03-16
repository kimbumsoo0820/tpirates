/* eslint-disable */
import React from "react";
import styled from "styled-components";

const MenuSectionMoreButton = (props) => {
  return (
    <div>
      {props.arrow !== true && (
        <MenuSectionMore
          onClick={() => {
            props.MenuMoreClick();
          }}
        >
          메뉴구성 상세보기{" "}
          <IMG src="	https://www.tpirates.com/static/media/ic_chevron_right.846658e9.svg"></IMG>{" "}
        </MenuSectionMore>
      )}
      {props.arrow === true && (
        <MenuSectionMore
          onClick={() => {
            props.MenuMoreClick();
          }}
        >
          메뉴구성 접기{" "}
          <IMG2 src="	https://www.tpirates.com/static/media/ic_chevron_right.846658e9.svg"></IMG2>{" "}
        </MenuSectionMore>
      )}
    </div>
  );
};

const MenuSectionMore = styled.p`
  border: 1px solid #1c79bc;
  border-radius: 5px;
  background-color: #ffffff;
  padding: 11px 15px;
  margin: 0 16px;
  text-align: center;
  color: #1c79bc;
  font-size: 15px;
  line-height: 20px;
  letter-spacing: -0.7px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const IMG = styled.img``;
const IMG2 = styled.img`
  transform: rotate(180deg);
`;
export default MenuSectionMoreButton;
