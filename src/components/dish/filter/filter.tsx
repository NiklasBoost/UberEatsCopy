import SortDropdown from "./dropdowns/SortDropdown";
import UberEatsDropdown from "./dropdowns/UberEatsDropdown";
import PricesDropdown from "./dropdowns/PricesDropdown";
import DietDropdown from "./dropdowns/DietDropdown";
import { FilterProps } from "../../../types/dish/layout/dLayoutTypes";
import { SetStateAction, Dispatch } from "react";


function Filter({ 
  forYouFilter, 
  setForYouFilter, 
  popularFilter, 
  setPopularFilter, 
  ratingFilter, 
  setRatingFilter, 
  deliveryTimeFilter, 
  setDeliveryTimeFilter, 
  uberEatsFilter, 
  setUberEatsFilter, 
  oneEURFilter, 
  setOneEURFilter, 
  twoEURFilter, 
  setTwoEURFilter, 
  threeEURFilter, 
  setThreeEURFilter, 
  fourEURFilter, 
  setFourEURFilter,
  veggyFilter, 
  setVeggyFilter, 
  veganFilter, 
  setVeganFilter, 
  glutenFreeFilter, 
  setGlutenFreeFilter, 
  onlyOneFilterTrue }: FilterProps) {
  
  function changeDropdownState(setState: Dispatch<SetStateAction<boolean>>) {
    setState((prevState: boolean) => !prevState);
  }
  
  return (
    <div className="filter">
      <SortDropdown 
        changeDropdownState={changeDropdownState}
        forYouFilter={forYouFilter}
        setForYouFilter={setForYouFilter}
        popularFilter={popularFilter}
        setPopularFilter={setPopularFilter}
        ratingFilter={ratingFilter}
        setRatingFilter={setRatingFilter}
        deliveryTimeFilter={deliveryTimeFilter}
        setDeliveryTimeFilter={setDeliveryTimeFilter}
        onlyOneFilterTrue={onlyOneFilterTrue}
      />
      <UberEatsDropdown 
        changeDropdownState={changeDropdownState}
        uberEatsFilter={uberEatsFilter}
        setUberEatsFilter={setUberEatsFilter}
        onlyOneFilterTrue={onlyOneFilterTrue}
      />
      <PricesDropdown 
        changeDropdownState={changeDropdownState}
        oneEURFilter={oneEURFilter}
        setOneEURFilter={setOneEURFilter}
        twoEURFilter={twoEURFilter}
        setTwoEURFilter={setTwoEURFilter}
        threeEURFilter={threeEURFilter}
        setThreeEURFilter={setThreeEURFilter}
        fourEURFilter={fourEURFilter}
        setFourEURFilter={setFourEURFilter}
        onlyOneFilterTrue={onlyOneFilterTrue}
      />
      <DietDropdown 
        changeDropdownState={changeDropdownState}
        veggyFilter={veggyFilter}
        setVeggyFilter={setVeggyFilter}
        veganFilter={veganFilter}
        setVeganFilter={setVeganFilter}
        glutenFreeFilter={glutenFreeFilter}
        setGlutenFreeFilter={setGlutenFreeFilter}
        onlyOneFilterTrue={onlyOneFilterTrue}
      />
    </div>
  );
}

export default Filter;