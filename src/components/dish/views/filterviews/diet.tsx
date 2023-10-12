import { Restaurant } from "../../elements/dElements";
import restaurants from "../../../../data/restaurants";

export function VeggyView() {
  const veggy = restaurants
    .filter((restaurant) => {
      return restaurant.veggy;
    })

  return (
    <div className="restaurants">
      {veggy.map((restaurant, index) => (
        <Restaurant
          key={index}
          restaurantImg={veggy[index].restaurantImg}
          name={veggy[index].name}
          ratingAverage={veggy[index].rating.average}
          deliveryFee={veggy[index].deliveryFee}
        />
      ))}
    </div>
  )
}
 
export function VeganView() {
  const vegan = restaurants
    .filter((restaurant) => {
      return restaurant.vegan;
    })

  return (
    <div className="restaurants">
       {vegan.map((restaurant, index) => (
        <Restaurant
          key={index}
          restaurantImg={vegan[index].restaurantImg}
          name={vegan[index].name}
          ratingAverage={vegan[index].rating.average}
          deliveryFee={vegan[index].deliveryFee}
        />
      ))}
    </div>
  )
}

export function GlutenfreeView() {
  const glutenFree = restaurants
    .filter((restaurant) => {
      return restaurant.glutenfree;
    })

  return (
    <div className="restaurants">
      {glutenFree.map((restaurant, index) => (
        <Restaurant
          key={index}
          restaurantImg={glutenFree[index].restaurantImg}
          name={glutenFree[index].name}
          ratingAverage={glutenFree[index].rating.average}
          deliveryFee={glutenFree[index].deliveryFee}
        />
      ))}
    </div>
  )
  
}