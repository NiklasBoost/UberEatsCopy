import restaurants from "../../../data/restaurants";
import { RestaurantsProps } from "../../../types/dish/views/restraurantsTypes";
import { Restaurant } from "../elements/dElements";
import { CategoryView } from "./categoryviews/categoryView";
import { BestOverallPerformanceView } from "./filterviews/byUberEats";
import { GlutenfreeView, VeganView, VeggyView } from "./filterviews/diet";
import { PriceView } from "./filterviews/prices";
import { ForYouView, PopularsView, RatingsView } from "./filterviews/sort";


function Restaurants({ 
  filter,
  setFilter,
  categoriesState }: RestaurantsProps) {

  if(filter.forYouFilter) {
    return <ForYouView />
  } else if (filter.popularFilter) {
    return <PopularsView />
  } else if(filter.ratingFilter) {
    return <RatingsView />
  } else if(filter.uberEatsFilter) {
    return <BestOverallPerformanceView />
  } else if(filter.oneEURFilter) {
    return <PriceView EUR={'€'} />
  } else if (filter.twoEURFilter) {
    return <PriceView EUR={'€€'} />
  } else if (filter.threeEURFilter) {
    return <PriceView EUR={'€€€'} />
  } else if (filter.fourEURFilter) {
    return <PriceView EUR={'€€€€'} />
  } else if (filter.veggyFilter) {
    return <VeggyView />
  } else if (filter.veganFilter) {
    return <VeganView />
  } else if (filter.glutenFreeFilter) {
    return <GlutenfreeView />
  } else if(categoriesState.dealsCat) {
    return <CategoryView cat={'Angebote'} />
  } else if(categoriesState.bestEatCat) {
    return <CategoryView cat={'Bestes Essen'} />
  } else if(categoriesState.alcoholCat) {
    return <CategoryView cat={'Alkohol'} />
  } else if(categoriesState.burgerCat) {
    return <CategoryView cat={'Burger'} />
  } else if(categoriesState.chineseCat) {
    return <CategoryView cat={'Chinesisch'} />
  } else if(categoriesState.sandwichCat) {
    return <CategoryView cat={'Sandwich'} />
  } else if(categoriesState.thaiCat) {
    return <CategoryView cat={'Thailändisch'} />    
  } else if(categoriesState.sushiCat) {
    return <CategoryView cat={'Sushi'} />
  } else if(categoriesState.dessertCat) {
    return <CategoryView cat={'Dessert'} />
  } else if(categoriesState.asiaCat) {
    return <CategoryView cat={'Asiatisch'} />
  } else if(categoriesState.americanCat) {
    return <CategoryView cat={'Amerikanisch'} /> 
  } else if(categoriesState.generalStuffCat) {
    return <CategoryView cat={'Allgemeines Zeug'} />
  } else if(categoriesState.animalCareCat) {
    return <CategoryView cat={'Tierversorgung'} />
  } else if(categoriesState.healthyCat) {
    return <CategoryView cat={'Gesundes'} />
  } else if(categoriesState.fastFoodCat) {
    return <CategoryView cat={'Fast Food'} />
  } else if(categoriesState.pizzaCat) {
    return <CategoryView cat={'Pizza'} />
  } else if(categoriesState.koreanCat) {
    return <CategoryView cat={'Koreanisch'} />
  } else if(categoriesState.indianCat) {
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