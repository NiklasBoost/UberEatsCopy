
// Ich denke, es macht hier am meisten Sinn, beide JSX Strukturen drin zu haben und je nach übergebenen Props nur einen von beiden zurückzugeben 
export function SignInButton() {
  return (
    <>
      <button className="sign-in-button">
        <div className="sign-in-button-div">
          <img className="user-img" src="old UberEatsFiles/styles/Mainside/icons/User.png" />
          <p className="sign-in-button-text">Anmelden</p>
        </div>
      </button>

      <button className="login-button">Anmelden</button>
    </>

  )
}

export function RegisterButton() {
  return <button>n butte</button>
}
