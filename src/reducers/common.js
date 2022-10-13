import { STORE_PLACES } from "../actions/types";

const initState = {
  data: [],
};

export default function(state = initState, action) {
  const { type, payload } = action;
  switch (type) {
    case STORE_PLACES:
      return {
        ...state,
        data: [payload, ...state.data],
      };
    default:
      return state;
  }
}
