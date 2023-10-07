export function SignInButton({ signIn }: {signIn: string} ) {
  
  if (signIn === 'homeHeader') {
    return (
      <button className="sign-in-button">
        <div className="sign-in-button-div">
          <img className="user-img" src="public/icons/User.png" />
          <p className="sign-in-button-text">Anmelden</p>
        </div>
      </button>
    );
  } else if (signIn === 'sidebar') {
    return (
      <button className="login-button">Anmelden</button> 
    );
  } else {
    return null;
  }  
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
