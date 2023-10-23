import { FilterState } from "../filter/filterTypes";
import { Dispatch, SetStateAction } from "react";

export interface RestaurantsProps {
  filter: FilterState,
  setFilter: Dispatch<SetStateAction<FilterState>>, 
  dealsCat: boolean,
  bestEatCat: boolean,
  alcoholCat: boolean,
  burgerCat: boolean,
  chineseCat: boolean,
  thaiCat: boolean,
  sandwichCat: boolean,
  sushiCat: boolean,
  dessertCat: boolean,
  asiaCat: boolean,
  americanCat: boolean,
  generalStuffCat: boolean,
  animalCareCat: boolean,
  healthyCat: boolean,
  fastFoodCat: boolean,
  pizzaCat: boolean,
  koreanCat: boolean,
  indianCat: boolean,
}