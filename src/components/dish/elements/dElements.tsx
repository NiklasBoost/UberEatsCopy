import { CategoryProps, RestaurantProps } from "../../../types/dish/elements/dElementsTypes"


export function Category({ 
  categoryImg, 
  categoryText, 
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
  setIndianCat }: CategoryProps) {

  function handleCategoryClick() {
    const CategoryBannerProps = {
      name: categoryText,
      img: categoryImg,
    };
    setCategoryBannerProps(CategoryBannerProps)

    // set State, for showing up the right views
    if(categoryText === 'Angebote') {
      setDealsCat(prevState => !prevState);
    } else if(categoryText === 'Bestes Essen') {
      setBestEatCat(prevState => !prevState);
    } else if(categoryText === 'Alkohol') {
      setAlcoholCat(prevState => !prevState);
    } else if(categoryText === 'Burger') {
      setBurgerCat(prevState => !prevState);
    } else if(categoryText === 'Chinesisch') {
      setChineseCat(prevState => !prevState);
    } else if(categoryText === 'Sandwich') {
      setSandwichCat(prevState => !prevState);
    } else if(categoryText === 'Thailändisch') {
      setThaiCat(prevState => !prevState);
    } else if(categoryText === 'Sushi') {
      setSushiCat(prevState => !prevState);
    } else if(categoryText === 'Dessert') {
      setDessertCat(prevState => !prevState);
    } else if(categoryText === 'Asiatisch') {
      setAsiaCat(prevState => !prevState);
    } else if(categoryText === 'Amerikanisch') {
      setAmericanCat(prevState => !prevState);
    } else if(categoryText === 'Allgemeines Zeug') {
      setGeneralStuffCat(prevState => !prevState);
    } else if(categoryText === 'Tierversorgung') {
      setAnimalCareCat(prevState => !prevState);
    } else if(categoryText === 'Gesundes') {
      setHealthyCat(prevState => !prevState);
    } else if(categoryText === 'Fast Food') {
      setFastFoodCat(prevState => !prevState);
    } else if(categoryText === 'Pizza') {
      setPizzaCat(prevState => !prevState);
    } else if(categoryText === 'Koreanisch') {
      setKoreanCat(prevState => !prevState);
    } else if(categoryText === 'Indisch') {
      setIndianCat(prevState => !prevState);
    } 
  }

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

