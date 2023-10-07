import { HamburgerMenu, Logo } from "../../common/Pics";
import { SignInButton, RegisterButton } from "../../common/Buttons";
import { SlideshowElement, Category } from "../elements/dElements";

export function DishHeader() {
  return (
    <div className="dish-header">
      <div className="d-header-left">
        <HamburgerMenu />
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
        <SignInButton />
        <RegisterButton />
      </div>
    </div>
  
  )
}

export function Categories() {
  const img = [
    '/public/img/alcohol.png',
    '/public/img/deals.png',
    '/public/img/burger.png',
    '/public/img/chinese.png',
    '/public/img/sandwich.png',
    '/public/img/thai.png',
    '/public/img/sushi.png',
    '/public/img/dessert.png',
    '/public/img/asian.png',
    '/public/img/american.png',
    '/public/img/top_eats.png'
  ];
  const text = [
    'Alkohol',
    'Angebote',
    'Burger',
    'Chinesisch',
    'Sandwich',
    'Thailändisch',
    'Sushi',
    'Dessert',
    'Asiatisch',
    'Amerikanisch',
    'Bestes Essen'
  ];
  return (
    <div className="categorys-container">
      <Category 
        categoryImg={img[0]}
        categoryText={text[0]}
      />
       <Category 
        categoryImg={img[1]}
        categoryText={text[1]}
      />
      <Category 
        categoryImg={img[2]}
        categoryText={text[2]}
      />
       <Category 
        categoryImg={img[3]}
        categoryText={text[3]}
      />
      <Category 
        categoryImg={img[4]}
        categoryText={text[4]}
      />
       <Category 
        categoryImg={img[5]}
        categoryText={text[5]}
      />
      <Category 
        categoryImg={img[6]}
        categoryText={text[6]}
      />
       <Category 
        categoryImg={img[7]}
        categoryText={text[7]}
      />
      <Category 
        categoryImg={img[8]}
        categoryText={text[8]}
      />
      <Category 
        categoryImg={img[9]}
        categoryText={text[9]}
      />
      <Category 
        categoryImg={img[10]}
        categoryText={text[10]}
      
      />
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
