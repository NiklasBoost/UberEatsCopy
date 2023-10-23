import {
  DishHeader,
  Categories,
  Slideshow,
  MealChoose,
  SearchbarHeader,
} from "./layout/dLayout";
import { Footer, Sidebar } from "../common/layout/cLayout";
import { CategoryBanner } from "./elements/category-banner";
import { DishOverviewProps } from "../../types/dish/DishOverviewTypes";
import { useState, useEffect, Dispatch, SetStateAction } from "react";

function Dish({ sidebarState, setSidebarState }: DishOverviewProps) {
  const [overlayStyle, setOverlayStyle] = useState({});
  const [CategoryBannerProps, setCategoryBannerProps] = useState<{ name: string; img: string }>({name: '', img: ''});

  // States for Filters
  const [filter, setFilter] = useState({
    forYouFilter: true,
    popularFilter: false,
    ratingFilter: false,
    deliveryTimeFilter: false,
    uberEatsFilter: false,
    oneEURFilter: false,
    twoEURFilter: false,
    threeEURFilter: false,
    fourEURFilter: false,
    veggyFilter: false,
    veganFilter: false,
    glutenFreeFilter: false,
  });

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

  const [dissappearElements, setDissappearElements] = useState(false);

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

  function onlyOneFilterTrue(setState: Dispatch<SetStateAction<boolean>>) {
    const updatedFilter = {
      forYouFilter: false,
      popularFilter: false,
      ratingFilter: false,
      deliveryTimeFilter: false,
      uberEatsFilter: false,
      oneEURFilter: false,
      twoEURFilter: false,
      threeEURFilter: false,
      fourEURFilter: false,
      veggyFilter: false,
      veganFilter: false,
      glutenFreeFilter: false,
    };
    
    setFilter(updatedFilter);
    
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

    setFilter({...filter, setState: true});
  }

  return (
    <div onClick={changeState}>
      <div style={overlayStyle} className="overlay"></div>
      {dissappearElements ? (
        <SearchbarHeader 
          setOverlayStyle={setOverlayStyle}
          setDissappearElements={setDissappearElements}
          setSidebarState={setSidebarState}
        />
      ) : (
        <DishHeader 
          setSidebarState={setSidebarState} 
          setOverlayStyle={setOverlayStyle}
          setDissappearElements={setDissappearElements}
        />
      )
      }
      <Sidebar sidebarState={sidebarState} />
      {CategoryBannerProps.name ? (
        <CategoryBanner 
          CategoryName={CategoryBannerProps.name}
          CategoryIMG={CategoryBannerProps.img}
        />
      ) : (
        <>
          <Categories 
            onlyOneFilterTrue={onlyOneFilterTrue}
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
        onlyOneFilterTrue={onlyOneFilterTrue}
        setCategoryBannerProps={setCategoryBannerProps} 

        filter={filter}
        setFilter={setFilter}

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
