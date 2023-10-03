import { HamburgerMenu, Logo } from "../../common/Pics";
import { SignInButton, RegisterButton } from "../../common/Buttons";
import { SlideshowElement, Category } from "../elements/dElements";

export function DishHeader() {
  return (
    <>
      <HamburgerMenu />
      <Logo />
      <SignInButton />
      <RegisterButton />
    </>
  )
}

export function Categories() {
  return (
    <>
      <Category />
      <Category />
      <Category /> 
      <Category />
      <Category />
      <Category />
      <Category />
      <Category />
      <Category />
      <Category />
    </>
  )
}

export function Slideshow() {
  return (
    <>
      <SlideshowElement />
      <SlideshowElement />
      <SlideshowElement />  
    </>
  )
}