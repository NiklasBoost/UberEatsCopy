import { HamburgerMenu, Logo } from "../../common/Pics";
import { SignInButton, RegisterButton } from "../../common/Buttons";
import { SlideshowElement, Category, Restaurant } from "../elements/dElements";
import { useEffect, useState } from "react";
import categoryObjects from "../../../data/categories";
import restaurants from "../../../data/restaurants";

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
  return (
    <div className="meal-choose">
      <Filter />
      <Restaurants />
    </div>
  );
}

function Filter() {
  return (
    <div className="filter">
      <div className="sort-dropdown-container">
        <div className="dropdown-text">Sortieren</div>
        <svg
          className="dropdown-svg dropdown-svg-js"
          width="25px"
          height="16px"
          fill="none"
          viewBox="0 0 48 20"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
        >
          <path
            d="M34 11.7494V14.916L24 7.91602L14 14.916V11.7494L24 4.74939L34 11.7494Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
      <div className="sort-dropdown-values">
        <label className="sort-dropdown-label">
          <input className="sort-dropdown" type="radio" name="sortDropdown" value="forYou" /> 
          <div>Für dich ausgesucht (Standard)</div>
        </label>
        <label className="sort-dropdown-label">
          <input className="sort-dropdown" type="radio" name="sortDropdown" value="mostPopular" /> 
          <div>Am beliebtesten</div>
        </label>
        <label className="sort-dropdown-label">
          <input className="sort-dropdown" type="radio" name="sortDropdown" value="rating" /> 
          <div>Bewertung</div>
        </label>
        <label className="sort-dropdown-label">
          <input className="sort-dropdown" type="radio" name="sortDropdown" value="deliveryTime" />
          <div>Lieferzeit</div> 
        </label>      
      </div>

      <div className="ubereats-dropdown-container">
        <div className="dropdown-text">Von Uber Eats</div>
        <svg
          className="dropdown-svg dropdown-svg-js"
          width="25px"
          height="16px"
          fill="none"
          viewBox="0 0 48 20"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
        >
          <path
            d="M34 11.7494V14.916L24 7.91602L14 14.916V11.7494L24 4.74939L34 11.7494Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
      <div className="ubereats-dropdown-values">
        <img className="best-ones-img" src="/public/icons/gold-medal.png" alt="best of the best" />
        <div>Beste Gesamtleistung</div>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>

      </div>

      <div className="prices-dropdown-container">
        <div className="dropdown-text">Preisklasse</div>
        <svg
          className="dropdown-svg dropdown-svg-js"
          width="25px"
          height="16px"
          fill="none"
          viewBox="0 0 48 20"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
        >
          <path
            d="M34 11.7494V14.916L24 7.91602L14 14.916V11.7494L24 4.74939L34 11.7494Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
      <div className="prices-dropdown-values">
        <button className="price-button">&#8364;</button>
        <button className="price-button">&#8364;&#8364;</button>
        <button className="price-button">&#8364;&#8364;&#8364;</button>
        <button className="price-button">&#8364;&#8364;&#8364;&#8364;</button>
      </div>
      
      <div className="deliveryfee-dropdown-container">
        <div className="dropdown-text">Max. Liefergebühr</div>
        <svg
          className="dropdown-svg dropdown-svg-js"
          width="25px"
          height="16px"
          fill="none"
          viewBox="0 0 48 20"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
        >
          <path
            d="M34 11.7494V14.916L24 7.91602L14 14.916V11.7494L24 4.74939L34 11.7494Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
      <div className="deliveryfee-dropdown-values">

      </div>

      <div className="diet-dropdown-container">
        <div className="dropdown-text">Besondere Diätvorschriften</div>
        <svg
          className="dropdown-svg dropdown-svg-js"
          width="25px"
          height="16px"
          fill="none"
          viewBox="0 0 48 20"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
          >
          <path
            d="M34 11.7494V14.916L24 7.91602L14 14.916V11.7494L24 4.74939L34 11.7494Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
      <div className="diet-dropdown-values">
        
        <button className="diet-button">
          <img className="diet-button-icon" src="/public/icons/leaf.png" alt="Vegetarisch" />
          <div>Vegetarisch</div>
        </button>

        <button className="diet-button">
          <img className="diet-button-icon" src="/public/icons/heart.png" alt="Vegan"/>
          <div>Vegan</div>
        </button>
        
        <button className="diet-button">
          <img className="diet-button-icon" src="/public/icons/wheat.png" alt="Glutenfrei" />
          <div>Glutenfrei</div>
        </button>

      </div>
      
    </div>
  );
}

function Restaurants() {
  return (
    <div className="restaurants">
      {restaurants.map((restaurant, index) => (
        <Restaurant
          restaurantImg={restaurants[index].restaurantImg}
          name={restaurants[index].name}
          ratingAverage={restaurants[index].rating.average}
          deliveryFee={restaurants[index].deliveryFee}
        />
      ))}
    </div>
  );
}
