import { Dispatch, SetStateAction } from "react"
import { FilterState } from "../filterTypes";
export interface SortDropdownProps {
  setFilter: Dispatch<SetStateAction<FilterState>>, 
  changeDropdownState: (setState: Dispatch<SetStateAction<boolean>>) => void;
}
