const AuthSite = () => {
  return (
    <>
      <div className="header">
        <img className="header-logo" alt="logo" src="public/icons/UberEats-Auth.jpeg"/>
      </div>
      <div className="get-in-account-container">
        <p className="auth-question">Was ist deine Nummer oder eMail?</p>
        <input className="auth-input" placeholder="Gib deine Nummer oder eMail ein" type="text" />
        <button className="auth-button continue-button">Fortfahren</button>
        <div className="divider">or</div>
        <button className="auth-button">
          <div className="inside-button-container">
            <img className="button-img" src="public/icons/google.png" alt="button-img" />
            <div>Mit Google fortfahren</div>
          </div>
        </button>
        <button className="auth-button">
          <div className="inside-button-container">
            <img className="button-img" src="public/icons/apple-logo.png" alt="button-img" />
            <div>Mit Apple fortfahren</div>
          </div>
        </button>
        <button className="auth-button">
          <div className="inside-button-container">
            <img className="button-img" src="public/icons/facebook.png" alt="button-img" />
            <div>Mit Facebook fortfahren</div>
          </div>
        </button>
        <div className="divider">or</div>
        <button className="auth-button qr-code-button">
          <img  className="qr-code" src="public/icons/qr-code.png" alt="qr-code" />
          <div>Mit QR-Code einloggen</div>
        </button>
        <p className="should-know-p">Indem du fortfährst, erklärst du dich damit einverstanden, dass du von Uber und seinen verbundenen Unternehmen Anrufe, WhatsApp- oder SMS-Nachrichten, auch auf automatisiertem Weg, an die angegebene Nummer erhältst.</p>
        <p className="should-know-p">Diese Website ist durch reCAPTCHA geschützt und es gelten die <u> Datenschutzbestimmungen</u> und <u>Nutzungsbedingungen</u> von Google.</p>
        
      </div>
    </>
  )
}

export default AuthSite;