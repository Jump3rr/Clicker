// export default (state = 0, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return state + 1;
//     default:
//       return state;
//   }
// };

import ActionTypes from "../../Actions";
const initialState = {
  count: 0
};

export interface ICounterReducer {
  count: number;
}
export interface ICounterClicker {}

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.INCREASE_COUNT:
      return { count: state.count + 1 };
    case ActionTypes.GET_COUNT:
      return { count: state.count };
    default:
      return state;
  }
};
