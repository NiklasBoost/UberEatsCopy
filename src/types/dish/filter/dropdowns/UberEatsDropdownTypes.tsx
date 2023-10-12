import { Dispatch, SetStateAction } from "react"



export interface UberEatsDropdownProps {
  changeDropdownState: (setState: Dispatch<SetStateAction<boolean>>) => void;
  uberEatsFilter: boolean;
  setUberEatsFilter: Dispatch<SetStateAction<boolean>>;
  onlyOneFilterTrue: (setSate: Dispatch<SetStateAction<boolean>>) => void;
}