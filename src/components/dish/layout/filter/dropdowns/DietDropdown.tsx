import { DietDropdownProps } from "../../../../../types/dish/filter/dropdowns/DietDropdownTypes";
import { useState, useEffect } from "react";

const DietDropdown = ({ 
  changeDropdownState,
  filter,
  setFilter }: DietDropdownProps) => { 
  const [dietFolded, setDietFolded] = useState(false);
  const [dietStyle, setDietStyle] = useState({});
  
  const [veggyButtonActiv, setVeggyButtonActiv] = useState({});
  const [veganButtonActiv, setVeganButtonActiv] = useState({});
  const [glutenFreeButtonActiv, setGlutenFreeButtonActiv] = useState({});
   
  useEffect(() => {
    if(dietFolded) {
      setDietStyle({ display: 'none' });
    } else {
      setDietStyle({ display: 'flex' });
    }
  }, [dietFolded])

  useEffect(() => {
    if(filter.veggyFilter) {
      setVeggyButtonActiv({ filter: 'brightness(0.7)' });
    } else {
      setVeggyButtonActiv({ filter: 'none' });
    }
  }, [filter.veggyFilter])

  useEffect(() => {
    if(filter.veganFilter) {
      setVeganButtonActiv({ filter: 'brightness(0.7)' });
    } else {
      setVeganButtonActiv({ filter: 'none' });
    }
  }, [filter.veganFilter])

  useEffect(() => {
    if(filter.glutenFreeFilter) {
      setGlutenFreeButtonActiv({ filter: 'brightness(0.7)' });
    } else {
      setGlutenFreeButtonActiv({ filter: 'none' });
    }
  }, [filter.glutenFreeFilter])
  
  return (
    <>
      <div className="diet-dropdown-container">
        <div className="dropdown-text">Besondere Diätvorschriften</div>
        <svg
          onClick={() => changeDropdownState(setDietFolded)}
          className="dropdown-svg dropdown-svg-js"
          width="25px"
          height="16px"
          fill="none"
          viewBox="0 0 48 20"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
          >
          {dietFolded ? (
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
      <div className="diet-dropdown-values" style={dietStyle}>
        
        <button 
          onClick={() => {
            setFilter((prevFilter) => ({
              ...prevFilter,
              veggyFilter: !prevFilter.veggyFilter
            }));
          }} 
          className="diet-button"
          style={veggyButtonActiv}
        >
          <img className="diet-button-icon" src="/public/icons/leaf.png" alt="Vegetarisch" />
          <div>Vegetarisch</div>
        </button>

        <button 
          onClick={() => {
            setFilter((prevFilter) => ({
              ...prevFilter,
              veganFilter: !prevFilter.veganFilter
            }));
          }}  
          className="diet-button"
          style={veganButtonActiv}
        >
          <img className="diet-button-icon" src="/public/icons/heart.png" alt="Vegan"/>
          <div>Vegan</div>
        </button>
        
        <button 
          onClick={() => {
            setFilter((prevFilter) => ({
              ...prevFilter,
              glutenFreeFilter: !prevFilter.glutenFreeFilter
            }));
          }} 
          className="diet-button"
          style={glutenFreeButtonActiv}
        >
          <img className="diet-button-icon" src="/public/icons/wheat.png" alt="Glutenfrei" />
          <div>Glutenfrei</div>
        </button>

      </div>
    </> 
  )
}

export default DietDropdown;