import restaurants from "../../../../data/restaurants";
import { Restaurant } from "../../elements/dElements";


export function BestOverallPerformanceView() {
  const bestOverAll = restaurants
    .filter((restaurant) => {
      return (
        !restaurant.newbie && 
        restaurant.rating.count && 
        restaurant.rating.count > 10 && 
        restaurant.rating.average && 
        restaurant.rating.average > 4.5 &&
        restaurant.deliveryFee &&
        restaurant.deliveryFee < 200
      )
    });

  return (
    <div className="restaurants">
      {bestOverAll.map((restaurant, index) => (
        <Restaurant
          key={index}
          restaurantImg={bestOverAll[index].restaurantImg}
          name={bestOverAll[index].name}
          ratingAverage={bestOverAll[index].rating.average}
          deliveryFee={bestOverAll[index].deliveryFee}
        />
      ))}
    </div>
  );
}