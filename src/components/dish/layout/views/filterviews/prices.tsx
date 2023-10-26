import restaurants from "../../../../data/restaurants";
import { Restaurant } from "../../elements/dElements";

export function PriceView({ EUR }: {EUR: string}) {
  const price = restaurants
    .filter((restaurant) => {
      return restaurant.priceRange === EUR;
    })

  return (
    <div className="restaurants">
      {price.map((restaurant, index) => (
        <Restaurant
        key={index}
        restaurantImg={price[index].restaurantImg}
        name={price[index].name}
        ratingAverage={price[index].rating.average}
        deliveryFee={price[index].deliveryFee}
        />
        ))}
    </div>
  )
}
