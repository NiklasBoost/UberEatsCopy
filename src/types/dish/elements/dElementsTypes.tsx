import { Dispatch, SetStateAction } from "react";


export interface CategoryProps {
  categoryImg: string,
  categoryText: string,
  setCategoryBannerProps: Dispatch<SetStateAction<{ name: string, img: string }>>,
  onlyOneFilterTrue: (setState: Dispatch<SetStateAction<boolean>>) => void,
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

export interface RestaurantProps {
  restaurantImg: string,
  name: string,
  ratingAverage: number | null,
  deliveryFee: number | null,
}