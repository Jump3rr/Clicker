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
export const grandmaBought = () => ({
  type: ActionTypes.GRANDMA_BOUGHT
});
export const farmBought = () => ({
  type: ActionTypes.FARM_BOUGHT
});
export const mineBought = () => ({
  type: ActionTypes.MINE_BOUGHT
});
export const factoryBought = () => ({
  type: ActionTypes.FACTORY_BOUGHT
});
export const cityBought = () => ({
  type: ActionTypes.CITY_BOUGHT
});
export const countryBought = () => ({
  type: ActionTypes.COUNTRY_BOUGHT
});
export const increaseByBots = (valuePerSec) => ({
  type: ActionTypes.INCREASE_BY_BOTS,
  valuePerSec
});
