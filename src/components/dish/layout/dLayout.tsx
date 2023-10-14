import { HamburgerMenu, Logo } from "../../common/Pics";
import { SignInButton, RegisterButton } from "../../common/Buttons";
import { SlideshowElement, Category } from "../elements/dElements";
import { useEffect, useState } from "react";
import categoryObjects from "../../../data/categories";
import Restaurants from "../views/restaurants";
import Filter from "../filter/filter";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";


import 'swiper/css';
import 'swiper/css/navigation';
import { CategoriesProps, DishHeaderProps, MealChooseProps } from "../../../types/dish/layout/dLayoutTypes";


export function DishHeader({ 
  setSidebarState, 
  setOverlayStyle }: DishHeaderProps) {
  
  const [dissappearElements, setDissappearElements] = useState(false);
  const [elementStyles, setElementStyles] = useState({});
  const [headerStyle, setHeaderStyle] = useState({});
  const [closeInputStyle, setCloseInputStyle] = useState({});  
  const signIn = "dishHeader";
  const signUp = "header-right-register";

  useEffect(() => {
    if(dissappearElements) {
      setCloseInputStyle({display: 'block'});
      setElementStyles({display: 'none'});
    } else {
      setCloseInputStyle({display: 'none'});
      setElementStyles({display: 'flex'});
    }
  }, [dissappearElements])

  function transformHeader() {
    if(Object.keys(headerStyle).length === 0) {
      setHeaderStyle({
        backgroundColor: 'white',
        height: '580px',
        position: 'fixed',
        top:'0',
        left: '0',
        right: '0',
        zIndex: '5',
        
      });
      setOverlayStyle({display: 'block'});
    } else {
      setHeaderStyle({});
      setOverlayStyle({display: 'none'});
    }
  }

  return (
    <div style={headerStyle}>
      <div className="dish-header">
        <div className="d-header-left">
          <HamburgerMenu setSidebarState={setSidebarState} />
          <Logo />
          <div className="deliver-collection-container" style={elementStyles}>
            <div className="white-choose-field"></div>
            <div className="deliver-collection">
              <div className="delivery">Lieferung</div>
              <div className="collection">Abholung</div>
            </div>
          </div>
        </div>
        <div className="d-header-middle">
          <div className="location" style={elementStyles}>
            <a></a>
          </div>
          <div className="input-header-container">
            <img className="magnifier-img" src="public/icons/magnifier.png" />
            <input
              className="input-header"
              onFocus={() => {
                transformHeader();
                setDissappearElements(true);
              } }
              onBlur={() => {
                transformHeader();
                setDissappearElements(false);
              } }
              placeholder="Essen, Lebensmittel, Getränke usw."
            />
          </div>
          <img 
            src="public/icons/close.png" 
            alt="close" 
            className="close-input" 
            style={closeInputStyle}
          />
        </div>
        <div className="d-header-right" style={elementStyles}>
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
    </div>
  );
}

export function Categories({
  setCategoryBannerProps, 
  onlyOneFilterTrue,
  setDealsCat, 
  setBestEatCat,
  setAlcoholCat,
  setBurgerCat,
  setChineseCat,
  setSandwichCat,
  setThaiCat,
  setSushiCat,
  setDessertCat,
  setAsiaCat,
  setAmericanCat,
  setGeneralStuffCat,
  setAnimalCareCat,
  setHealthyCat,
  setFastFoodCat,
  setPizzaCat,
  setKoreanCat,
  setIndianCat}: CategoriesProps) {
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
          setDealsCat={setDealsCat}
          setBestEatCat={setBestEatCat}
          setAlcoholCat={setAlcoholCat}
          setBurgerCat={setBurgerCat}
          setChineseCat={setChineseCat}
          setSandwichCat={setSandwichCat}
          setThaiCat={setThaiCat}
          setSushiCat={setSushiCat}
          setDessertCat={setDessertCat}
          setAsiaCat={setAsiaCat}
          setAmericanCat={setAmericanCat}
          setGeneralStuffCat={setGeneralStuffCat}
          setAnimalCareCat={setAnimalCareCat}
          setHealthyCat={setHealthyCat}
          setFastFoodCat={setFastFoodCat}
          setPizzaCat={setPizzaCat}
          setKoreanCat={setKoreanCat}
          setIndianCat={setIndianCat}
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
  dealsCat,
  bestEatCat,
  alcoholCat,
  burgerCat,
  chineseCat,
  thaiCat,
  sandwichCat,
  sushiCat,
  dessertCat,
  asiaCat,
  americanCat,
  generalStuffCat,
  animalCareCat,
  healthyCat,
  fastFoodCat,
  pizzaCat,
  koreanCat,
  indianCat,
  forYouFilter, 
  setForYouFilter, 
  popularFilter, 
  setPopularFilter, 
  ratingFilter, 
  setRatingFilter, 
  deliveryTimeFilter, 
  setDeliveryTimeFilter, 
  uberEatsFilter, 
  setUberEatsFilter, 
  oneEURFilter, 
  setOneEURFilter, 
  twoEURFilter, 
  setTwoEURFilter, 
  threeEURFilter, 
  setThreeEURFilter, 
  fourEURFilter, 
  setFourEURFilter,
  veggyFilter, 
  setVeggyFilter, 
  veganFilter, 
  setVeganFilter, 
  glutenFreeFilter, 
  setGlutenFreeFilter, 
  onlyOneFilterTrue,   }: MealChooseProps) {


  useEffect(() => {
    setCategoryBannerProps({name: '', img:''});
  }, [forYouFilter, 
      popularFilter, 
      ratingFilter, 
      deliveryTimeFilter, 
      uberEatsFilter, 
      oneEURFilter, 
      twoEURFilter, 
      threeEURFilter, 
      fourEURFilter, 
      veggyFilter, 
      veganFilter, 
      glutenFreeFilter])


  return (
    <div className="meal-choose">
      <Filter 
        forYouFilter={forYouFilter}
        setForYouFilter={setForYouFilter}
        popularFilter={popularFilter}
        setPopularFilter={setPopularFilter}
        ratingFilter={ratingFilter}
        setRatingFilter={setRatingFilter}
        deliveryTimeFilter={deliveryTimeFilter}
        setDeliveryTimeFilter={setDeliveryTimeFilter}
        uberEatsFilter={uberEatsFilter}
        setUberEatsFilter={setUberEatsFilter}
        oneEURFilter={oneEURFilter}
        setOneEURFilter={setOneEURFilter}
        twoEURFilter={twoEURFilter}
        setTwoEURFilter={setTwoEURFilter}
        threeEURFilter={threeEURFilter}
        setThreeEURFilter={setThreeEURFilter}
        fourEURFilter={fourEURFilter}
        setFourEURFilter={setFourEURFilter}
        veggyFilter={veggyFilter}
        setVeggyFilter={setVeggyFilter}
        veganFilter={veganFilter}
        setVeganFilter={setVeganFilter}
        glutenFreeFilter={glutenFreeFilter}
        setGlutenFreeFilter={setGlutenFreeFilter}
        onlyOneFilterTrue={onlyOneFilterTrue}
      />
      <Restaurants 
        forYouFilter={forYouFilter}
        popularFilter={popularFilter}
        ratingFilter={ratingFilter}
        uberEatsFilter={uberEatsFilter}
        oneEURFilter={oneEURFilter}
        twoEURFilter={twoEURFilter}
        threeEURFilter={threeEURFilter}
        fourEURFilter={fourEURFilter}
        veggyFilter={veggyFilter}
        veganFilter={veganFilter}
        glutenFreeFilter={glutenFreeFilter}
        dealsCat={dealsCat}
        bestEatCat={bestEatCat}
        alcoholCat={alcoholCat}
        burgerCat={burgerCat}
        chineseCat={chineseCat}
        sandwichCat={sandwichCat}
        thaiCat={thaiCat}
        sushiCat={sushiCat}
        dessertCat={dessertCat}
        asiaCat={asiaCat}
        americanCat={americanCat}
        generalStuffCat={generalStuffCat}
        animalCareCat={animalCareCat}
        healthyCat={healthyCat}
        fastFoodCat={fastFoodCat}
        pizzaCat={pizzaCat}
        koreanCat={koreanCat}
        indianCat={indianCat}
      />
    </div>
  );
}


