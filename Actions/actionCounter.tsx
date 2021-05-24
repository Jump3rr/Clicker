import ActionTypes from "../Actions/counterTypes";

export const increaseCount = () => ({
  type: ActionTypes.INCREASE_COUNT
});
export const resetProgress = () => ({
  type: ActionTypes.RESET_PROGRESS
});
export const increaseRequirement = () => ({
  type: ActionTypes.INCREASE_REQUIREMENT
});
export const levelUp = () => ({
  type: ActionTypes.LEVEL_UP
});
