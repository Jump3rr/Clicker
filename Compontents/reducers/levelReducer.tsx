import ActionTypes from "../../Actions/levelTypes";
const initialState = {
  level: 0
};

export interface ILevelReducer {
  level: number;
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.LEVEL_UP:
      return { level: state.level + 1 };
    case ActionTypes.RESET_LEVEL:
      return { level: state.level = 1 };
    default:
      return state;
  }
};
