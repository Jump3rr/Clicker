import ActionTypes from "../../Actions/shopTypes";
const initialState = {
  grandma: {
    name: "Grandma",
    count: 0,
    price: 10,
    perSec: 0
  },
  farm: {
    name: "Farm",
    count: 0,
    price: 100,
    perSec: 0
  },
  mine: {
    name: "Mine",
    count: 0,
    price: 500,
    perSec: 0
  },
  factory: {
    name: "Factory",
    count: 0,
    price: 1000,
    perSec: 0
  },
  city: {
    name: "City",
    count: 0,
    price: 10000,
    perSec: 0
  },
  country: {
    name: "Country",
    count: 0,
    price: 100000,
    perSec: 0
  }
};

let localData = localStorage.getItem("grandma");
if (localData) {
  initialState.grandma = JSON.parse(localData);
}
localData = localStorage.getItem("farm");
if (localData) {
  initialState.farm = JSON.parse(localData);
}
localData = localStorage.getItem("mine");
if (localData) {
  initialState.mine = JSON.parse(localData);
}
localData = localStorage.getItem("factory");
if (localData) {
  initialState.factory = JSON.parse(localData);
}
localData = localStorage.getItem("city");
if (localData) {
  initialState.city = JSON.parse(localData);
}
localData = localStorage.getItem("country");
if (localData) {
  initialState.country = JSON.parse(localData);
}

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
          name: state.grandma.name,
          count: state.grandma.count + 1,
          price: state.grandma.price,
          perSec: state.grandma.perSec + 1
        }
      };
    case ActionTypes.FARM_INCREASE:
      console.log(state.farm.count);
      return {
        ...state,
        farm: {
          name: state.farm.name,
          count: state.farm.count + 1,
          price: state.farm.price,
          perSec: state.farm.perSec + 10
        }
      };
    case ActionTypes.MINE_INCREASE:
      console.log(state.mine.count);
      return {
        ...state,
        mine: {
          name: state.mine.name,
          count: state.mine.count + 1,
          price: state.mine.price,
          perSec: state.mine.perSec + 50
        }
      };
    case ActionTypes.FACTORY_INCREASE:
      console.log(state.factory.count);
      return {
        ...state,
        factory: {
          name: state.factory.name,
          count: state.factory.count + 1,
          price: state.factory.price,
          perSec: state.factory.perSec + 100
        }
      };
    case ActionTypes.CITY_INCREASE:
      console.log(state.city.count);
      return {
        ...state,
        city: {
          name: state.city.name,
          count: state.city.count + 1,
          price: state.city.price,
          perSec: state.city.perSec + 1000
        }
      };
    case ActionTypes.COUNTRY_INCREASE:
      console.log(state.country.count);
      return {
        ...state,
        country: {
          name: state.country.name,
          count: state.country.count + 1,
          price: state.country.price,
          perSec: state.country.perSec + 10000
        }
      };
    default:
      return state;
  }
};
