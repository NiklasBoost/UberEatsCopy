import restaurants from "../../../../data/restaurants";
import { Restaurant } from "../../elements/dElements";

export function ForYouView() {
  const forYou = restaurants.filter((restaurant) => {
    return restaurant.newbie === true;
  });


  return (
    <div className="restaurants">
      {forYou.map((restaurant, index) => (
        <Restaurant
          key={index}
          restaurantImg={forYou[index].restaurantImg}
          name={forYou[index].name}
          ratingAverage={forYou[index].rating.average}
          deliveryFee={forYou[index].deliveryFee}
        />
      ))}
    </div>
  );
}

export function PopularsView() {
  const popular = restaurants.filter((restaurant) => {
    return restaurant.rating.count !== null && restaurant.rating.count > 10;
  })

  popular.sort((a, b) => b.rating.count - a.rating.count);

  return (
    <div className="restaurants">
      {popular.map((restaurant, index) => (
        <Restaurant
          key={index}
          restaurantImg={popular[index].restaurantImg}
          name={popular[index].name}
          ratingAverage={popular[index].rating.average}
          deliveryFee={popular[index].deliveryFee}
        />
      ))}
    </div>
  );
}

export function RatingsView() {
  const ratings = restaurants
    .filter((restaurant) => {
      return restaurant.rating.count !== null && restaurant.rating.count > 30;
    })
    .sort((a, b) => {
      if(a.rating.average !== b.rating.average) {
        return b.rating.average - a.rating.average;
      } else {
        return b.rating.count - a.rating.count;
      }
    })

  return (
    <div className="restaurants">
      {ratings.map((restaurant, index) => (
        <Restaurant
          key={index}
          restaurantImg={ratings[index].restaurantImg}
          name={ratings[index].name}
          ratingAverage={ratings[index].rating.average}
          deliveryFee={ratings[index].deliveryFee}
        />
      ))}
    </div>
  );
}

function DeliveryFeeView() {
  
}