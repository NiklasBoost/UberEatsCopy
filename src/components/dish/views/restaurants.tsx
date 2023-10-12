import restaurants from "../../../data/restaurants";
import { RestaurantsProps } from "../../../types/dish/views/restraurantsTypes";
import { Restaurant } from "../elements/dElements";
import { BestOverallPerformanceView } from "./filterviews/byUberEats";
import { GlutenfreeView, VeganView, VeggyView } from "./filterviews/diet";
import { AffordableView, CheapView, ExpensiveView, MostExpensiveView } from "./filterviews/prices";
import { ForYouView, PopularsView, RatingsView } from "./filterviews/sort";


function Restaurants({ 
  forYouFilter, 
  popularFilter, 
  ratingFilter, 
  uberEatsFilter,
  oneEURFilter,
  twoEURFilter,
  threeEURFilter,
  fourEURFilter,
  veggyFilter,
  veganFilter,
  glutenFreeFilter }: RestaurantsProps) {
  if(forYouFilter) {
    return <ForYouView />
  } else if (popularFilter) {
    return <PopularsView />
  } else if(ratingFilter) {
    return <RatingsView />
  } else if(uberEatsFilter) {
    return <BestOverallPerformanceView />
  } else if(oneEURFilter) {
    return <CheapView />
  } else if (twoEURFilter) {
    return <AffordableView />
  } else if (threeEURFilter) {
    return <ExpensiveView />
  } else if (fourEURFilter) {
    return <MostExpensiveView />
  } else if (veggyFilter) {
    return <VeggyView />
  } else if (veganFilter) {
    return <VeganView />
  } else if (glutenFreeFilter) {
    return <GlutenfreeView />
  } else {
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
}

export default Restaurants;