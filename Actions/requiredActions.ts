import ActionTypes from "../Actions/requiredToNextLevelTypes";

export const increaseRequirement = () => ({
  type: ActionTypes.INCREASE_REQUIREMENT
});
export const resetRequirement = () => ({
  type: ActionTypes.RESET_REQUIREMENT
});
