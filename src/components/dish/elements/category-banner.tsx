import { CategoryBannerProps } from "../../../types/dish/elements/categoryBannerTypes";

export const CategoryBanner = ({ CategoryName, CategoryIMG }: CategoryBannerProps) => {

  return (
    <div className="Category-Banner-Container" >
      <h1 className="Category-Banner-Name">{CategoryName}</h1>
      <img className="Category-Banner-img" src={CategoryIMG}/>
    </div>
  )
}