import { SignInButton, RegisterButton } from "../Buttons";
import { BusinessAccount, AddRestaurant, CourierRegistration } from "../../home/elements/links";
import { Logo } from "../Pics";


export function Footer() {
  return (
    <>
      <Logo />
    
    </>
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