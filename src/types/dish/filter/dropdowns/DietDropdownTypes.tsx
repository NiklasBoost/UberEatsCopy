import { Dispatch, SetStateAction } from "react"


export interface DietDropdownProps {
  changeDropdownState: (setState: Dispatch<SetStateAction<boolean>>) => void;
  veggyFilter: boolean;
  setVeggyFilter: Dispatch<SetStateAction<boolean>>; 
  veganFilter: boolean;
  setVeganFilter: Dispatch<SetStateAction<boolean>>; 
  glutenFreeFilter: boolean; 
  setGlutenFreeFilter: Dispatch<SetStateAction<boolean>>;
  onlyOneFilterTrue: (setSate: Dispatch<SetStateAction<boolean>>) => void;
}