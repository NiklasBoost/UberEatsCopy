import { Dispatch, SetStateAction } from "react"
import { FilterState } from "../filterTypes";


export interface UberEatsDropdownProps {
  setFilter: Dispatch<SetStateAction<FilterState>>, 
  changeDropdownState: (setState: Dispatch<SetStateAction<boolean>>) => void;
}