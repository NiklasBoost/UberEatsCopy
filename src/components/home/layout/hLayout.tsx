import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HamburgerMenu, LogoImg } from "../../common/Pics";
import { SignInButton, RegisterButton } from "../../common/Buttons";
import { InputDeliveryAddress } from "../../common/Inputs";
import { PictureElementGroup } from "../elements/group";
import checkScrollLevel from "../scrollCheck";
import { HomeHeaderProps } from "../../../types/home/layout/hLayoutTypes";


export const HomeHeader = ({ scrollingState, setSidebarState }: HomeHeaderProps) => {
  const signIn = 'homeHeader';
  const signUp= 'sign-up-button-home';
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
        <HamburgerMenu 
          setSidebarState={setSidebarState}
        />
        <LogoImg />
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


export const DeliveryAddressSection = () => {
  const inputClass = 'input-delivery-address';
  const navigate = useNavigate();
  
  function goToDishSite() {
    navigate('/dishsite');
    
  }

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
            <button 
              onClick={goToDishSite} 
              className="find-eat-button"
            >
              Essen finden
            </button>

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

export const PictureOptionsSection = () => {
  const linkTextBusinessAccount = 'Ein Geschäftskonto anlegen'; 
  const linkTextAddRestraurant = 'Füge dein Restaurant hinzu';
  const linkTextCourierRegister = 'Registriere dich als Kurier';

  const employeeEatHL = 'Deinen Mitarbeitern Essen bestellen';
  const restaurantDeliveryHL = 'Ein Lieferservice für dein Restaurant';
  const deliveryUberEatsHL = 'Liefere über Uber Eats';
  
  const imgSourceleft = 'public/pictures/click_on_Laptop.webp';
  const imgSourceMiddle = 'public/pictures/Pan.webp';
  const imgSourceRight = 'public/pictures/rider.webp';

  return (
    <div className="middlepart-with-3-pictures">
      <PictureElementGroup 
        headLine={employeeEatHL}
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

export const CountriesSection = () => {
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