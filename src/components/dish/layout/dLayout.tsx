import { HamburgerMenu, Logo } from "../../common/Pics";
import { SignInButton, RegisterButton } from "../../common/Buttons";
import { SlideshowElement, Category } from "../elements/dElements";
import { useEffect, useState } from "react";
import categoryObjects from "../../../data/categories";
import Restaurants from "./view/restaurants";
import Filter from "./filter/filter";
import { SearchResults } from "../elements/searchbar-elements";
import { CategoriesProps, DishHeaderProps, MealChooseProps, SearchbarHeaderProps } from "../../../types/dish/layout/dLayoutTypes";
import { bestOverAllFilter, forYouSort, glutenfreeFilter, popularSort, priceFilter, ratingsSort, veganFilter, veggyFilter } from "../filter-logic/filter-functions";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import { categoryFilter } from "../filter-logic/category-functions";


import 'swiper/css';
import 'swiper/css/navigation';
import restaurants from "../../../data/restaurants";

export function DishHeader({ 
  setSidebarState, 
  setOverlayStyle,
  setDissappearElements }: DishHeaderProps) {
  
  const signIn = "dishHeader";
  const signUp = "header-right-register";
  const [chooseFieldStyle, setChooseFieldStyle] = useState('white-choose-field');
    
  function transformHeader() {
      setOverlayStyle({display: 'block'});
  }


  function movingChooseField() {
    if(chooseFieldStyle === 'white-choose-field') {
      setChooseFieldStyle('white-choose-field white-choose-field-moved');
    } else {
      setChooseFieldStyle('white-choose-field');
    }
  }


  return (
    <div className="dish-header">
      <div className="d-header-left">
        <HamburgerMenu setSidebarState={setSidebarState} />
        <Logo />
        <div className="deliver-collection-container">
          <div 
            className={chooseFieldStyle}
          ></div>
          <div className="deliver-collection">
            <div 
              onClick={() => {
                if(chooseFieldStyle === 'white-choose-field white-choose-field-moved') {
                  movingChooseField();
                }
              }} 
              className="delivery"
            >
              Lieferung
            </div>
            <div 
              onClick={() => {
                if(chooseFieldStyle === 'white-choose-field') {
                  movingChooseField();

                }
              }}
              className="collection"
            >
              Abholung
            </div>
          </div>
        </div>
      </div>
      <div className="d-header-middle">
        <div className="location">
          <a></a>
        </div>
        <div className="input-header-container">
          <img className="magnifier-img" src="public/icons/magnifier.png" />
          <input
            className="input-header"
            onFocus={() => {
              transformHeader();
              setDissappearElements(true);
            }}
            placeholder="Essen, Lebensmittel, Getränke usw."
          />
        </div>
      </div>
      <div className="d-header-right">
        <button className="header-right-shopping-cart">
          <div className="shopping-cart-container">
            <img
              className="shopping-cart-icon"
              src="public/icons/shopping-cart-white.png"
            />
            <p className="shopping-cart-text">Warenkorb &#8226; 0</p>
          </div>
        </button>
        <SignInButton 
          signIn={signIn} 
        />
        <RegisterButton 
          signUp={signUp} 
        />
      </div>
    </div>
  );
}

export function SearchbarHeader({ 
  setOverlayStyle,  
  setDissappearElements, 
  setSidebarState }: SearchbarHeaderProps) { 
  
  const [inputValue, setInputValue] = useState('');

  function transformHeader() {
      setOverlayStyle({display: 'none'});
    }


    function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
      setInputValue(event.target.value);
    };

  return (
      <div style={{
        height: '580px',
        background: 'white',
        position: 'fixed',
        top:'0',
        left: '0',
        right: '0',
        zIndex: 5
      }}>
        <div className="dish-header">
          <div className="d-header-left">
            <HamburgerMenu setSidebarState={setSidebarState} />
            <Logo />
          </div>
          <div className="d-header-middle">
            <div className="location">
              <a></a>
            </div>
            <div className="input-header-container">
              <img className="magnifier-img" src="public/icons/magnifier.png" />
              <input
                className="input-header"
                placeholder="Essen, Lebensmittel, Getränke usw."
                value={inputValue}
                onChange={handleInput}
              />
            </div>
            <img 
              src="public/icons/close.png" 
              alt="close" 
              className="close-input" 
              onClick={() => { 
                transformHeader();
                setDissappearElements(false);
              }}
            />
          </div>
        </div>
        <SearchResults 
          inputValue={inputValue}
        />
      </div>
  );
}

export function Categories({
  setCategoryBannerProps, 
  categoriesState,
  setCategoriesState}: CategoriesProps) {
  const [categories, setCategories] = useState<{ img: string; text: string }[]>(
    []
  );

  //category randomizer
  useEffect(() => {
    let remainingCategories = categoryObjects.slice(2);
    for (let i = remainingCategories.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [remainingCategories[i], remainingCategories[j]] = [
        remainingCategories[j],
        remainingCategories[i],
      ];
    }

    remainingCategories = remainingCategories.slice(0, 14);
    const firstTwoCategories = categoryObjects.slice(0, 2);
    const displayCategories = [...firstTwoCategories, ...remainingCategories];
    setCategories(displayCategories);
  }, []);


  return (
    <div className="categorys-container">
      {categories.map((category, index) => (
        <Category
          key={index}
          categoryImg={category.img}
          categoryText={category.text}
          setCategoryBannerProps={setCategoryBannerProps}
          categoriesState={categoriesState}
          setCategoriesState={setCategoriesState}
        />
      ))}
    </div>
  );
}

export function Slideshow() {
  return (
    <div className="slideshow">
      <div className="slideshow-list">
        <Swiper
          modules={[Navigation, A11y]}
          spaceBetween={20}
          loop={true}
          direction="horizontal"
          slidesPerView={3}
          navigation
          onSlideChange={() => console.log('slide goes on')}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <SlideshowElement />
          </SwiperSlide>
          
          <SwiperSlide>
            <SlideshowElement />
          </SwiperSlide>
          
          <SwiperSlide>
            <SlideshowElement />
          </SwiperSlide>

          <SwiperSlide>
            <SlideshowElement />
          </SwiperSlide>

          <SwiperSlide>
            <SlideshowElement />
          </SwiperSlide>

          <SwiperSlide>
            <SlideshowElement />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export function MealChoose({ 
  setCategoryBannerProps,
  categoriesState,
  filteredRestaurants,
  setFilteredRestaurants,
  filter,
  setFilter   }: MealChooseProps) {


  useEffect(() => {
    setCategoryBannerProps({name: '', img:''});
  }, [filter])

  
  useEffect(() => {
    setFilteredRestaurants(restaurants);
    if(categoriesState) {
      categoryFilter(setFilteredRestaurants, categoriesState)
    }
    if (filter.forYouFilter) {
      forYouSort(setFilteredRestaurants);
    }
    if (filter.popularFilter) {
      popularSort(setFilteredRestaurants);
    }
    if (filter.ratingFilter) {
      ratingsSort(setFilteredRestaurants);
    }
    if (filter.uberEatsFilter) {
      bestOverAllFilter(setFilteredRestaurants);
    }
    if (filter.oneEURFilter) {
      priceFilter(setFilteredRestaurants, '€');
    }
    if (filter.twoEURFilter) {
      priceFilter(setFilteredRestaurants, '€€');
    } 
    if (filter.threeEURFilter) {
      priceFilter(setFilteredRestaurants, '€€€');
    }
    if (filter.fourEURFilter) {
      priceFilter(setFilteredRestaurants, '€€€€');
    }
    if (filter.veganFilter) {      
      veganFilter(setFilteredRestaurants);
    }
    if (filter.veggyFilter) {
      veggyFilter(setFilteredRestaurants);
    }
    if (filter.glutenFreeFilter) {
      glutenfreeFilter(setFilteredRestaurants);
    }}, [filter, categoriesState])

  return (
    <div className="meal-choose">
      <Filter 
        filter={filter}
        setFilter={setFilter}
      />
      <Restaurants 
        filteredRestaurants={filteredRestaurants}
      />
    </div>
  );
}


