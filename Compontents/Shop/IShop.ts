export const ShopItems: IShop[] = [
  {
    name: "Grandma",
    perSec: 1,
    owned: 0,
    cost: 10
  },
  {
    name: "Farm",
    perSec: 10,
    owned: 0,
    cost: 100
  },
  {
    name: "Mine",
    perSec: 50,
    owned: 0,
    cost: 500
  },
  {
    name: "Factory",
    perSec: 100,
    owned: 0,
    cost: 1000
  },
  {
    name: "City",
    perSec: 1000,
    owned: 0,
    cost: 10000
  },
  {
    name: "Country",
    perSec: 10000,
    owned: 0,
    cost: 100000
  }
];

export interface IShop {
  name: string;
  perSec: number;
  owned: number;
  cost: number;
}
