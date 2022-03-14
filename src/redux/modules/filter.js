/* eslint-disable */
import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

const GET_FILTER = "GET_FILTER";
const GET_ZONE = "GET_ZONE";
const GET_ZONE_CODE = "GET_ZONE_CODE";
const GET_LABEL = "GET_LABEL";
const GET_LABEL_CODE = "GET_LABEL_CODE";

const getFilter = createAction(GET_FILTER, (data) => ({ data }));
const getZone = createAction(GET_ZONE, (data) => ({ data }));
const getZoneCode = createAction(GET_ZONE_CODE, (data) => ({ data }));
const getLabel = createAction(GET_LABEL, (data) => ({ data }));
const getLabelCode = createAction(GET_LABEL_CODE, (data) => ({ data }));

const initialState = {
  filter: "",
  zone: "모든 지역 ▼",
  zoneCode: "",
  item: "모든품목 ▼",
  itemCode: "",
};

export default handleActions(
  {
    [GET_FILTER]: (state, action) =>
      produce(state, (draft) => {
        draft.filter = action.payload.data;
      }),
    [GET_ZONE]: (state, action) =>
      produce(state, (draft) => {
        draft.zone = action.payload.data;
      }),
    [GET_ZONE_CODE]: (state, action) =>
      produce(state, (draft) => {
        draft.zoneCode = action.payload.data;
      }),
    [GET_LABEL]: (state, action) =>
      produce(state, (draft) => {
        draft.item = action.payload.data;
      }),
    [GET_LABEL_CODE]: (state, action) =>
      produce(state, (draft) => {
        draft.itemCode = action.payload.data;
      }),
  },
  initialState
);

const filterAction = {
  getFilter,
  getZone,
  getZoneCode,
  getLabel,
  getLabelCode,
};
export { filterAction };
