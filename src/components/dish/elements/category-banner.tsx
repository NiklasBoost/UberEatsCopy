import { CategoryBannerProps } from "../../../types/dish/elements/categoryBannerTypes";

export function CategoryBanner({ CategoryName, CategoryIMG }: CategoryBannerProps) {

  return (
    <div>
      <h1>{CategoryName}</h1>
      <img src={CategoryIMG}/>
    </div>
  )
}