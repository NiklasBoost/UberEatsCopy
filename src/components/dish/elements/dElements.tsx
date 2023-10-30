import { CategoryProps, RestaurantProps } from "../../../types/dish/elements/dElementsTypes";
import { useEffect } from "react";

export function Category({ 
  categoryImg, 
  categoryText, 
  setCategoryBannerProps,
  categoriesState, 
  setCategoriesState }: CategoryProps) {

  function handleCategoryClick() {
    const CategoryBannerProps = {
      name: categoryText,
      img: categoryImg,
    };
    setCategoryBannerProps(CategoryBannerProps)

    setCategoriesState({
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
    })
    if(categoryText === 'Angebote') {
      setCategoriesState((prevState) => ({...prevState, dealsCat: true}));
           
    } else if(categoryText === 'Bestes Essen') {
      setCategoriesState((prevState) => ({
        ...prevState,
        bestEatCat: true,
      }));
    } else if(categoryText === 'Alkohol') {
       setCategoriesState((prevState) => ({
        ...prevState,
        alcoholCat: true,
      }));
    } else if(categoryText === 'Burger') {
       setCategoriesState((prevState) => ({
        ...prevState,
        burgerCat: true,
      }));
    } else if(categoryText === 'Chinesisch') {
       setCategoriesState((prevState) => ({
        ...prevState,
        chineseCat: true,
      }));
    } else if(categoryText === 'Sandwich') {
       setCategoriesState((prevState) => ({
        ...prevState,
        sandwichCat: true,
      }));
    } else if(categoryText === 'Thailändisch') {
       setCategoriesState((prevState) => ({
        ...prevState,
        thaiCat: true,
      }));
    } else if(categoryText === 'Sushi') {
       setCategoriesState((prevState) => ({
        ...prevState,
        sushiCat: true,
      }));
    } else if(categoryText === 'Dessert') {
       setCategoriesState((prevState) => ({
        ...prevState,
        dessertCat: true,
      }));
    } else if(categoryText === 'Asiatisch') {
       setCategoriesState((prevState) => ({
        ...prevState,
        asiaCat: true,
      }));
    } else if(categoryText === 'Amerikanisch') {
       setCategoriesState((prevState) => ({
        ...prevState,
        americanCat: true,
      }));
    } else if(categoryText === 'Allgemeines Zeug') {
       setCategoriesState((prevState) => ({
        ...prevState,
        generalStuffCat: true,
      }));
    } else if(categoryText === 'Tierversorgung') {
       setCategoriesState((prevState) => ({
        ...prevState,
        animalCareCat: true,
      }));
    } else if(categoryText === 'Gesundes') {
       setCategoriesState((prevState) => ({
        ...prevState,
        healthyCat: true,
      }));
    } else if(categoryText === 'Fast Food') {
       setCategoriesState((prevState) => ({
        ...prevState,
        fastFoodCat: true,
      }));
    } else if(categoryText === 'Pizza') {
       setCategoriesState((prevState) => ({
        ...prevState,
        pizzaCat: true,
      }));
    } else if(categoryText === 'Koreanisch') {
       setCategoriesState((prevState) => ({
        ...prevState,
        koreanCat: true,
      }));
    } else if(categoryText === 'Indisch') {
       setCategoriesState((prevState) => ({
        ...prevState,
        indianCat: true,
      }));
    } 
  }

  useEffect(() => {
    console.log(categoriesState);
  }, [categoriesState])

  return (
    <div className="category-container" onClick={handleCategoryClick}>
      <img className="category-pictures" src={categoryImg} /> 
      <p className="category-text">{categoryText}</p>
    </div> 
  )
}


// Die jeweiligen inhalte und der img inhalt müssen variable sein. Aber von der Struktur her dürfte es passen
export function SlideshowElement() {
  return (
    <div className="slideshow-listelement-container">
      <a className="slideshow-listelement">
        <h3 className="headline">1 kaufen, 1 gratis bei O'Tacos</h3>
        <p className="under-headline">Französische Tacos</p>
        <button className="slideshow-button">Bestelle jetzt &#8594;</button>
        <img />
      </a>
    </div>
  )
}

export function Restaurant({ restaurantImg, name, ratingAverage, deliveryFee }: RestaurantProps) {

  const deliveryFeeEUR = (deliveryFee !== null && deliveryFee !== undefined) 
    ? (deliveryFee / 100).toFixed(2) 
    : 0;


  return (
    <div className="restaurant-container"> 
      <div className="restaurant-img-container">
        <img className="restaurant-img" src={restaurantImg}></img>
      </div>
      <div className="restaurant-name-rating-container">
        <h3 className="restaurant-name">{name}</h3>
        {ratingAverage ? <div className="restaurant-rating-average">{ratingAverage}</div> : null}
      </div>
      <div className="restaurant-delivery-fee-container">
        <p className="restaurant-delivery-fee" >{deliveryFeeEUR} € Liefergebühr &#8226; xy Lieferzeit</p>  
      </div>
    </div>
  )
}

