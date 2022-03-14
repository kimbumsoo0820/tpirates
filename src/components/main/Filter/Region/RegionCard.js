/* eslint-disable */
import React from "react";
import styled from "styled-components";
import RegionLocation from "./RegionLocation";

import { useSelector, useDispatch } from "react-redux";
import { filterAction } from "../../../../redux/modules/filter";
import { getZone } from "../../../../redux";

const RegionCard = (props) => {
  const dispatch = useDispatch();

  const [checkSelectedZone, setCheckSelectedZone] = React.useState(false);

  const cardInfo = props;
  const locations = props.locations;
  const label = props.label;
  const selectedZone = props.foundZone;
  const nowZone = props.nowZone;
  // console.log(props);

  const clickLocations = (zone) => {
    dispatch(filterAction.getZone(zone));
    setCheckSelectedZone(!checkSelectedZone);
  };
  return (
    <div>
      <ButtonDiv>
        {locations.length !== 0 && (
          <RegionButtonDiv>
            <RegionButton
              onClick={() => {
                clickLocations(cardInfo.label);
              }}
            >
              {cardInfo.label}▾
            </RegionButton>

            {selectedZone !== undefined &&
              nowZone === label &&
              checkSelectedZone && (
                <>
                  {selectedZone.locations.map((locations) => {
                    return (
                      <RegionLocation
                        key={locations.code}
                        {...locations}
                        selectedZone={selectedZone}
                      />
                    );
                  })}
                </>
              )}
          </RegionButtonDiv>
        )}

        {locations.length === 0 && (
          <RegionButton>{cardInfo.label}</RegionButton>
        )}
      </ButtonDiv>
    </div>
  );
};

const ButtonDiv = styled.div`
  display: block;
  background-color: white;
  width: 100%;
  justify-content: center;
  align-items: center;
  overflow: auto;
`;

const RegionButtonDiv = styled.div`
  display: block;
  background-color: white;
  width: 100%;

  border: none;
  border-bottom: 0.1px solid #dddddd;
  justify-content: center;
  align-items: center;
`;

const RegionButton = styled.button`
  display: flex;
  background-color: white;
  width: 100%;
  height: 40px;
  border: none;

  color: #777777;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export default RegionCard;
