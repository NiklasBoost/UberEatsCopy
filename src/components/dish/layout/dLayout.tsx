import { HamburgerMenu, Logo } from "../../common/Pics";
import { SignInButton, RegisterButton } from "../../common/Buttons";
import { SlideshowElement, Category } from "../elements/dElements";
import { useEffect, useState } from "react";
import categoryObjects from "../../../data/categories";

export function DishHeader({ setSidebarState }: {setSidebarState: React.Dispatch<React.SetStateAction<boolean>>}) {
  const signIn = 'dishHeader';
  const signUp = 'header-right-register'
  return (
    <div className="dish-header">
      <div className="d-header-left">
        <HamburgerMenu
          setSidebarState={setSidebarState}
        />
        <Logo />
        <div className="deliver-collection-container">
          <div className="white-choose-field"></div>
          <div className="deliver-collection">
            <div className="delivery">
              Lieferung
            </div>
            <div className="collection">
              Abholung
            </div>
          </div>
        </div>
      </div>
      <div className="d-header-middle">
        <div className="location">
          <a></a>
        </div>
        <div className="input-header-container">
            <img className="magnifier-img" src="public/icons/magnifier.png" />
            <input className="input-header" placeholder="Essen, Lebensmittel, Getränke usw." />
        </div>
      </div>
      <div className="d-header-right">
        <button className="header-right-shopping-cart">
          <div className="shopping-cart-container">
            <img className="shopping-cart-icon" src="public/icons/shopping-cart-white.png" />
            <p className="shopping-cart-text">Warenkorb &#8226; 0</p>
          </div>  
        </button>
        <SignInButton 
          signIn={signIn}
        />
        <RegisterButton 
          signUp={signUp}
        />
      </div>
    </div>
  
  )
}

export function Categories() {
  const [categories, setCategories] = useState<{ img: string; text: string; }[]>([]);

  //category randomizer
  useEffect(() => {
    const remainingCategories = [...categoryObjects.slice(2)];
    for (let i = remainingCategories.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [remainingCategories[i], remainingCategories[j]] = [remainingCategories[j], remainingCategories[i]];
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
  )
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
  )
}

export function MealChoose() {
  return (
    <div className="meal-choose">
      <Filter />
      <Restaurants />
    </div>
  )
}

function Filter() {
  return (
    <div className="filter">
      <div className="sort-dropdown-container">
        <div className="dropdown-text">Sortieren</div>
        <svg className="dropdown-svg dropdown-svg-js" width="25px" height="16px" fill="none" viewBox="0 0 48 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
          <path d="M34 11.7494V14.916L24 7.91602L14 14.916V11.7494L24 4.74939L34 11.7494Z" fill="currentColor"></path>
        </svg>
      </div>
      <div className="sort-dropdown-values">
        <div>Für dich ausgesucht (Standard)</div>
        <div>Am beliebtesten</div>
        <div>Bewertung</div>
        <div>Lieferzeit</div>
      </div>

      <div>Von Uber Eats</div>
      <div>Preisklasse</div>
      <div>Max. Liefergebühr</div>
      <div>Besondere Diätvorschriften</div>
    </div>
  )
}

function Restaurants() {
  return   <div className="meals">choose meal (this have to be generating by js)</div>
}