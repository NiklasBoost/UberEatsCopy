import { useNavigate } from "react-router-dom";

export const SignInButton = ({ signIn }: {signIn: string}) => {
  
  const navigate = useNavigate();
  
  function goToAuthPage() {
    navigate('/authsite');
    
  }
  
  if (signIn === 'homeHeader') {
    return (
      <button onClick={goToAuthPage} className="sign-in-button">
        <div className="sign-in-button-div">
          <img className="user-img" src="public/icons/User.png" />
          <p className="sign-in-button-text">Anmelden</p>
        </div>
      </button>
    );
  } else if (signIn === 'dishHeader') {
    return (
      <button onClick={goToAuthPage} className="header-right-sign-in">
        <div className="sign-in-container">
          <img className="user-img" src="public/icons/User.png" />
          <p className="sign-in-text">Anmelden</p>
        </div>
      </button>
    );
  } else if (signIn === 'sidebar') {
    return (
      <button onClick={goToAuthPage} className="login-button">Anmelden</button> 
    );
  } else {
    return null;
  }  
}


export const RegisterButton = ({ signUp }: {signUp: string}) => {
  const navigate = useNavigate();
  
  function goToAuthPage() {
    navigate('/auth');
    
  }

  return (
    <button 
      onClick={goToAuthPage}
      className={signUp}
    >
      Registrieren
    </button>
  )
}

