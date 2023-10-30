import { PricesDropdownProps } from "../../../../../types/dish/filter/dropdowns/PricesDropdownTypes";
import { useState, useEffect } from "react";

function PricesDropdown({ 
  changeDropdownState,
  filter,
  setFilter }: PricesDropdownProps) {
  const [pricesFolded, setPricesFolded] = useState(false);
  const [pricesStyle, setPricesStyle] = useState({});

  const [oneButtonActiv, setOneButtonActiv] = useState({});
  const [twoButtonActiv, setTwoButtonActiv] = useState({});
  const [threeButtonActiv, setThreeButtonActiv] = useState({});
  const [fourButtonActiv, setFourButtonActiv] = useState({});
  
  useEffect(() => {
    if(pricesFolded) {
      setPricesStyle({ display: 'none' });
    } else {
      setPricesStyle({ display: 'flex' });
    }
  }, [pricesFolded])


  useEffect(() => {
    if(filter.oneEURFilter) {
      setOneButtonActiv({ filter: 'brightness(0.7)' });
    } else {
      setOneButtonActiv({ filter: 'none' });
    }
  }, [filter.oneEURFilter])
  
  useEffect(() => {
    if(filter.twoEURFilter) {
      setTwoButtonActiv({ filter: 'brightness(0.7)' });
    } else {
      setTwoButtonActiv({ filter: 'none' });
    }
  }, [filter.twoEURFilter])

  useEffect(() => {
    if(filter.threeEURFilter) {
      setThreeButtonActiv({ filter: 'brightness(0.7)' });
    } else {
      setThreeButtonActiv({ filter: 'none' });
    }
  }, [filter.threeEURFilter])

  useEffect(() => {
    if(filter.fourEURFilter) {
      setFourButtonActiv({ filter: 'brightness(0.7)' });
    } else {
      setFourButtonActiv({ filter: 'none' });
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
          style={oneButtonActiv}
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
          style={twoButtonActiv}
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
          style={threeButtonActiv}
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
          style={fourButtonActiv}
        >
          &#8364;&#8364;&#8364;&#8364;
        </button>
      </div>  
    </>
  ) 
}

export default PricesDropdown;