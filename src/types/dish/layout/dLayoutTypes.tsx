import { Dispatch, SetStateAction } from "react";

export interface CategoriesProps {
  setCategoryBannerProps: Dispatch<SetStateAction<{ name: string, img: string }>>;
} 
