import { HamburgerMenu, Logo } from "../../common/Pics";
import { SignInButton, RegisterButton } from "../../common/Buttons";
import { SlideshowElement, Category } from "../elements/dElements";
import { useEffect, useState, Dispatch, SetStateAction } from "react";
import categoryObjects from "../../../data/categories";
import Restaurants from "../views/restaurants";
import Filter from "../filter/filter";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";


import 'swiper/css';
import 'swiper/css/navigation';
import { CategoriesProps, MealChooseProps } from "../../../types/dish/layout/dLayoutTypes";


export function DishHeader({
  setSidebarState,
}: {
  setSidebarState: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const signIn = "dishHeader";
  const signUp = "header-right-register";
  return (
    <div className="dish-header">
      <div className="d-header-left">
        <HamburgerMenu setSidebarState={setSidebarState} />
        <Logo />
        <div className="deliver-collection-container">
          <div className="white-choose-field"></div>
          <div className="deliver-collection">
            <div className="delivery">Lieferung</div>
            <div className="collection">Abholung</div>
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
        <SignInButton signIn={signIn} />
        <RegisterButton signUp={signUp} />
      </div>
    </div>
  );
}

export function Categories({
  setCategoryBannerProps, 
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
  setIndianCat  }: MealChooseProps) {

  const [forYouFilter, setForYouFilter] = useState(false);
  const [popularFilter, setPopularFilter] = useState(false);
  const [ratingFilter, setRatingFilter] = useState(false);
  const [deliveryTimeFilter, setDeliveryTimeFilter] = useState(false);
  const [uberEatsFilter, setUberEatsFilter] = useState(false);
  const [oneEURFilter, setOneEURFilter] = useState(false);
  const [twoEURFilter, setTwoEURFilter] = useState(false);
  const [threeEURFilter, setThreeEURFilter] = useState(false);
  const [fourEURFilter, setFourEURFilter] = useState(false);
  const [veggyFilter, setVeggyFilter] = useState(false);
  const [veganFilter, setVeganFilter] = useState(false);
  const [glutenFreeFilter, setGlutenFreeFilter] = useState(false);

  
 function onlyOneFilterTrue(setState: Dispatch<SetStateAction<boolean>>) {
    setForYouFilter(false);
    setPopularFilter(false);
    setRatingFilter(false);
    setDeliveryTimeFilter(false);
    setUberEatsFilter(false);
    setOneEURFilter(false);
    setTwoEURFilter(false);
    setThreeEURFilter(false);
    setFourEURFilter(false);
    setVeggyFilter(false);
    setVeganFilter(false);
    setGlutenFreeFilter(false);
    setDealsCat(false);
    setBestEatCat(false);
    setAlcoholCat(false);
    setBurgerCat(false);
    setChineseCat(false);
    setSandwichCat(false);
    setThaiCat(false);
    setSushiCat(false);
    setDessertCat(false);
    setAsiaCat(false);
    setAmericanCat(false);
    setGeneralStuffCat(false);
    setAnimalCareCat(false);
    setHealthyCat(false);
    setFastFoodCat(false);
    setPizzaCat(false);
    setKoreanCat(false);
    setIndianCat(false);

    setState(true);
  }

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


