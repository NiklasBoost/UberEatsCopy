import {
  NormalHeader,
  Categories,
  Slideshow,
  MealChoose,
  SearchbarHeader,
} from "./layout/dLayout";
import { Footer, Sidebar } from "../common/layout/cLayout";
import { CategoryBanner } from "./elements/category-banner";
import { DishOverviewProps } from "../../types/dish/DishOverviewTypes";
import { useState, useEffect } from "react";
import restaurants from "../../data/restaurants";

const DishSite = ({ sidebarState, setSidebarState }: DishOverviewProps) => {
  const [overlayStyle, setOverlayStyle] = useState({});
  const [CategoryBannerProps, setCategoryBannerProps] = useState<{
    name: string;
    img: string;
  }>({ name: "", img: "" });

  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants);

  // States for Filters
  const [filter, setFilter] = useState({
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
  });

  // States for CategoriesClicks
  const [categoriesState, setCategoriesState] = useState({
    dealsCat: false,
    bestEatCat: false,
    alcoholCat: false,
    burgerCat: false,
    chineseCat: false,
    sandwichCat: false,
    thaiCat: false,
    sushiCat: false,
    dessertCat: false,
    asiaCat: false,
    americanCat: false,
    generalStuffCat: false,
    animalCareCat: false,
    healthyCat: false,
    fastFoodCat: false,
    pizzaCat: false,
    koreanCat: false,
    indianCat: false,
  });

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
        <NormalHeader
          setSidebarState={setSidebarState}
          setOverlayStyle={setOverlayStyle}
          setDissappearElements={setDissappearElements}
        />
      )}
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
            categoriesState={categoriesState}
            setCategoriesState={setCategoriesState}
          />
          <Slideshow />
        </>
      )}
      <MealChoose
        setCategoryBannerProps={setCategoryBannerProps}
        categoriesState={categoriesState}
        filteredRestaurants={filteredRestaurants}
        setFilteredRestaurants={setFilteredRestaurants}
        filter={filter}
        setFilter={setFilter}
      />
      <Footer />
    </div>
  );
}

export default DishSite;
