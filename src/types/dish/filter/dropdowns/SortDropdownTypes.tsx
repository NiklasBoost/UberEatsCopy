import { Dispatch, SetStateAction } from "react"

export interface SortDropdownProps {
  changeDropdownState: (setState: Dispatch<SetStateAction<boolean>>) => void;
  forYouFilter: boolean;
  setForYouFilter: Dispatch<SetStateAction<boolean>>;
  popularFilter: boolean; 
  setPopularFilter: Dispatch<SetStateAction<boolean>>; 
  ratingFilter: boolean;
  setRatingFilter: Dispatch<SetStateAction<boolean>>; 
  deliveryTimeFilter: boolean; 
  setDeliveryTimeFilter: Dispatch<SetStateAction<boolean>>;
  onlyOneFilterTrue: (setSate: Dispatch<SetStateAction<boolean>>) => void;
}
