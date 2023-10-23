import { Dispatch, SetStateAction } from "react";
import { FilterState } from "../filter/filterTypes";

export interface CatState {
  dealsCat: boolean,
  bestEatCat: boolean,
  alcoholCat: boolean,
  burgerCat: boolean,
  chineseCat: boolean,
  thaiCat: boolean,
  sandwichCat: boolean,
  sushiCat: boolean,
  dessertCat: boolean,
  asiaCat: boolean,
  americanCat: boolean,
  generalStuffCat: boolean,
  animalCareCat: boolean,
  healthyCat: boolean,
  fastFoodCat: boolean,
  pizzaCat: boolean,
  koreanCat: boolean,
  indianCat: boolean,  
}

export interface DishHeaderProps {
  setSidebarState: React.Dispatch<React.SetStateAction<boolean>>,
  setOverlayStyle: React.Dispatch<React.SetStateAction<object>>,
  setDissappearElements: React.Dispatch<React.SetStateAction<boolean>>,
}

export interface SearchbarHeaderProps {
  setSidebarState: React.Dispatch<React.SetStateAction<boolean>>,
  setOverlayStyle: React.Dispatch<React.SetStateAction<object>>,
  setDissappearElements: React.Dispatch<React.SetStateAction<boolean>>,
}

export interface CategoriesProps {
  setCategoryBannerProps: Dispatch<SetStateAction<{ name: string, img: string }>>,
  setCategories: Dispatch<SetStateAction<CatState>>,
  onlyOneFilterTrue: (setState: Dispatch<SetStateAction<boolean>>) => void,
} 

export interface MealChooseProps {
  setCategoryBannerProps: Dispatch<SetStateAction<{ name: string, img: string }>>,
  
  filter: FilterState,
  setFilter: Dispatch<SetStateAction<FilterState>>, 

  onlyOneFilterTrue: (setState: Dispatch<SetStateAction<boolean>>) => void,
  
  categories: CatState
  setCategories: Dispatch<SetStateAction<CatState>>, 
   
}