import { Dispatch, SetStateAction } from "react"

export interface FilterProps {
  forYouFilter: boolean;
  setForYouFilter: Dispatch<SetStateAction<boolean>>;
  popularFilter: boolean; 
  setPopularFilter: Dispatch<SetStateAction<boolean>>; 
  ratingFilter: boolean;
  setRatingFilter: Dispatch<SetStateAction<boolean>>; 
  deliveryTimeFilter: boolean; 
  setDeliveryTimeFilter: Dispatch<SetStateAction<boolean>>; 
  uberEatsFilter: boolean;
  setUberEatsFilter: Dispatch<SetStateAction<boolean>>; 
  oneEURFilter: boolean;
  setOneEURFilter: Dispatch<SetStateAction<boolean>>; 
  twoEURFilter: boolean;
  setTwoEURFilter: Dispatch<SetStateAction<boolean>>; 
  threeEURFilter: boolean;
  setThreeEURFilter: Dispatch<SetStateAction<boolean>>;  
  fourEURFilter: boolean;
  setFourEURFilter: Dispatch<SetStateAction<boolean>>;
  veggyFilter: boolean;
  setVeggyFilter: Dispatch<SetStateAction<boolean>>; 
  veganFilter: boolean;
  setVeganFilter: Dispatch<SetStateAction<boolean>>; 
  glutenFreeFilter: boolean; 
  setGlutenFreeFilter: Dispatch<SetStateAction<boolean>>; 
  onlyOneFilterTrue: (setState: Dispatch<SetStateAction<boolean>>) => void;
}
