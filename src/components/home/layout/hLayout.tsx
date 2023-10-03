import { HamburgerMenu, Logo } from "../../common/Pics";
import { SignInButton, RegisterButton } from "../../common/Buttons";
import { InputDeliveryAddress } from "../../common/Inputs";
import { PictureElementGroup } from "../elements/group";

export function HomeHeader() {
  return (
    <>
      <HamburgerMenu />
      <Logo />
      <InputDeliveryAddress />
      <SignInButton />
      <RegisterButton />
    </>
  );
}

export function Delivery() {
  return <InputDeliveryAddress />
}

export function PictureOptions() {
  return (
    <>
      <PictureElementGroup />
      <PictureElementGroup />
      <PictureElementGroup />
    </>
  )
}

export function Countries(){
  return <p>Ich Länder :)</p>
}