import { SignInButton, RegisterButton } from "../Buttons";
import { BusinessAccount, AddRestaurant, CourierRegistration } from "../../home/elements/links";
import { Logo } from "../Pics";


export function Footer() {
  return (
     <div className="footer">
      <div className="upper-container">
        <div className="logo-and-stores-container">
          <div className="logo-container">
            <Logo />
          </div>
          <div className="stores-container">
            <img className="stores-img" src="old UberEatsFiles/styles/Mainside/icons/appstore.svg" />
            <img className="stores-img" src="old UberEatsFiles/styles/Mainside/icons/google-play-store.png" />
          </div>
        </div>
        <div className="links-container">
          <a>Hilfe erhalten</a>
          <a>Restaurants in meiner Nähe</a>
          <a>Füge dein Restaurant hinzu</a>
          <a>Alle Städte anzeigen</a>
          <a>Registriere dich als Kurier</a>
          <a>Alle Länder anzeigen</a>
          <a>Ein Geschäftskonto anlegen</a>
          <a>Zur Abholung in meiner Nähe</a>
          <p></p>
          <a>Über Uber Eats</a>
          <p></p>
          <a>Deutsch</a>
        </div>
      </div>
      <div className="lower-container">
        <div className="first-row">
          <div className="first-row-icon-links">
            <img className="footer-icon" src="old UberEatsFiles/styles/Mainside/icons/facebook.png" />
            <img className="footer-icon" src="old UberEatsFiles/styles/Mainside/icons/twitter.png" />
            <img className="footer-icon" src="old UberEatsFiles/styles/Mainside/icons/instagram.png" />
          </div>
          <div className="first-row-text-links">
            <a className="first-row-text-link">Impressum</a>
            <a className="first-row-text-link">So funktionieren die Websites und Apps von Uber und Uber Eats</a>
            <a className="first-row-text-link">Datenschutzrichtlinien</a>
            <a className="first-row-text-link">Preise</a>
            <a className="first-row-text-link">Uber One kündigen</a>
            <a className="first-row-text-link">Meine persönlichen Daten nicht verkaufen oder weitergeben</a>
          </div>
        </div>
        <div className="second-row">
          <p>Diese Website ist durch reCAPTCHA geschützt. Es gelten die 
            <a>
              Datenschutzrichtlinie
            </a> 
            und 
            <a>
              Nutzungsbedingungen
            </a> von Google.</p>
          <p className="company-name">c 2023 Uber Technologies Inc.</p>
        </div>
      </div>  
    </div>  
  )
}

export function Sidebar() {
  return (
    <>
      <RegisterButton />
      <SignInButton />
      <BusinessAccount />
      <AddRestaurant />
      <CourierRegistration />
    </>
  )
}

