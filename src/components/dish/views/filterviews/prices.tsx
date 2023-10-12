import restaurants from "../../../../data/restaurants";
import { Restaurant } from "../../elements/dElements";

export function CheapView() {
  const cheap = restaurants
    .filter((restaurant) => {
      return restaurant.priceRange === '€';
    })

  return (
    <div className="restaurants">
      {cheap.map((restaurant, index) => (
        <Restaurant
        key={index}
        restaurantImg={cheap[index].restaurantImg}
        name={cheap[index].name}
        ratingAverage={cheap[index].rating.average}
        deliveryFee={cheap[index].deliveryFee}
        />
        ))}
    </div>
  )
}

export function AffordableView() {
  const affordable = restaurants
    .filter((restaurant) => {
      return restaurant.priceRange === '€€';
    })

  return (
    <div className="restaurants">
      {affordable.map((restaurant, index) => (
        <Restaurant
        key={index}
        restaurantImg={affordable[index].restaurantImg}
        name={affordable[index].name}
        ratingAverage={affordable[index].rating.average}
        deliveryFee={affordable[index].deliveryFee}
        />
        ))}
    </div>
  )
}

export function ExpensiveView() {
  const expensive = restaurants
    .filter((restaurant) => {
      return restaurant.priceRange === '€€€';
    })

  return (
    <div className="restaurants">
      {expensive.map((restaurant, index) => (
        <Restaurant
        key={index}
        restaurantImg={expensive[index].restaurantImg}
        name={expensive[index].name}
        ratingAverage={expensive[index].rating.average}
        deliveryFee={expensive[index].deliveryFee}
        />
        ))}
    </div>
  )
}

export function MostExpensiveView() {
  const mostExpensive = restaurants
    .filter((restaurant) => {
      return restaurant.priceRange === '€€€€';
    })

  return (
    <div className="restaurants">
      {mostExpensive.map((restaurant, index) => (
        <Restaurant
        key={index}
        restaurantImg={mostExpensive[index].restaurantImg}
        name={mostExpensive[index].name}
        ratingAverage={mostExpensive[index].rating.average}
        deliveryFee={mostExpensive[index].deliveryFee}
        />
        ))}
    </div>
  )

}
