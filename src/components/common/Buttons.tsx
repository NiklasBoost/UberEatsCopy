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
  } else if (signIn === 'dishHeader') {
    return (
      <button className="header-right-sign-in">
        <div className="sign-in-container">
          <img className="user-img" src="public/icons/User.png" />
          <p className="sign-in-text">Anmelden</p>
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


export function RegisterButton({ signUp }: {signUp: string}) {
  return (
    <button 
      className={signUp}>
      Registrieren
    </button>
  )
}

