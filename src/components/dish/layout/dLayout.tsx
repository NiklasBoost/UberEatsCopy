import { HamburgerMenu, Logo } from "../../common/Pics";
import { SignInButton, RegisterButton } from "../../common/Buttons";
import { SlideshowElement, Category } from "../elements/dElements";
import { useEffect, useState } from "react";
import categoryObjects from "../../../data/categories";
import Restaurants from "../views/restaurants";
import Filter from "../filter/filter";
import { SearchResults } from "../elements/searchbar-elements";
import { CategoriesProps, DishHeaderProps, MealChooseProps, SearchbarHeaderProps } from "../../../types/dish/layout/dLayoutTypes";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";


import 'swiper/css';
import 'swiper/css/navigation';

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
  onlyOneFilterTrue,
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
          setCategoriesState={setCategoriesState}
          onlyOneFilterTrue={onlyOneFilterTrue}
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
          onSwiper={(swiper) => console.log(swiper)}
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
  onlyOneFilterTrue,
  filter,
  setFilter   }: MealChooseProps) {


  useEffect(() => {
    setCategoryBannerProps({name: '', img:''});
  }, [filter])


  return (
    <div className="meal-choose">
      <Filter 
        filter={filter}
        setFilter={setFilter}
        onlyOneFilterTrue={onlyOneFilterTrue}
      />
      <Restaurants 
        filter={filter}
        setFilter={setFilter}
        categoriesState={categoriesState}
      />
    </div>
  );
}


