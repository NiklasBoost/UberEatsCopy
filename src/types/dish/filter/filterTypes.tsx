import { Dispatch, SetStateAction } from "react"


export interface FilterState {
  forYouFilter: boolean;
  popularFilter: boolean;
  ratingFilter: boolean;
  deliveryTimeFilter: boolean;
  uberEatsFilter: boolean;
  oneEURFilter: boolean;
  twoEURFilter: boolean;
  threeEURFilter: boolean;
  fourEURFilter: boolean;
  veggyFilter: boolean;
  veganFilter: boolean;
  glutenFreeFilter: boolean;
}
export interface FilterProps {
  setFilter: Dispatch<SetStateAction<FilterState>>, 
}








