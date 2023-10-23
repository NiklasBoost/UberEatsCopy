import { Dispatch, SetStateAction } from "react"
import { FilterState } from "../filterTypes";
export interface SortDropdownProps {
  filter: FilterState,
  setFilter: Dispatch<SetStateAction<FilterState>>, 
  changeDropdownState: (setState: Dispatch<SetStateAction<boolean>>) => void;
  onlyOneFilterTrue: (setSate: Dispatch<SetStateAction<boolean>>) => void;
}
