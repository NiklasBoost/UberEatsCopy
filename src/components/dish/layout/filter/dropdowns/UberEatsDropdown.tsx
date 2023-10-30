import { UberEatsDropdownProps } from "../../../../../types/dish/filter/dropdowns/UberEatsDropdownTypes";
import { useState, useEffect } from "react";

function UberEatsDropdown({ 
  changeDropdownState,
  filter,
  setFilter }: UberEatsDropdownProps) {
  const [uberEatsFolded, setUberEatsFolded] = useState(false);
  const [uberEatsStyle, setUberEatsStyle] = useState({});
  
  useEffect(() => {
    if(uberEatsFolded) {
      setUberEatsStyle({ display: 'none' });
    } else {
      setUberEatsStyle({ display: 'flex' });
    }
  }, [uberEatsFolded])
  
  return (
    <>
      <div className="ubereats-dropdown-container">
        <div className="dropdown-text">Von Uber Eats</div>
        <svg
          onClick={() => changeDropdownState(setUberEatsFolded)}
          className="dropdown-svg dropdown-svg-js"
          width="25px"
          height="16px"
          fill="none"
          viewBox="0 0 48 20"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
          >
          {uberEatsFolded ? (
            <path
            d="M34 11.7494V14.916L24 7.91602L14 14.916V11.7494L24 4.74939L34 11.7494Z"
            fill="currentColor"
            ></path>
            ) : (
              <path
              d="M14 5.08398L24 12.084L34 5.08398V7.25044L24 14.2504L14 7.25044V5.08398Z"
              fill="currentColor"
            ></path>
            )}
        </svg>
      </div>
      <div className="ubereats-dropdown-values" style={uberEatsStyle}>
        <img className="best-ones-img" src="/public/icons/gold-medal.png" alt="best of the best" />
        <div>Beste Gesamtleistung</div>
        <label className="switch">
          <input 
            type="checkbox" 
            checked={filter.uberEatsFilter} 
            onClick={() => {
              setFilter((prevFilter) => ({
                ...prevFilter,
                uberEatsFilter: !prevFilter.uberEatsFilter
              }));
            }} 
          />
          <span className="slider round"></span>
        </label>
      </div>
    </>
  )
}

export default UberEatsDropdown;