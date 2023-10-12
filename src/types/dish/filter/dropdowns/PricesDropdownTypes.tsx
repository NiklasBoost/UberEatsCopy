import { Dispatch, SetStateAction } from "react"

export interface PricesDropdownProps {
  changeDropdownState: (setState: Dispatch<SetStateAction<boolean>>) => void;
  oneEURFilter: boolean;
  setOneEURFilter: Dispatch<SetStateAction<boolean>>; 
  twoEURFilter: boolean;
  setTwoEURFilter: Dispatch<SetStateAction<boolean>>; 
  threeEURFilter: boolean;
  setThreeEURFilter: Dispatch<SetStateAction<boolean>>;  
  fourEURFilter: boolean;
  setFourEURFilter: Dispatch<SetStateAction<boolean>>;
  onlyOneFilterTrue: (setSate: Dispatch<SetStateAction<boolean>>) => void;
}
