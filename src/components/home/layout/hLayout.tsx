import { HamburgerMenu, Logo } from "../../common/Pics";
import { SignInButton, RegisterButton } from "../../common/Buttons";
import { InputDeliveryAddress } from "../../common/Inputs";
import { PictureElementGroup } from "../elements/group";

export function HomeHeader() {
  return (
    <div className="header">
      <div className="header-left">
        <HamburgerMenu />
        <Logo />
      </div>
      <div className="header-middle">
        <InputDeliveryAddress />
      </div>
      <div className="header-right">
        <SignInButton />
        <RegisterButton />
      </div>
    </div>
  );
}

export function Delivery() {
  return <InputDeliveryAddress />
}

export function PictureOptions() {
  return (
    <>
      <PictureElementGroup />
      <PictureElementGroup />
      <PictureElementGroup />
    </>
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