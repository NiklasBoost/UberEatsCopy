import { HamburgerMenu, Logo } from "../../common/Pics";
import { SignInButton, RegisterButton } from "../../common/Buttons";
import { SlideshowElement, Category } from "../elements/dElements";
import { useEffect, useState } from "react";

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
  const categoryObjects = [
    {
      img: '/public/img/deals.png',
      text: 'Angebote',
    },
    {
      img: '/public/img/top_eats.png',
      text: 'Bestes Essen',
    },
    {
      img: '/public/img/alcohol.png',
      text: 'Alkohol'
    },
    {
      img: '/public/img/burger.png',
      text: 'Burger',
    },
    {
      img: '/public/img/chinese.png',
      text: 'Chinesisch',
    },
    {
      img: '/public/img/sandwich.png',
      text: 'Sandwich',
    },
    {
      img: '/public/img/thai.png',
      text: 'Thailändisch',
    },
    {
      img: '/public/img/sushi.png',
      text: 'Sushi',
    },
    {
      img: '/public/img/dessert.png',
      text: 'Dessert',
    },
    {
      img: '/public/img/asian.png',
      text: 'Asiatisch',
    },
    {
      img: '/public/img/american.png',
      text: 'Amerikanisch',
    },
    {
      img: '/public/img/convenience.png',
      text: 'Allgemeines Zeug',
    },
    {
      img: '/public/img/pet_supplies.png',
      text: 'Tierversorgung',
    },
    {
      img: '/public/img/healthy.png',
      text: 'Gesundes',
    }
  ];
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
