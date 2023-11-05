import { Dispatch, SetStateAction } from "react";
import { CatState, Restaurant } from "../../../types/dish/layout/dLayoutTypes";

export function categoryFilter(sState: Dispatch<SetStateAction<Restaurant[]>>, state: CatState) {
  if (state.dealsCat) {
    sState((prevSt) => {
      const filtered = prevSt.filter((restaurant) => {
        return restaurant.categorie === 'Angebote';
      })
      return filtered;
    })
  }
  if (state.bestEatCat) {
    sState((prevSt) => {
      const filtered = prevSt.filter((restaurant) => {
        return restaurant.categorie === 'Bestes Essen';
      })
      return filtered;
    })
  }
  if (state.alcoholCat) {
    sState((prevSt) => {
      const filtered = prevSt.filter((restaurant) => {
        return restaurant.categorie === 'Alkohol';
      })
      return filtered;
    })
  }
  if (state.burgerCat) {
    sState((prevSt) => {
      const filtered = prevSt.filter((restaurant) => {
        return restaurant.categorie === 'Burger';
      })
      return filtered;
    })
  }
  if (state.chineseCat) {
    sState((prevSt) => {
      const filtered = prevSt.filter((restaurant) => {
        return restaurant.categorie === 'Chinesisch';
      })
      return filtered;
    })
  }
  if (state.sandwichCat) {
    sState((prevSt) => {
      const filtered = prevSt.filter((restaurant) => {
        return restaurant.categorie === 'Sandwich';
      })
      return filtered;
    })
  }
  if (state.thaiCat) {
    sState((prevSt) => {
      const filtered = prevSt.filter((restaurant) => {
        return restaurant.categorie === 'Thailändisch';
      })
      return filtered;
    })
  }
  if (state.sushiCat) {
    sState((prevSt) => {
      const filtered = prevSt.filter((restaurant) => {
        return restaurant.categorie === 'Sushi';
      })
      return filtered;
    })
  }
  if (state.asiaCat) {
    sState((prevSt) => {
      const filtered = prevSt.filter((restaurant) => {
        return restaurant.categorie === 'Asiatisch';
      })
      return filtered;
    })
  }
  if (state.americanCat) {
    sState((prevSt) => {
      const filtered = prevSt.filter((restaurant) => {
        return restaurant.categorie === 'Amerikanisch';
      })
      return filtered;
    })
  }
  if (state.generalStuffCat) {
    sState((prevSt) => {
      const filtered = prevSt.filter((restaurant) => {
        return restaurant.categorie === 'Allgemeines Zeug';
      })
      return filtered;
    })
  }
  if (state.animalCareCat) {
    sState((prevSt) => {
      const filtered = prevSt.filter((restaurant) => {
        return restaurant.categorie === 'Tierversorgung';
      })
      return filtered;
    })
  }
  if (state.healthyCat) {
    sState((prevSt) => {
      const filtered = prevSt.filter((restaurant) => {
        return restaurant.categorie === 'Gesundes';
      })
      return filtered;
    })
  }
  if (state.fastFoodCat) {
    sState((prevSt) => {
      const filtered = prevSt.filter((restaurant) => {
        return restaurant.categorie === 'Fast Food';
      })
      return filtered;
    })
  }
  if (state.pizzaCat) {
    sState((prevSt) => {
      const filtered = prevSt.filter((restaurant) => {
        return restaurant.categorie === 'Pizza';
      })
      return filtered;
    })
  }
  if (state.koreanCat) {
    sState((prevSt) => {
      const filtered = prevSt.filter((restaurant) => {
        return restaurant.categorie === 'Koreanisch';
      })
      return filtered;
    })
  }
  if (state.indianCat) {
    sState((prevSt) => {
      const filtered = prevSt.filter((restaurant) => {
        return restaurant.categorie === 'Indisch';
      })
      return filtered;
    })
  }
  }
