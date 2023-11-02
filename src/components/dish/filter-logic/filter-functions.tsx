

export function forYouSort(sState) {
  sState((prevSt) => {
    const filtered = prevSt.filter((restaurant) => {
      return restaurant.newbie === true;
    });
    return filtered;
  })
}

export function popularSort(sState) {
  sState((prevSt) => {
    const sorted = prevSt.sort((a, b) => b.rating.count - a.rating.count)
    return sorted;
  }) 
}

export function ratingsSort(sState) {
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

export function bestOverAllFilter(sState) {
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


export function priceFilter(sState, EUR) {
  sState((prevSt) => {    
    const filtered = prevSt.filter((restaurant) => {
      return restaurant.priceRange === EUR;
    })
    return filtered;
  })
}

export function veganFilter(sState) {
  sState((prevSt) => {  
    const filtered = prevSt.filter((restaurant) => {
      return restaurant.vegan;
    })
    return filtered;
  })
}

export function veggyFilter(sState) {
  sState((prevSt) => {  
    const filtered = prevSt.filter((restaurant) => {
      return restaurant.veggy;
    })
    return filtered;
  })
}

export function glutenfreeFilter(sState) {
  sState((prevSt) => {  
    const filtered = prevSt.filter((restaurant) => {
      return restaurant.glutenfree;
    })
    return filtered;
  })
}

