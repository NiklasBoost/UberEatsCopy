import { Restaurant } from "../../elements/dElements";
import restaurants from "../../../../data/restaurants";

export function CategoryView({ cat }) {
  const category = restaurants
  .filter((restaurant) => {
    return restaurant.categorie === cat;
  })

  return (
    <div className="restaurants">
      {category.map((restaurant, index) => (
        <Restaurant
          key={index}
          restaurantImg={category[index].restaurantImg}
          name={category[index].name}
          ratingAverage={category[index].rating.average}
          deliveryFee={category[index].deliveryFee}
        />
      ))}
    </div>
  )
}