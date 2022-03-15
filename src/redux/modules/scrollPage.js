/* eslint-disable */
import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

const GET_SCROLL = "GET_SCROLL";

const getScroll = createAction(GET_SCROLL, (data) => ({ data }));

const initialState = {
  page: 1,
};

export default handleActions(
  {
    [GET_SCROLL]: (state, action) =>
      produce(state, (draft) => {
        draft.page = action.payload.data;
      }),
  },
  initialState
);

const scrollPageAction = {
  getScroll,
};
export { scrollPageAction };
