import { Dispatch, SetStateAction } from "react"
import { FilterState } from "../filterTypes";

export interface PricesDropdownProps {
  setFilter: Dispatch<SetStateAction<FilterState>>, 
  changeDropdownState: (setState: Dispatch<SetStateAction<boolean>>) => void;
}
