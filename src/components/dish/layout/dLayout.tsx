import { HamburgerMenu, Logo } from "../../common/Pics";
import { SignInButton, RegisterButton } from "../../common/Buttons";
import { SlideshowElement, Category, Restaurant } from "../elements/dElements";
import { useEffect, useState, Dispatch, SetStateAction } from "react";
import categoryObjects from "../../../data/categories";
import restaurants from "../../../data/restaurants";
import { DietDropdownProps, FilterProps, PricesDropdownProps, SortDropdownProps, UberEatsDropdownProps } from "../../../types/dish/layout/dLayoutTypes";

export function DishHeader({
  setSidebarState,
}: {
  setSidebarState: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const signIn = "dishHeader";
  const signUp = "header-right-register";
  return (
    <div className="dish-header">
      <div className="d-header-left">
        <HamburgerMenu setSidebarState={setSidebarState} />
        <Logo />
        <div className="deliver-collection-container">
          <div className="white-choose-field"></div>
          <div className="deliver-collection">
            <div className="delivery">Lieferung</div>
            <div className="collection">Abholung</div>
          </div>
        </div>
      </div>
      <div className="d-header-middle">
        <div className="location">
          <a></a>
        </div>
        <div className="input-header-container">
          <img className="magnifier-img" src="public/icons/magnifier.png" />
          <input
            className="input-header"
            placeholder="Essen, Lebensmittel, Getränke usw."
          />
        </div>
      </div>
      <div className="d-header-right">
        <button className="header-right-shopping-cart">
          <div className="shopping-cart-container">
            <img
              className="shopping-cart-icon"
              src="public/icons/shopping-cart-white.png"
            />
            <p className="shopping-cart-text">Warenkorb &#8226; 0</p>
          </div>
        </button>
        <SignInButton signIn={signIn} />
        <RegisterButton signUp={signUp} />
      </div>
    </div>
  );
}

export function Categories() {
  const [categories, setCategories] = useState<{ img: string; text: string }[]>(
    []
  );

  //category randomizer
  useEffect(() => {
    const remainingCategories = [...categoryObjects.slice(2)];
    for (let i = remainingCategories.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [remainingCategories[i], remainingCategories[j]] = [
        remainingCategories[j],
        remainingCategories[i],
      ];
    }

    const firstTwoCategories = categoryObjects.slice(0, 2);

    const displayCategories = [...firstTwoCategories, ...remainingCategories];

    setCategories(displayCategories);
  }, []);

  return (
    <div className="categorys-container">
      {categories.map((category, index) => (
        <Category
          key={index}
          categoryImg={category.img}
          categoryText={category.text}
        />
      ))}
    </div>
  );
}

export function Slideshow() {
  return (
    <div className="slideshow">
      <div className="slideshow-list">
        <SlideshowElement />
        <SlideshowElement />
        <SlideshowElement />
      </div>
    </div>
  );
}

export function MealChoose() {
  const [forYouFilter, setForYouFilter] = useState(false);
  const [popularFilter, setPopularFilter] = useState(false);
  const [ratingFilter, setRatingFilter] = useState(false);
  const [deliveryTimeFilter, setDeliveryTimeFilter] = useState(false);
  const [uberEatsFilter, setUberEatsFilter] = useState(false);
  const [oneEURFilter, setOneEURFilter] = useState(false);
  const [twoEURFilter, setTwoEURFilter] = useState(false);
  const [threeEURFilter, setThreeEURFilter] = useState(false);
  const [fourEURFilter, setFourEURFilter] = useState(false);
  const [veggyFilter, setVeggyFilter] = useState(false);
  const [veganFilter, setVeganFilter] = useState(false);
  const [glutenFreeFilter, setGlutenFreeFilter] = useState(false);

  
 function onlyOneFilterTrue(setState: Dispatch<SetStateAction<boolean>>) {
    setForYouFilter(false);
    setPopularFilter(false);
    setRatingFilter(false);
    setDeliveryTimeFilter(false);
    setUberEatsFilter(false);
    setOneEURFilter(false);
    setTwoEURFilter(false);
    setThreeEURFilter(false);
    setFourEURFilter(false);
    setVeggyFilter(false);
    setVeganFilter(false);
    setGlutenFreeFilter(false);

    setState(true);
  }

  return (
    <div className="meal-choose">
      <Filter 
        forYouFilter={forYouFilter}
        setForYouFilter={setForYouFilter}
        popularFilter={popularFilter}
        setPopularFilter={setPopularFilter}
        ratingFilter={ratingFilter}
        setRatingFilter={setRatingFilter}
        deliveryTimeFilter={deliveryTimeFilter}
        setDeliveryTimeFilter={setDeliveryTimeFilter}
        uberEatsFilter={uberEatsFilter}
        setUberEatsFilter={setUberEatsFilter}
        oneEURFilter={oneEURFilter}
        setOneEURFilter={setOneEURFilter}
        twoEURFilter={twoEURFilter}
        setTwoEURFilter={setTwoEURFilter}
        threeEURFilter={threeEURFilter}
        setThreeEURFilter={setThreeEURFilter}
        fourEURFilter={fourEURFilter}
        setFourEURFilter={setFourEURFilter}
        veggyFilter={veggyFilter}
        setVeggyFilter={setVeggyFilter}
        veganFilter={veganFilter}
        setVeganFilter={setVeganFilter}
        glutenFreeFilter={glutenFreeFilter}
        setGlutenFreeFilter={setGlutenFreeFilter}
        onlyOneFilterTrue={onlyOneFilterTrue}
      />
      <Restaurants />
    </div>
  );
}

function Filter({ 
  forYouFilter, 
  setForYouFilter, 
  popularFilter, 
  setPopularFilter, 
  ratingFilter, 
  setRatingFilter, 
  deliveryTimeFilter, 
  setDeliveryTimeFilter, 
  uberEatsFilter, 
  setUberEatsFilter, 
  oneEURFilter, 
  setOneEURFilter, 
  twoEURFilter, 
  setTwoEURFilter, 
  threeEURFilter, 
  setThreeEURFilter, 
  fourEURFilter, 
  setFourEURFilter,
  veggyFilter, 
  setVeggyFilter, 
  veganFilter, 
  setVeganFilter, 
  glutenFreeFilter, 
  setGlutenFreeFilter, 
  onlyOneFilterTrue }: FilterProps) {
  
  function changeDropdownState(setState: Dispatch<SetStateAction<boolean>>) {
    setState((prevState: boolean) => !prevState);
  }
  
  return (
    <div className="filter">
      <SortDropdown 
        changeDropdownState={changeDropdownState}
        forYouFilter={forYouFilter}
        setForYouFilter={setForYouFilter}
        popularFilter={popularFilter}
        setPopularFilter={setPopularFilter}
        ratingFilter={ratingFilter}
        setRatingFilter={setRatingFilter}
        deliveryTimeFilter={deliveryTimeFilter}
        setDeliveryTimeFilter={setDeliveryTimeFilter}
        onlyOneFilterTrue={onlyOneFilterTrue}
      />
      <UberEatsDropdown 
        changeDropdownState={changeDropdownState}
        uberEatsFilter={uberEatsFilter}
        setUberEatsFilter={setUberEatsFilter}
        onlyOneFilterTrue={onlyOneFilterTrue}
      />
      <PricesDropdown 
        changeDropdownState={changeDropdownState}
        oneEURFilter={oneEURFilter}
        setOneEURFilter={setOneEURFilter}
        twoEURFilter={twoEURFilter}
        setTwoEURFilter={setTwoEURFilter}
        threeEURFilter={threeEURFilter}
        setThreeEURFilter={setThreeEURFilter}
        fourEURFilter={fourEURFilter}
        setFourEURFilter={setFourEURFilter}
        onlyOneFilterTrue={onlyOneFilterTrue}
      />
      <DietDropdown 
        changeDropdownState={changeDropdownState}
        veggyFilter={veggyFilter}
        setVeggyFilter={setVeggyFilter}
        veganFilter={veganFilter}
        setVeganFilter={setVeganFilter}
        glutenFreeFilter={glutenFreeFilter}
        setGlutenFreeFilter={setGlutenFreeFilter}
        onlyOneFilterTrue={onlyOneFilterTrue}
      />
    </div>
  );
}

function SortDropdown({ 
  changeDropdownState, 
  forYouFilter, 
  setForYouFilter,
  popularFilter,
  setPopularFilter,
  ratingFilter,
  setRatingFilter,
  deliveryTimeFilter,
  setDeliveryTimeFilter,
  onlyOneFilterTrue }: SortDropdownProps) {

  const [sortFolded, setSortFolded] = useState(false);
  const [sortStyle, setSortStyle] = useState({});
  
  useEffect(() => {
    if(sortFolded) {
      setSortStyle({ display: 'none' });
    } else {
      setSortStyle({ display: 'block' });
    }
  }, [sortFolded])
  
  return (
    <>
      <div className="sort-dropdown-container">
        <div className="dropdown-text">Sortieren</div>
          <svg
            onClick={() => changeDropdownState(setSortFolded)}
            className="dropdown-svg dropdown-svg-js"
            width="25px"
            height="16px"
            fill="none"
            viewBox="0 0 48 20"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
          >
            {sortFolded ? (
              <path
                d="M34 11.7494V14.916L24 7.91602L14 14.916V11.7494L24 4.74939L34 11.7494Z"
                fill="currentColor"
              ></path>
            ) : (
              <path
                d="M14 5.08398L24 12.084L34 5.08398V7.25044L24 14.2504L14 7.25044V5.08398Z"
                fill="currentColor"
              ></path>
            )}  
          </svg>
      </div>
      <div className="sort-dropdown-values" style={sortStyle}>
        <label className="sort-dropdown-label">
          <input 
            className="sort-dropdown" 
            type="radio" 
            name="sortDropdown" 
            value="forYou" 
            checked={forYouFilter} 
            onClick={() => {
              onlyOneFilterTrue(setForYouFilter)
            }}/> 
          <div>Für dich ausgesucht (Standard)</div>
        </label>
        
        <label className="sort-dropdown-label">
          <input 
            className="sort-dropdown" 
            type="radio" 
            name="sortDropdown"
            value="mostPopular"
            checked={popularFilter}
            onClick={() => {
              onlyOneFilterTrue(setPopularFilter)
            }} /> 
          <div>Am beliebtesten</div>
        </label>
        
        <label className="sort-dropdown-label">
          <input 
            className="sort-dropdown" 
            type="radio" 
            name="sortDropdown" 
            value="rating" 
            checked={ratingFilter}
            onClick={() => {
              onlyOneFilterTrue(setRatingFilter)
            }}/> 
          <div>Bewertung</div>
        </label>
        
        <label className="sort-dropdown-label">
          <input 
            className="sort-dropdown" 
            type="radio" 
            name="sortDropdown" 
            value="deliveryTime" 
            checked={deliveryTimeFilter}
            onClick={() => {
              onlyOneFilterTrue(setDeliveryTimeFilter)
            }} />
          <div>Lieferzeit</div> 
        </label>      
      </div>
    </>  
  )
}


function UberEatsDropdown({ 
  changeDropdownState,
  uberEatsFilter,
  setUberEatsFilter,
  onlyOneFilterTrue }: UberEatsDropdownProps) {
  const [uberEatsFolded, setUberEatsFolded] = useState(false);
  const [uberEatsStyle, setUberEatsStyle] = useState({});
  
  useEffect(() => {
    if(uberEatsFolded) {
      setUberEatsStyle({ display: 'none' });
    } else {
      setUberEatsStyle({ display: 'flex' });
    }
  }, [uberEatsFolded])
  
  return (
    <>
      <div className="ubereats-dropdown-container">
        <div className="dropdown-text">Von Uber Eats</div>
        <svg
          onClick={() => changeDropdownState(setUberEatsFolded)}
          className="dropdown-svg dropdown-svg-js"
          width="25px"
          height="16px"
          fill="none"
          viewBox="0 0 48 20"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
          >
          {uberEatsFolded ? (
            <path
            d="M34 11.7494V14.916L24 7.91602L14 14.916V11.7494L24 4.74939L34 11.7494Z"
            fill="currentColor"
            ></path>
            ) : (
              <path
              d="M14 5.08398L24 12.084L34 5.08398V7.25044L24 14.2504L14 7.25044V5.08398Z"
              fill="currentColor"
            ></path>
            )}
        </svg>
      </div>
      <div className="ubereats-dropdown-values" style={uberEatsStyle}>
        <img className="best-ones-img" src="/public/icons/gold-medal.png" alt="best of the best" />
        <div>Beste Gesamtleistung</div>
        <label className="switch">
          <input 
            type="checkbox" 
            checked={uberEatsFilter} 
            onClick={() => onlyOneFilterTrue(setUberEatsFilter)}/>
          <span className="slider round"></span>
        </label>
      </div>
    </>
  )
}

function PricesDropdown({ 
  changeDropdownState,
  oneEURFilter,
  setOneEURFilter,
  twoEURFilter,
  setTwoEURFilter,
  threeEURFilter,
  setThreeEURFilter,
  fourEURFilter,
  setFourEURFilter,
  onlyOneFilterTrue }: PricesDropdownProps) {
  const [pricesFolded, setPricesFolded] = useState(false);
  const [pricesStyle, setPricesStyle] = useState({});

  const [oneButtonActiv, setOneButtonActiv] = useState({});
  const [twoButtonActiv, setTwoButtonActiv] = useState({});
  const [threeButtonActiv, setThreeButtonActiv] = useState({});
  const [fourButtonActiv, setFourButtonActiv] = useState({});
  
  useEffect(() => {
    if(pricesFolded) {
      setPricesStyle({ display: 'none' });
    } else {
      setPricesStyle({ display: 'flex' });
    }
  }, [pricesFolded])


  useEffect(() => {
    if(oneEURFilter) {
      setOneButtonActiv({ filter: 'brightness(0.7)' });
    } else {
      setOneButtonActiv({ filter: 'none' });
    }
  }, [oneEURFilter])
  
  useEffect(() => {
    if(twoEURFilter) {
      setTwoButtonActiv({ filter: 'brightness(0.7)' });
    } else {
      setTwoButtonActiv({ filter: 'none' });
    }
  }, [twoEURFilter])

  useEffect(() => {
    if(threeEURFilter) {
      setThreeButtonActiv({ filter: 'brightness(0.7)' });
    } else {
      setThreeButtonActiv({ filter: 'none' });
    }
  }, [threeEURFilter])

  useEffect(() => {
    if(fourEURFilter) {
      setFourButtonActiv({ filter: 'brightness(0.7)' });
    } else {
      setFourButtonActiv({ filter: 'none' });
    }
  }, [fourEURFilter])




  return (
    <>
      <div className="prices-dropdown-container">
        <div className="dropdown-text">Preisklasse</div>
        <svg
          onClick={() => changeDropdownState(setPricesFolded)}
          className="dropdown-svg dropdown-svg-js"
          width="25px"
          height="16px"
          fill="none"
          viewBox="0 0 48 20"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
          >
          {pricesFolded ? (
            <path
            d="M34 11.7494V14.916L24 7.91602L14 14.916V11.7494L24 4.74939L34 11.7494Z"
            fill="currentColor"
            ></path>
            ) : (
              <path
              d="M14 5.08398L24 12.084L34 5.08398V7.25044L24 14.2504L14 7.25044V5.08398Z"
              fill="currentColor"
              ></path>
              )}
        </svg>
      </div>
      <div className="prices-dropdown-values" style={pricesStyle}>
        <button 
          onClick={() => onlyOneFilterTrue(setOneEURFilter)} className="price-button"
          style={oneButtonActiv}
        >
          &#8364;
        </button>

        <button 
          onClick={() => onlyOneFilterTrue(setTwoEURFilter)} className="price-button"
          style={twoButtonActiv}
        >
          &#8364;&#8364;
        </button>

        <button 
          onClick={() => onlyOneFilterTrue(setThreeEURFilter)} className="price-button"
          style={threeButtonActiv}
        >
          &#8364;&#8364;&#8364;
        </button>

        <button 
          onClick={() => onlyOneFilterTrue(setFourEURFilter)} className="price-button"
          style={fourButtonActiv}
        >
          &#8364;&#8364;&#8364;&#8364;
        </button>
      </div>  
    </>
  ) 
}

function DietDropdown({ 
  changeDropdownState,
  veggyFilter,
  setVeggyFilter,
  veganFilter,
  setVeganFilter,
  glutenFreeFilter,
  setGlutenFreeFilter,
  onlyOneFilterTrue }: DietDropdownProps) { 
  const [dietFolded, setDietFolded] = useState(false);
  const [dietStyle, setDietStyle] = useState({});
  
  const [veggyButtonActiv, setVeggyButtonActiv] = useState({});
  const [veganButtonActiv, setVeganButtonActiv] = useState({});
  const [glutenFreeButtonActiv, setGlutenFreeButtonActiv] = useState({});
   
  useEffect(() => {
    if(dietFolded) {
      setDietStyle({ display: 'none' });
    } else {
      setDietStyle({ display: 'flex' });
    }
  }, [dietFolded])

  useEffect(() => {
    if(veggyFilter) {
      setVeggyButtonActiv({ filter: 'brightness(0.7)' });
    } else {
      setVeggyButtonActiv({ filter: 'none' });
    }
  }, [veggyFilter])

  useEffect(() => {
    if(veganFilter) {
      setVeganButtonActiv({ filter: 'brightness(0.7)' });
    } else {
      setVeganButtonActiv({ filter: 'none' });
    }
  }, [veganFilter])

  useEffect(() => {
    if(glutenFreeFilter) {
      setGlutenFreeButtonActiv({ filter: 'brightness(0.7)' });
    } else {
      setGlutenFreeButtonActiv({ filter: 'none' });
    }
  }, [glutenFreeFilter])
  
  return (
    <>
      <div className="diet-dropdown-container">
        <div className="dropdown-text">Besondere Diätvorschriften</div>
        <svg
          onClick={() => changeDropdownState(setDietFolded)}
          className="dropdown-svg dropdown-svg-js"
          width="25px"
          height="16px"
          fill="none"
          viewBox="0 0 48 20"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
          >
          {dietFolded ? (
            <path
            d="M34 11.7494V14.916L24 7.91602L14 14.916V11.7494L24 4.74939L34 11.7494Z"
            fill="currentColor"
            ></path>
            ) : (
              <path
              d="M14 5.08398L24 12.084L34 5.08398V7.25044L24 14.2504L14 7.25044V5.08398Z"
              fill="currentColor"
              ></path>
              )}
        </svg>
      </div>
      <div className="diet-dropdown-values" style={dietStyle}>
        
        <button 
          onClick={() => onlyOneFilterTrue(setVeggyFilter)} className="diet-button"
          style={veggyButtonActiv}
        >
          <img className="diet-button-icon" src="/public/icons/leaf.png" alt="Vegetarisch" />
          <div>Vegetarisch</div>
        </button>

        <button 
          onClick={() => onlyOneFilterTrue(setVeganFilter)} className="diet-button"
          style={veganButtonActiv}
        >
          <img className="diet-button-icon" src="/public/icons/heart.png" alt="Vegan"/>
          <div>Vegan</div>
        </button>
        
        <button 
          onClick={() => onlyOneFilterTrue(setGlutenFreeFilter)} className="diet-button"
          style={glutenFreeButtonActiv}
        >
          <img className="diet-button-icon" src="/public/icons/wheat.png" alt="Glutenfrei" />
          <div>Glutenfrei</div>
        </button>

      </div>
    </> 
  )
}


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