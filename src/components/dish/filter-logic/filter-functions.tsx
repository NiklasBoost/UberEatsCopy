import { Dispatch, SetStateAction } from "react";
import { Restaurant } from "../../../types/dish/layout/dLayoutTypes";

export function forYouSort(sState: Dispatch<SetStateAction<Restaurant[]>>) {
  sState((prevSt) => {
    const filtered = prevSt.filter((restaurant) => {
      return restaurant.newbie === true;
    });
    return filtered;
  })
}

export function popularSort(sState: Dispatch<SetStateAction<Restaurant[]>>) {
  sState((prevSt) => {    
    const sorted = prevSt.sort((a, b) => b.rating.count - a.rating.count)
    return sorted;
  }) 
}

export function ratingsSort(sState: Dispatch<SetStateAction<Restaurant[]>>) {
  sState((prevSt) => {
    const sorted = prevSt.sort((a, b) => {
      if(a.rating.average !== b.rating.average) {
        return b.rating.count - a.rating.average;
      } else {
        return b.rating.count - a.rating.count;
      }
    })
    return sorted;
  })
}

export function bestOverAllFilter(sState: Dispatch<SetStateAction<Restaurant[]>>) {
  sState((prevSt) => {
    const filtered = prevSt.filter((restaurant) => {
      return (
        !restaurant.newbie && 
        restaurant.rating.count && 
        restaurant.rating.count > 10 && 
        restaurant.rating.average && 
        restaurant.rating.average > 4.5 &&
        restaurant.deliveryFee &&
        restaurant.deliveryFee < 200
      )
    })
    return filtered;
  }) 
}


export function priceFilter(sState: Dispatch<SetStateAction<Restaurant[]>>, EUR: string) {
  sState((prevSt) => {    
    const filtered = prevSt.filter((restaurant) => {
      return restaurant.priceRange === EUR;
    })
    return filtered;
  })
}

export function veganFilter(sState: Dispatch<SetStateAction<Restaurant[]>>) {
  sState((prevSt) => {  
    const filtered = prevSt.filter((restaurant) => {
      return restaurant.vegan;
    })
    return filtered;
  })
}

export function veggyFilter(sState: Dispatch<SetStateAction<Restaurant[]>>) {
  sState((prevSt) => {  
    const filtered = prevSt.filter((restaurant) => {
      return restaurant.veggy;
    })
    return filtered;
  })
}

export function glutenfreeFilter(sState: Dispatch<SetStateAction<Restaurant[]>>) {
  sState((prevSt) => {  
    const filtered = prevSt.filter((restaurant) => {
      return restaurant.glutenfree;
    })
    return filtered;
  })
}

