import restaurants from "../../../data/restaurants"
import { SearchResultElementProps } from "../../../types/dish/elements/searchbar-elementsTypes";

export function SearchResults({ inputValue }: {inputValue: string}) {
  
  const searchResults = restaurants.filter((restaurant) => {
    return restaurant.name.toLowerCase().includes(inputValue.toLowerCase());;
  });

  return (
   <div style={{marginLeft: '280px'}}>
      {inputValue && searchResults.map((searchResult, index) => (
        <SearchResultElement 
          key={index}
          img={searchResult.restaurantImg}
          name={searchResult.name}
          priceRange={searchResult.priceRange}
          category={searchResult.categorie}
        />
      ))}
    </div> 
  )
}

function SearchResultElement({img, name, priceRange, category}: SearchResultElementProps) {
  return (
    <div className="search-result-container">
      <img className="search-result-img" src={img} alt="restaurant" />
      <div className="search-result-textcontainer">
        <div className="search-result-name">{name}</div> 
        <div className="search-result-subtopic">{priceRange}&#12539;{category}</div>
      </div>
    </div>
  )
}