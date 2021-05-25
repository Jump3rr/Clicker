import ActionTypes from "../../Actions/shopTypes";
const initialState = {
  grandma: {
    name: "Grandma",
    count: 0,
    price: 10,
    perSec: 1
  },
  farm: {
    name: "Farm",
    count: 0,
    price: 100,
    perSec: 10
  },
  mine: {
    name: "Mine",
    count: 0,
    price: 500,
    perSec: 50
  },
  factory: {
    name: "Factory",
    count: 0,
    price: 1000,
    perSec: 100
  },
  city: {
    name: "City",
    count: 0,
    price: 10000,
    perSec: 1000
  },
  country: {
    name: "Country",
    count: 0,
    price: 100000,
    perSec: 10000
  }
};

export interface IShopReducer {
  grandma: {
    name: string;
    count: number;
    price: number;
    perSec: number;
  };
  farm: {
    name: string;
    count: number;
    price: number;
    perSec: number;
  };
  mine: {
    name: string;
    count: number;
    price: number;
    perSec: number;
  };
  factory: {
    name: string;
    count: number;
    price: number;
    perSec: number;
  };
  city: {
    name: string;
    count: number;
    price: number;
    perSec: number;
  };
  country: {
    name: string;
    count: number;
    price: number;
    perSec: number;
  };
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GRANDMA_INCREASE:
      console.log(state.grandma.count);
      return {
        ...state,
        grandma: {
          name: "Grandma",
          count: state.grandma.count + 1,
          price: state.grandma.price + 2,
          perSec: state.grandma.perSec + 1
        }
      };
    case ActionTypes.FARM_INCREASE:
      console.log(state.farm.count);
      return {
        ...state,
        farm: {
          name: "Farm",
          count: state.farm.count + 1,
          price: state.farm.price + 20,
          perSec: state.farm.perSec + 10
        }
      };
    case ActionTypes.MINE_INCREASE:
      console.log(state.mine.count);
      return {
        ...state,
        mine: {
          name: "Mine",
          count: state.mine.count + 1,
          price: state.mine.price + 100,
          perSec: state.mine.perSec + 50
        }
      };
    case ActionTypes.FACTORY_INCREASE:
      console.log(state.factory.count);
      return {
        ...state,
        factory: {
          name: "Factory",
          count: state.factory.count + 1,
          price: state.factory.price + 200,
          perSec: state.factory.perSec + 100
        }
      };
    case ActionTypes.CITY_INCREASE:
      console.log(state.city.count);
      return {
        ...state,
        city: {
          name: "City",
          count: state.city.count + 1,
          price: state.city.price + 2000,
          perSec: state.city.perSec + 1000
        }
      };
    case ActionTypes.COUNTRY_INCREASE:
      console.log(state.country.count);
      return {
        ...state,
        country: {
          name: "Country",
          count: state.country.count + 1,
          price: state.country.price + 20000,
          perSec: state.country.perSec + 10000
        }
      };
    default:
      return state;
  }
};
