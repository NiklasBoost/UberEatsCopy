import restaurants from "../../../data/restaurants";
import { Restaurant } from "../elements/dElements";

function Restaurants() {
  return (
    <div className="restaurants">
      {restaurants.map((restaurant, index) => (
        <Restaurant
          key={index}
          restaurantImg={restaurants[index].restaurantImg}
          name={restaurants[index].name}
          ratingAverage={restaurants[index].rating.average}
          deliveryFee={restaurants[index].deliveryFee}
        />
      ))}
    </div>
  );
}

export default Restaurants;