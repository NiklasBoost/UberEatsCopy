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
  categoriesState: CatState,
  setCategoriesState: Dispatch<SetStateAction<CatState>>,

} 

export interface MealChooseProps {
  setCategoryBannerProps: Dispatch<SetStateAction<{ name: string, img: string }>>,
  filter: FilterState,
  setFilter: Dispatch<SetStateAction<FilterState>>, 
  categoriesState: CatState, 
  filteredRestaurants: Restaurant[],
  setFilteredRestaurants: Dispatch<SetStateAction<Restaurant[]>>
}

export interface Restaurant {
  restaurantImg: string;
  name: string;
  rating: {
    count: number | null;
    average: number | null;
  };
  deliveryFee: number | null;
  priceRange: string;
  categorie: string;
  newbie: boolean;
  veggy: boolean;
  vegan: boolean;
  glutenfree: boolean;
}