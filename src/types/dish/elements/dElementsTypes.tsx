import { Dispatch, SetStateAction } from "react";


export interface CategoryProps {
  categoryImg: string,
  categoryText: string,
  setCategoryBannerProps: Dispatch<SetStateAction<{ name: string, img: string }>>;
}

export interface RestaurantProps {
  restaurantImg: string,
  name: string,
  ratingAverage: number | null,
  deliveryFee: number | null,
}