import { useEffect, useState } from "react";
import { HamburgerMenu, Logo } from "../../common/Pics";
import { SignInButton, RegisterButton } from "../../common/Buttons";
import { InputDeliveryAddress } from "../../common/Inputs";
import { PictureElementGroup } from "../elements/group";
import checkScrollLevel from "../scrollCheck";


export function HomeHeader({ scrollingState }: {scrollingState: boolean}) {
  const signIn = 'homeHeader';
  const signUp= 'sign-up-button';
  const inputClass = 'input-delivery-address header-input-delivery-address';
  const [headerStyle, setHeaderStyle] = useState({});
  const [headerMiddleStyle, setHeaderMiddleStyle] = useState({});

  useEffect(() => {
    console.log(scrollingState)
    checkScrollLevel(
      10, 
      () => setHeaderStyle({backgroundColor: 'white'}), 
      () => setHeaderStyle({backgroundColor: 'rgb(252,201,14)'})
    );
      
    checkScrollLevel(
      441, 
      () => setHeaderMiddleStyle({display: 'flex'}), 
      () => setHeaderMiddleStyle({display: 'none'})
    );
  }, [scrollingState])


  return (
    <div style={headerStyle} className="h-header">
      <div className="h-header-left">
        <HamburgerMenu />
        <Logo />
      </div>
      <div style={headerMiddleStyle} className="h-header-middle">
        <InputDeliveryAddress
          inputClass={inputClass}
        />
      </div>
      <div className="h-header-right">
        <SignInButton 
          signIn={signIn}  
        />
        <RegisterButton 
          signUp={signUp}
        />
      </div>
    </div>
  );
}


export function Delivery() {
  const inputClass = 'input-delivery-address';
  return (
    <div className="middlepart-with-background middlepart-with-background-js">
      <div className="find-eat-container">
        <h1 className="find-eat-headline">Dein Lieblingsessen an deine Tür geliefert</h1>
        <div className="find-eat-input-container">
          <InputDeliveryAddress
            inputClass={inputClass}
          />
          <select className="input-delivery-time">
              <option className="input-delivery-time-now">Jetzt liefern</option>
              <option className="input-delivery-time-later">Für später planen</option>
            </select>
            <button className="find-eat-button">Essen finden</button>

        </div>
        <p>
          <span>
            <a>
              <u>
                Anmelden 
              </u>
              &nbsp;
            </a>
          </span> 
          für deine zuletzt genutzten Adressen</p>
      </div>
    </div>
  ) 
}

export function PictureOptions() {
  const linkTextBusinessAccount = 'Ein Geschäftskonto anlegen'; 
  const linkTextAddRestraurant = 'Füge dein Restaurant hinzu';
  const linkTextCourierRegister = 'Registriere dich als Kurier';

  const maEatHL = 'Deinen Mitarbeitern Essen bestellen';
  const restaurantDeliveryHL = 'Ein Lieferservice für dein Restaurant';
  const deliveryUberEatsHL = 'Liefere über Uber Eats';
  const imgSourceleft = 'public/pictures/click_on_Laptop.webp';
  const imgSourceMiddle = 'public/pictures/Pan.webp';
  const imgSourceRight = 'public/pictures/rider.webp';

  return (
    <div className="middlepart-with-3-pictures">
      <PictureElementGroup 
        headLine={maEatHL}
        image={imgSourceleft}
        linkText={linkTextBusinessAccount}
      />
      <PictureElementGroup 
        headLine={restaurantDeliveryHL}
        image={imgSourceMiddle}
        linkText={linkTextAddRestraurant}
      />
      <PictureElementGroup 
        headLine={deliveryUberEatsHL}
        image={imgSourceRight}
        linkText={linkTextCourierRegister}
      />
    </div>
  )
}

export function Countries() {
  return (
    <div className="middlepart-with-countrys">
      <div className="middlepart-with-countrys-row">
        <div className="middlepart-with-countrys-header">
          <h1>Länder, in denen Uber Eats verfügbar ist</h1>
          <a href="">Alle Länder anzeigen</a>
        </div>
      </div>
      <div className="middlepart-with-countrys-row">
        <div className="country-grid-one">
          <a>Australien</a>
          <a>Frankreich</a>
          <a>Mexiko</a>
          <a>Spanien</a>
          <a>Belgien</a>
          <a>Großbritannien</a>
          <a>Neuseeland</a>
          <a>Sri Lanka</a>
          <a>Chile</a>
          <a>Guatemale</a>
          <a>Niederlande</a>
          <a>Südafrika</a>
          <a>Costa Rica</a>
          <a>Irland</a>
          <a>Panama</a>
          <a>Taiwan(VRC)</a>
          <a>Deutschland</a>
          <a>Italien</a>
          <a>Polen</a>
          <a>Vereinigten Staaten von Amerika</a>
          <a>Dominikanische Republik</a>
          <a>Japan</a>
          <a>Portugal</a>
          <a></a>
          <a>Ecuador</a>
          <a>Kanada</a>
          <a>Schweden</a>
          <a></a>
          <a>El Salvador</a>
          <a>Kenia</a>
          <a>Schweiz</a>
        </div>
      </div>
      <div className="middlepart-with-countrys-row">
        <a className="middlepart-with-countrys-p">So ordnet Uber Eats die Ereignisliste. <u>Mehr zum Ranking erfahren</u></a>
      </div>
    </div>
  )
}