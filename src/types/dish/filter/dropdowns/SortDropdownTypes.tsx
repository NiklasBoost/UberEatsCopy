import { Dispatch, SetStateAction } from "react"
import { FilterState } from "../filterTypes";
export interface SortDropdownProps {
  filter: boolean,
  setFilter: Dispatch<SetStateAction<FilterState>>, 
  changeDropdownState: (setState: Dispatch<SetStateAction<boolean>>) => void;
}
