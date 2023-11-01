import SortDropdown from "./dropdowns/SortDropdown";
import UberEatsDropdown from "./dropdowns/UberEatsDropdown";
import PricesDropdown from "./dropdowns/PricesDropdown";
import DietDropdown from "./dropdowns/DietDropdown";
import { FilterProps } from "../../../../types/dish/filter/filterTypes";
import { SetStateAction, Dispatch } from "react";


function Filter({ 
  filter,
  setFilter }: FilterProps) {
  
  function changeDropdownState(setState: Dispatch<SetStateAction<boolean>>) {
    setState((prevState: boolean) => !prevState);
  }
  
  return (
    <div className="filter">
      <SortDropdown 
        changeDropdownState={changeDropdownState}
        filter={filter}
        setFilter={setFilter}
        onlyOneFilterTrue={onlyOneFilterTrue}
      />
      <UberEatsDropdown 
        changeDropdownState={changeDropdownState}
        filter={filter}
        setFilter={setFilter}
        onlyOneFilterTrue={onlyOneFilterTrue}
      />
      <PricesDropdown 
        changeDropdownState={changeDropdownState}
        filter={filter}
        setFilter={setFilter}
        onlyOneFilterTrue={onlyOneFilterTrue}
      />
      <DietDropdown 
        changeDropdownState={changeDropdownState}
        filter={filter}
        setFilter={setFilter}
        onlyOneFilterTrue={onlyOneFilterTrue}
      />
    </div>
  );
}

export default Filter;