import ActionTypes from "../../Actions/requiredToNextLevelTypes";
const initialState = {
  toNextLevel: 5
};

export interface IRequiredReducer {
  toNextLevel: number;
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.INCREASE_REQUIREMENT:
      return { toNextLevel: state.toNextLevel * 2 };
    default:
      return state;
  }
};
