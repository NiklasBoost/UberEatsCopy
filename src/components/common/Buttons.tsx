
// Ich denke, es macht hier am meisten Sinn, beide JSX Strukturen drin zu haben und je nach übergebenen Props nur einen von beiden zurückzugeben 
export function SignInButton() {
  return (
    <>
      <button className="sign-in-button">
        <div className="sign-in-button-div">
          <img className="user-img" src="public/icons/User.png" />
          <p className="sign-in-button-text">Anmelden</p>
        </div>
      </button>

      {/* <button className="login-button">Anmelden</button> */}
    </>

  )
}

//Je nach Komponentenverwendung, darf halt nur eine der beiden Klassen verwendet oder übergeben werden. Wie ich das genau anstelle, steht ja nicht nur bei dieser Komponente hier offen
export function RegisterButton() {
  return (
    <button 
      className="
        sign-up-button
        ">
      Registrieren
    </button>
  )
}

// register-button
