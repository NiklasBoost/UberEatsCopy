import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const SignInButton = ({ signIn }: {signIn: string}) => {
  const [site, setSite] = useState<string | null>(''); 
  const navigate = useNavigate();
  
  useEffect(() => {
    setSite(currentSite)
  }, [signIn])

  function currentSite() {
    if (signIn === 'homeHeader') {
      return 'home'
    } else if (signIn === 'dishHeader') {
      return 'dish'
    } else {
      return null;
    }
  }

  function goToAuthPage() {
    navigate('/authsite');
  }
  
  if (signIn === 'homeHeader' || signIn === 'dishHeader') {
    return (
      <button onClick={goToAuthPage} className={`sign-in-button-${site}`}>
        <div className="sign-in-container">
          <img className="user-img" src="public/icons/User.png" />
          <p className={`sign-in-text-${site}`}>Anmelden</p>
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
    navigate('/authsite');
    
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

