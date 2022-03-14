/* eslint-disable */
import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

const GET_DATA = "GET_DATA";

const getData = createAction(GET_DATA, (data) => ({ data }));

const initialState = {
  posts: [],
  isLoaded: false,
  infinityposts: [],
};

export const getDataAPI = () => {
  return async function (dispatch, getState, { history }) {
    const result = await fetch("../../data/demo_data.js");
    console.log(result);
  };
};

export default handleActions(
  {
    [GET_DATA]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

const dataActions = {
  getDataAPI,
};
export { dataActions };
