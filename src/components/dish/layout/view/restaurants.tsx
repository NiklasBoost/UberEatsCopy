import { RestaurantsProps } from "../../../../types/dish/views/restraurantsTypes";
import { Restaurant } from "../../elements/dElements";


function Restaurants({ 
  filteredRestaurants }: RestaurantsProps) {

  return (
    <div className="restaurants">
      {filteredRestaurants.map((restaurant, index) => (
        <Restaurant
          key={index}
          restaurantImg={restaurant.restaurantImg}
          name={restaurant.name}
          ratingAverage={restaurant.rating.average}
          deliveryFee={restaurant.deliveryFee}
        />
        ))}
    </div>
  ); 
}


export default Restaurants;