import { CategoryProps, RestaurantProps } from "../../../types/dish/elements/dElementsTypes"


export function Category({ 
  categoryImg, 
  categoryText, 
  setCategoryBannerProps, 
  setCategoriesState,
  onlyOneFilterTrue }: CategoryProps) {

  function handleCategoryClick() {
    const CategoryBannerProps = {
      name: categoryText,
      img: categoryImg,
    };
    setCategoryBannerProps(CategoryBannerProps)

    // set State, for showing up the right views
    if(categoryText === 'Angebote') {
      console.log(onlyOneFilterTrue);
      onlyOneFilterTrue(setDealsCat);
    } else if(categoryText === 'Bestes Essen') {
      onlyOneFilterTrue(setBestEatCat); 
    } else if(categoryText === 'Alkohol') {
      onlyOneFilterTrue(setAlcoholCat); 
    } else if(categoryText === 'Burger') {
      onlyOneFilterTrue(setBurgerCat); 
    } else if(categoryText === 'Chinesisch') {
      onlyOneFilterTrue(setChineseCat); 
    } else if(categoryText === 'Sandwich') {
      onlyOneFilterTrue(setSandwichCat); 
    } else if(categoryText === 'Thailändisch') {
      onlyOneFilterTrue(setThaiCat); 
    } else if(categoryText === 'Sushi') {
      onlyOneFilterTrue(setSushiCat); 
    } else if(categoryText === 'Dessert') {
      onlyOneFilterTrue(setDessertCat); 
    } else if(categoryText === 'Asiatisch') {
      onlyOneFilterTrue(setAsiaCat); 
    } else if(categoryText === 'Amerikanisch') {
      onlyOneFilterTrue(setAmericanCat); 
    } else if(categoryText === 'Allgemeines Zeug') {
      onlyOneFilterTrue(setGeneralStuffCat); 
    } else if(categoryText === 'Tierversorgung') {
      onlyOneFilterTrue(setAnimalCareCat); 
    } else if(categoryText === 'Gesundes') {
      onlyOneFilterTrue(setHealthyCat); 
    } else if(categoryText === 'Fast Food') {
      onlyOneFilterTrue(setFastFoodCat); 
    } else if(categoryText === 'Pizza') {
      onlyOneFilterTrue(setPizzaCat); 
    } else if(categoryText === 'Koreanisch') {
      onlyOneFilterTrue(setKoreanCat); 
    } else if(categoryText === 'Indisch') {
      onlyOneFilterTrue(setIndianCat); 
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

