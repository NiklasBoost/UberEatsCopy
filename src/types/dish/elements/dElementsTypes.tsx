import { Dispatch, SetStateAction } from "react";
import { CatState } from "../layout/dLayoutTypes";


export interface CategoryProps {
  categoryImg: string,
  categoryText: string,
  setCategoryBannerProps: Dispatch<SetStateAction<{ name: string, img: string }>>,
  onlyOneFilterTrue: (setState: Dispatch<SetStateAction<boolean>>) => void,
  setCategoriesState: Dispatch<SetStateAction<CatState>>, 
}

export interface RestaurantProps {
  restaurantImg: string,
  name: string,
  ratingAverage: number | null,
  deliveryFee: number | null,
}