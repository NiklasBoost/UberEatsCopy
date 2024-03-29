import { SortDropdownProps } from "../../../../../types/dish/filter/dropdowns/SortDropdownTypes";
import { useState, useEffect } from "react";


const SortDropdown = ({ 
  changeDropdownState, 
  setFilter}: SortDropdownProps) => {

  const [sortFolded, setSortFolded] = useState(false);
  const [sortStyle, setSortStyle] = useState({});
  
  useEffect(() => {
    if(sortFolded) {
      setSortStyle({ display: 'none' });
    } else {
      setSortStyle({ display: 'block' });
    }
  }, [sortFolded])
  
  return (
    <>
      <div className="sort-dropdown-container">
        <div className="dropdown-text">Sortieren</div>
          <svg
            onClick={() => changeDropdownState(setSortFolded)}
            className="dropdown-svg dropdown-svg-js"
            width="25px"
            height="16px"
            fill="none"
            viewBox="0 0 48 20"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
          >
            {sortFolded ? (
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
      <div className="sort-dropdown-values" style={sortStyle}>
        <label className="sort-dropdown-label">
          <input 
            className="sort-dropdown" 
            type="radio" 
            name="sortDropdown" 
            value="forYou" 
            // checked={filter.forYouFilter} 
            onClick={() => {
              setFilter((prevFilter) => ({
                ...prevFilter, 
                forYouFilter: true, 
                popularFilter: false, 
                ratingFilter: false, 
                deliveryTimeFilter: false
              }));
            }}
          /> 
          <div>Für dich ausgesucht (Standard)</div>
        </label>
        
        <label className="sort-dropdown-label">
          <input 
            className="sort-dropdown" 
            type="radio" 
            name="sortDropdown"
            value="mostPopular"
            // checked={filter.popularFilter}
            onClick={() => {
              setFilter((prevFilter) => ({
                ...prevFilter, 
                forYouFilter: false, 
                popularFilter: true, 
                ratingFilter: false, 
                deliveryTimeFilter: false
              }))
            }}
          /> 
          <div>Am beliebtesten</div>
        </label>
        
        <label className="sort-dropdown-label">
          <input 
            className="sort-dropdown" 
            type="radio" 
            name="sortDropdown" 
            value="rating" 
            // checked={filter.ratingFilter}
            onClick={() => {
              setFilter((prevFilter) => ({
                ...prevFilter, 
                ratingFilter: true,
                forYouFilter: false, 
                popularFilter: false, 
                deliveryTimeFilter: false
              
              }))
            }}
          /> 
          <div>Bewertung</div>
        </label>
        
        <label className="sort-dropdown-label">
          <input 
            className="sort-dropdown" 
            type="radio" 
            name="sortDropdown" 
            value="deliveryTime" 
            // checked={filter.deliveryTimeFilter}
            onClick={() => {
              setFilter((prevFilter) => ({
                ...prevFilter, 
                deliveryTimeFilter: true,
                forYouFilter: false, 
                popularFilter: false, 
                ratingFilter: false,
              }))
            }}
          />
          <div>Lieferzeit</div> 
        </label>      
      </div>
    </>  
  )
}

export default SortDropdown;