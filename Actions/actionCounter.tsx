import ActionTypes from "../Actions/counterTypes";

export const increaseCount = () => ({
  type: ActionTypes.INCREASE_COUNT
});
export const increaseRequirement = () => ({
  type: ActionTypes.INCREASE_PER_SECOND
});
export const resetProgress = () => ({
  type: ActionTypes.RESET_PROGRESS
});
