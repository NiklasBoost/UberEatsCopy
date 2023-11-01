import SortDropdown from "./dropdowns/SortDropdown";
import UberEatsDropdown from "./dropdowns/UberEatsDropdown";
import PricesDropdown from "./dropdowns/PricesDropdown";
import DietDropdown from "./dropdowns/DietDropdown";
import { FilterProps } from "../../../../types/dish/filter/filterTypes";
import { SetStateAction, Dispatch } from "react";


const Filter = ({ 
  setFilter }: FilterProps) => {
  
  function changeDropdownState(setState: Dispatch<SetStateAction<boolean>>) {
    setState((prevState: boolean) => !prevState);
  }
  
  return (
    <div className="filter">
      <SortDropdown 
        changeDropdownState={changeDropdownState}
        setFilter={setFilter}
      />
      <UberEatsDropdown 
        changeDropdownState={changeDropdownState}
        setFilter={setFilter}
      />
      <PricesDropdown 
        changeDropdownState={changeDropdownState}
        setFilter={setFilter}
      />
      <DietDropdown 
        changeDropdownState={changeDropdownState}
        setFilter={setFilter}
      />
    </div>
  );
}

export default Filter;