/* eslint-disable */
import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

const GET_NOW_PAGE = "GET_NOW_PAGE";

const getNowPage = createAction(GET_NOW_PAGE, (data) => ({ data }));

const initialState = {
  nowPage: "mainPage",
};

export default handleActions(
  {
    [GET_NOW_PAGE]: (state, action) =>
      produce(state, (draft) => {
        draft.nowPage = action.payload.data;
      }),
  },
  initialState
);

const nowPageAction = {
  getNowPage,
};
export { nowPageAction };
