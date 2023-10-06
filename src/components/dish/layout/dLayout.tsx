import { HamburgerMenu, Logo } from "../../common/Pics";
import { SignInButton, RegisterButton } from "../../common/Buttons";
import { SlideshowElement, Category } from "../elements/dElements";

export function DishHeader() {
  return (
    <div className="header">
      <div className="header-left">
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
      <div className="header-middle">
        <div className="location">
          <a></a>
        </div>
        <div className="input-header-container">
            <img className="magnifier-img" src="old UberEatsFiles/styles/icons/magnifier.png" />
            <input className="input-header" placeholder="Essen, Lebensmittel, Getränke usw." />
        </div>
      </div>
      <div className="header-right">
        <button className="header-right-shopping-cart">
          <div className="shopping-cart-container">
            <img className="shopping-cart-icon" src="old UberEatsFiles/styles/icons/shopping-cart-white.png" />
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
  return (
    <div className="categorys-container">
      <Category />

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
