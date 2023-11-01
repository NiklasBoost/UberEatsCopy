import { SignInButton, RegisterButton } from "../Buttons";
import { UnderSiteLinks } from "../../home/elements/links";
import { LogoImg } from "../Pics";
import { useState, useEffect } from "react";


export const Footer= () => {
  return (
     <div className="footer">
      <div className="upper-container">
        <div className="logo-and-stores-container">
          <div className="logo-container">
            <LogoImg />
          </div>
          <div className="stores-container">
            <img className="stores-img" src="public/icons/appstore.svg" />
            <img className="stores-img" src="public/icons/google-play-store.png" />
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
            <img className="footer-icon" src="public/icons/facebook.png" />
            <img className="footer-icon" src="public/icons/twitter.png" />
            <img className="footer-icon" src="public/icons/instagram.png" />
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

export const Sidebar = ({ sidebarState }: {sidebarState: boolean}) => {
  const signIn = 'sidebar';
  const signUp = 'register-button';
  const linkClass = 'sidebar-link';
  const linkText = [
    'Ein Geschäftskonto anlegen',
    'Füge dein Restaurant hinzu',
    'Registriere dich als Kurier'
  ]
  const [sidebarStyle, setSidebarStyle] = useState({})

  useEffect(() => {
    if (sidebarState === true) {
      setSidebarStyle({left: '0px'})
    } else {
      setSidebarStyle({left: '-300px'})
    }
  }, [sidebarState])

  return (
    <div className="sidebar" style={sidebarStyle}>
      <div className="sidebar-container">
        <div className="upper-sidebar">
          <RegisterButton 
            signUp={signUp}
          />
          <SignInButton 
            signIn={signIn}
          />
          <UnderSiteLinks 
            linkClass={linkClass}
            linkText={linkText[0]}
          />
          <UnderSiteLinks 
            linkClass={linkClass}
            linkText={linkText[1]}
          />
          <UnderSiteLinks 
            linkClass={linkClass}
            linkText={linkText[2]}
          />
        </div>
        <div className="under-sidebar">
          <div className="app-intro-container">
            <img className="uber-eats-batch" src="public/icons/UberEats-batch.svg" />
            <p className="app-text">Die App hat noch mehr zu bieten.</p>
          </div>
          <div className="phone-buttons-container">
            <a className="phone-button">
              <img className="phone-logo" src="public/icons/apple-logo.png" />
              iPhone
            </a>
            <a className="phone-button">
              <img className="phone-logo" src="public/icons/android-logo.png" />
              Android
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}

