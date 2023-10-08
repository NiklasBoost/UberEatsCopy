export function Logo() {
  return (    
    <a href="">
      <img 
        className="uber-eats-text-picture" 
        src="public/icons/Uber-eats-text.png" 
        alt="Uber Eats Logo"
      />
    </a> 
  )
}

export function HamburgerMenu({ setSidebarState }: {setSidebarState: React.Dispatch<React.SetStateAction<boolean>>}) {
  function changeState() {
    setSidebarState(true);
  }


  return (
    <svg onClick={changeState} className="burger-menu burger-menu-js" width="18" height="20" xmlns="http://www.w3.org/2000/svg">
      <line x1="0" y1="4" x2="30" y2="4" stroke="black" strokeWidth={2.5} />
      <line x1="0" y1="10" x2="30" y2="10" stroke="black" strokeWidth={2.5}/>
      <line x1="0" y1="16" x2="30" y2="16" stroke="black" strokeWidth={2.5}/>
    </svg>
  )
}

