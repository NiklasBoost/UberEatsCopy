import { Dispatch, SetStateAction } from "react";

export interface DishHeaderProps {
  setSidebarState: React.Dispatch<React.SetStateAction<boolean>>,
  setOverlayStyle: React.Dispatch<React.SetStateAction<object>>,
}

export interface CategoriesProps {
  setCategoryBannerProps: Dispatch<SetStateAction<{ name: string, img: string }>>,
  setDealsCat: Dispatch<SetStateAction<boolean>>, 
  setBestEatCat: Dispatch<SetStateAction<boolean>>,
  setAlcoholCat: Dispatch<SetStateAction<boolean>>,
  setBurgerCat: Dispatch<SetStateAction<boolean>>,
  setChineseCat: Dispatch<SetStateAction<boolean>>,
  setSandwichCat: Dispatch<SetStateAction<boolean>>,
  setThaiCat: Dispatch<SetStateAction<boolean>>,
  setSushiCat: Dispatch<SetStateAction<boolean>>,
  setDessertCat: Dispatch<SetStateAction<boolean>>,
  setAsiaCat: Dispatch<SetStateAction<boolean>>,
  setAmericanCat: Dispatch<SetStateAction<boolean>>,
  setGeneralStuffCat: Dispatch<SetStateAction<boolean>>,
  setAnimalCareCat: Dispatch<SetStateAction<boolean>>,
  setHealthyCat: Dispatch<SetStateAction<boolean>>,
  setFastFoodCat: Dispatch<SetStateAction<boolean>>,
  setPizzaCat: Dispatch<SetStateAction<boolean>>,
  setKoreanCat: Dispatch<SetStateAction<boolean>>,
  setIndianCat: Dispatch<SetStateAction<boolean>>,
  onlyOneFilterTrue: (setState: Dispatch<SetStateAction<boolean>>) => void,
} 

export interface MealChooseProps {
  setCategoryBannerProps: Dispatch<SetStateAction<{ name: string, img: string }>>,

  forYouFilter: boolean;
  setForYouFilter: Dispatch<SetStateAction<boolean>>;
  popularFilter: boolean; 
  setPopularFilter: Dispatch<SetStateAction<boolean>>; 
  ratingFilter: boolean;
  setRatingFilter: Dispatch<SetStateAction<boolean>>; 
  deliveryTimeFilter: boolean; 
  setDeliveryTimeFilter: Dispatch<SetStateAction<boolean>>;
  uberEatsFilter: boolean;
  setUberEatsFilter: Dispatch<SetStateAction<boolean>>; 
  oneEURFilter: boolean;
  setOneEURFilter: Dispatch<SetStateAction<boolean>>; 
  twoEURFilter: boolean;
  setTwoEURFilter: Dispatch<SetStateAction<boolean>>; 
  threeEURFilter: boolean;
  setThreeEURFilter: Dispatch<SetStateAction<boolean>>;  
  fourEURFilter: boolean;
  setFourEURFilter: Dispatch<SetStateAction<boolean>>;
  veggyFilter: boolean;
  setVeggyFilter: Dispatch<SetStateAction<boolean>>; 
  veganFilter: boolean;
  setVeganFilter: Dispatch<SetStateAction<boolean>>; 
  glutenFreeFilter: boolean; 
  setGlutenFreeFilter: Dispatch<SetStateAction<boolean>>;
  onlyOneFilterTrue: (setState: Dispatch<SetStateAction<boolean>>) => void,
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
  setDealsCat: Dispatch<SetStateAction<boolean>>, 
  setBestEatCat: Dispatch<SetStateAction<boolean>>,
  setAlcoholCat: Dispatch<SetStateAction<boolean>>,
  setBurgerCat: Dispatch<SetStateAction<boolean>>,
  setChineseCat: Dispatch<SetStateAction<boolean>>,
  setSandwichCat: Dispatch<SetStateAction<boolean>>,
  setThaiCat: Dispatch<SetStateAction<boolean>>,
  setSushiCat: Dispatch<SetStateAction<boolean>>,
  setDessertCat: Dispatch<SetStateAction<boolean>>,
  setAsiaCat: Dispatch<SetStateAction<boolean>>,
  setAmericanCat: Dispatch<SetStateAction<boolean>>,
  setGeneralStuffCat: Dispatch<SetStateAction<boolean>>,
  setAnimalCareCat: Dispatch<SetStateAction<boolean>>,
  setHealthyCat: Dispatch<SetStateAction<boolean>>,
  setFastFoodCat: Dispatch<SetStateAction<boolean>>,
  setPizzaCat: Dispatch<SetStateAction<boolean>>,
  setKoreanCat: Dispatch<SetStateAction<boolean>>,
  setIndianCat: Dispatch<SetStateAction<boolean>>,
}