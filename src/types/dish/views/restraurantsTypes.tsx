import { FilterState } from "../filter/filterTypes";
import { Dispatch, SetStateAction } from "react";
import { CatState } from "../layout/dLayoutTypes";

export interface RestaurantsProps {
  filter: FilterState,
  setFilter: Dispatch<SetStateAction<FilterState>>, 
  categories: CatState,
}