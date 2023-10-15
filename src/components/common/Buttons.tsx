import { useNavigate } from "react-router-dom";

export function SignInButton({ signIn }: {signIn: string} ) {
  
  const navigate = useNavigate();
  
  function goToAuth() {
    navigate('/auth');
    
  }
  
  if (signIn === 'homeHeader') {
    return (
      <button onClick={goToAuth} className="sign-in-button">
        <div className="sign-in-button-div">
          <img className="user-img" src="public/icons/User.png" />
          <p className="sign-in-button-text">Anmelden</p>
        </div>
      </button>
    );
  } else if (signIn === 'dishHeader') {
    return (
      <button onClick={goToAuth} className="header-right-sign-in">
        <div className="sign-in-container">
          <img className="user-img" src="public/icons/User.png" />
          <p className="sign-in-text">Anmelden</p>
        </div>
      </button>
    );
  } else if (signIn === 'sidebar') {
    return (
      <button onClick={goToAuth} className="login-button">Anmelden</button> 
    );
  } else {
    return null;
  }  
}


export function RegisterButton({ signUp }: {signUp: string}) {
  const navigate = useNavigate();
  
  function goToAuth() {
    navigate('/auth');
    
  }

  return (
    <button 
      onClick={goToAuth}
      className={signUp}
    >
      Registrieren
    </button>
  )
}

