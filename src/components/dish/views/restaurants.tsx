import restaurants from "../../../data/restaurants";
import { RestaurantsProps } from "../../../types/dish/views/restraurantsTypes";
import { Restaurant } from "../elements/dElements";
import { CategoryView } from "./categoryviews/categoryView";
import { BestOverallPerformanceView } from "./filterviews/byUberEats";
import { GlutenfreeView, VeganView, VeggyView } from "./filterviews/diet";
import { PriceView } from "./filterviews/prices";
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
  glutenFreeFilter,
  dealsCat,
  bestEatCat,
  alcoholCat,
  burgerCat,
  chineseCat,
  thaiCat,
  sandwichCat,
  sushiCat,
  dessertCat,
  asiaCat,
  americanCat,
  generalStuffCat,
  animalCareCat,
  healthyCat,
  fastFoodCat,
  pizzaCat,
  koreanCat,
  indianCat }: RestaurantsProps) {

  if(forYouFilter) {
    return <ForYouView />
  } else if (popularFilter) {
    return <PopularsView />
  } else if(ratingFilter) {
    return <RatingsView />
  } else if(uberEatsFilter) {
    return <BestOverallPerformanceView />
  } else if(oneEURFilter) {
    return <PriceView EUR={'€'} />
  } else if (twoEURFilter) {
    return <PriceView EUR={'€€'} />
  } else if (threeEURFilter) {
    return <PriceView EUR={'€€€'} />
  } else if (fourEURFilter) {
    return <PriceView EUR={'€€€€'} />
  } else if (veggyFilter) {
    return <VeggyView />
  } else if (veganFilter) {
    return <VeganView />
  } else if (glutenFreeFilter) {
    return <GlutenfreeView />
  } else if(dealsCat) {
    return <CategoryView cat={'Angebote'} />
  } else if(bestEatCat) {
    return <CategoryView cat={'Bestes Essen'} />
  } else if(alcoholCat) {
    return <CategoryView cat={'Alkohol'} />
  } else if(burgerCat) {
    return <CategoryView cat={'Burger'} />
  } else if(chineseCat) {
    return <CategoryView cat={'Chinesisch'} />
  } else if(sandwichCat) {
    return <CategoryView cat={'Sandwich'} />
  } else if(thaiCat) {
    return <CategoryView cat={'Thailändisch'} />    
  } else if(sushiCat) {
    return <CategoryView cat={'Sushi'} />
  } else if(dessertCat) {
    return <CategoryView cat={'Dessert'} />
  } else if(asiaCat) {
    return <CategoryView cat={'Asiatisch'} />
  } else if(americanCat) {
    return <CategoryView cat={'Amerikanisch'} /> 
  } else if(generalStuffCat) {
    return <CategoryView cat={'Allgemeines Zeug'} />
  } else if(animalCareCat) {
    return <CategoryView cat={'Tierversorgung'} />
  } else if(healthyCat) {
    return <CategoryView cat={'Gesundes'} />
  } else if(fastFoodCat) {
    return <CategoryView cat={'Fast Food'} />
  } else if(pizzaCat) {
    return <CategoryView cat={'Pizza'} />
  } else if(koreanCat) {
    return <CategoryView cat={'Koreanisch'} />
  } else if(indianCat) {
    return <CategoryView cat={'Indisch'} />
  }else {
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