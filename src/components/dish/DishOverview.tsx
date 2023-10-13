import {
  DishHeader,
  Categories,
  Slideshow,
  MealChoose,
} from "./layout/dLayout";
import { Footer, Sidebar } from "../common/layout/cLayout";
import { CategoryBanner } from "./elements/category-banner";
import { DishOverviewProps } from "../../types/dish/DishOverviewTypes";
import { useState, useEffect } from "react";

function Dish({ sidebarState, setSidebarState }: DishOverviewProps) {
  const [overlayStyle, setOverlayStyle] = useState({});
  const [CategoryBannerProps, setCategoryBannerProps] = useState<{ name: string; img: string }>({name: '', img: ''});

  // States for CategoriesClicks
  const [dealsCat, setDealsCat] = useState(false);
  const [bestEatCat, setBestEatCat] = useState(false);
  const [alcoholCat, setAlcoholCat] = useState(false);
  const [burgerCat, setBurgerCat] = useState(false);
  const [chineseCat, setChineseCat] = useState(false);
  const [sandwichCat, setSandwichCat] = useState(false);
  const [thaiCat, setThaiCat] = useState(false);
  const [sushiCat, setSushiCat] = useState(false);
  const [dessertCat, setDessertCat] = useState(false);
  const [asiaCat, setAsiaCat] = useState(false);
  const [americanCat, setAmericanCat] = useState(false);
  const [generalStuffCat, setGeneralStuffCat] = useState(false);
  const [animalCareCat, setAnimalCareCat] = useState(false)
  const [healthyCat, setHealthyCat] = useState(false);
  const [fastFoodCat, setFastFoodCat] = useState(false);
  const [pizzaCat, setPizzaCat] = useState(false);
  const [koreanCat, setKoreanCat] = useState(false);
  const [indianCat, setIndianCat] = useState(false);


  function changeState() {
    if (sidebarState) {
      setSidebarState(false);
    }
  }

  useEffect(() => {
    if (sidebarState) {
      setOverlayStyle({ display: "block" });
    } else {
      setOverlayStyle({ display: "none" });
    }
  }, [sidebarState]);

  return (
    <div onClick={changeState}>
      <div style={overlayStyle} className="overlay"></div>
      <DishHeader setSidebarState={setSidebarState} />
      <Sidebar sidebarState={sidebarState} />
      {CategoryBannerProps.name ? (
        <CategoryBanner 
          CategoryName={CategoryBannerProps.name}
          CategoryIMG={CategoryBannerProps.img}
        />
      ) : (
        <>
          <Categories 
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
          <Slideshow />
        </>
      )}
      <MealChoose 
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
      <Footer />
    </div>
  );
}

export default Dish;
