import { PricesDropdownProps } from "../../../../../types/dish/filter/dropdowns/PricesDropdownTypes";
import { useState, useEffect } from "react";

const PricesDropdown = ({ 
  changeDropdownState,
  filter,
  setFilter }: PricesDropdownProps) => {
  const [pricesFolded, setPricesFolded] = useState(false);
  const [pricesStyle, setPricesStyle] = useState({});

  const [oneEURButtonActiv, setOneEURButtonActiv] = useState({});
  const [twoEURButtonActiv, setTwoEURButtonActiv] = useState({});
  const [threeEURButtonActiv, setThreeEURButtonActiv] = useState({});
  const [fourEURButtonActiv, setFourEURButtonActiv] = useState({});
  
  useEffect(() => {
    if(pricesFolded) {
      setPricesStyle({ display: 'none' });
    } else {
      setPricesStyle({ display: 'flex' });
    }
  }, [pricesFolded])


  useEffect(() => {
    if(filter.oneEURFilter) {
      setOneEURButtonActiv({ filter: 'brightness(0.7)' });
    } else {
      setOneEURButtonActiv({ filter: 'none' });
    }
  }, [filter.oneEURFilter])
  
  useEffect(() => {
    if(filter.twoEURFilter) {
      setTwoEURButtonActiv({ filter: 'brightness(0.7)' });
    } else {
      setTwoEURButtonActiv({ filter: 'none' });
    }
  }, [filter.twoEURFilter])

  useEffect(() => {
    if(filter.threeEURFilter) {
      setThreeEURButtonActiv({ filter: 'brightness(0.7)' });
    } else {
      setThreeEURButtonActiv({ filter: 'none' });
    }
  }, [filter.threeEURFilter])

  useEffect(() => {
    if(filter.fourEURFilter) {
      setFourEURButtonActiv({ filter: 'brightness(0.7)' });
    } else {
      setFourEURButtonActiv({ filter: 'none' });
    }
  }, [filter.fourEURFilter])




  return (
    <>
      <div className="prices-dropdown-container">
        <div className="dropdown-text">Preisklasse</div>
        <svg
          onClick={() => changeDropdownState(setPricesFolded)}
          className="dropdown-svg dropdown-svg-js"
          width="25px"
          height="16px"
          fill="none"
          viewBox="0 0 48 20"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
          >
          {pricesFolded ? (
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
      <div className="prices-dropdown-values" style={pricesStyle}>
        <button 
          onClick={() => {
            setFilter((prevFilter) => ({
              ...prevFilter,
              oneEURFilter: !prevFilter.oneEURFilter
            }));
          }} 
          className="price-button"
          style={oneEURButtonActiv}
        >
          &#8364;
        </button>

        <button 
          onClick={() => {
            setFilter((prevFilter) => ({
              ...prevFilter,
              twoEURFilter: !prevFilter.twoEURFilter
            }));
          }} 
          className="price-button"
          style={twoEURButtonActiv}
        >
          &#8364;&#8364;
        </button>

        <button 
          onClick={() => {
            setFilter((prevFilter) => ({
              ...prevFilter,
              threeEURFilter: !prevFilter.threeEURFilter
            }));
          }}  
          className="price-button"
          style={threeEURButtonActiv}
        >
          &#8364;&#8364;&#8364;
        </button>

        <button 
          onClick={() => {
            setFilter((prevFilter) => ({
              ...prevFilter,
              fourEURFilter: !prevFilter.fourEURFilter
            }));
          }}  
          className="price-button"
          style={fourEURButtonActiv}
        >
          &#8364;&#8364;&#8364;&#8364;
        </button>
      </div>  
    </>
  ) 
}

export default PricesDropdown;