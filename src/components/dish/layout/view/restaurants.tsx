import { RestaurantsProps } from "../../../../types/dish/views/restraurantsTypes";
import { RestaurantElement } from "../../elements/dElements";


const Restaurants = ({ 
  filteredRestaurants }: RestaurantsProps) => {

  return (
    <div className="restaurants">
      {filteredRestaurants.map((restaurant, index) => (
        <RestaurantElement
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