const restaurants = [
  {
    restaurantImg: '/public/restaurant-img/Mc-Donalds.jpeg',
    name: `McDonald's Hans-Böckler-Str.`,
    rating: {
      count: 43,
      average: 4.1
    },
    deliveryFee: 149,
    priceRange: '€',
    categorie: 'Fast Food',
    newbie: false
  },
  {
    restaurantImg: '/public/restaurant-img/El-Ezz.jpeg',
    name: 'El Ezz Haus',
    rating: {
      count: 13,
      average: 4.5
    },
    deliveryFee: 149,
    priceRange: '€€',
    categorie: 'top_eats',
    newbie: false
  },
  {
    restaurantImg: '/public/restaurant-img/Breggfast.jpeg',
    name: 'Breggfast',
    rating: {
      count: 3,
      average: 4.6
    },
    deliveryFee: 220,
    priceRange: '€€€',
    categorie: 'Sandwich',
    newbie: true
  },
  {
    restaurantImg: '/public/restaurant-img/Food-Brother.jpeg',
    name: 'Food Brother',
    rating: {
      count: 135,
      average: 4.5
    },
    deliveryFee: 349,
    priceRange: '€€€€',
    categorie: 'Sandwich',
    newbie: false
  },
  {
    restaurantImg: '/public/restaurant-img/Juicy-Burger.jpeg',
    name: 'Juicy Burger',
    rating: {
      count: 0,
      average: null
    },
    deliveryFee: 149,
    priceRange: '€€',
    categorie: 'Fast Food',
    newbie: true
  },
  {
    restaurantImg: '/public/restaurant-img/Mr-Nam.jpeg',
    name: 'Mr. Nam 68',
    rating: {
      count: 466,
      average: 4.8
    },
    deliveryFee: null,
    priceRange: '€',
    categorie: 'Asiatisch',
    newbie: false
  },
  {
    restaurantImg: '/public/restaurant-img/Die-Frische-Kuh.jpeg', 
    name: 'Die Frische Kuh',
    rating: {
      count: null,
      average: null
    },
    deliveryFee: 200,
    priceRange: '€€€€',
    categorie: 'Gesundes',
    newbie: true
  },
  {
    restaurantImg: '/public/restaurant-img/Freshnuts.jpeg', 
    name: 'Freshnuts - The Donut Factory',
    rating: {
      count: 5,
      average: 4.5
    },
    deliveryFee: 100,
    priceRange: '€€€',
    categorie: 'Dessert',
    newbie: true
  },
  {
    restaurantImg: '/public/restaurant-img/Burger-Brothers.jpeg',
    name: 'Burger Brothers',
    rating: {
      count: 9,
      average: 4.8
    },
    deliveryFee: 149,
    priceRange: '€€€',
    categorie: 'Burger',
    newbie: false
  },
  {
    restaurantImg: '/public/restaurant-img/Moodys-Cafe.jpeg',
    name: `Moody's Cafe`,
    rating: {
      count: null,
      average: null
    },
    deliveryFee: 149,
    priceRange: '€',
    categorie: 'dessert',
    newbie: false
  },
  {
    restaurantImg: '/public/restaurant-img/Sole-Pizza-Holsterhausen.jpeg',
    name: 'Sole Pizza Holsterhausen',
    rating: {
      count: null,
      average: null
    },
    deliveryFee: 149,
    priceRange: '€€',
    categorie: 'Pizza',
    newbie: false
  },
  {
    restaurantImg: '/public/restaurant-img/Burger-Loop.jpeg', 
    name: 'Burger Loop',
    rating: {
      count: 111,
      average: 4.2
    },
    deliveryFee: 0,
    priceRange: '€€€€',
    categorie: 'Fast Food',
    newbie: false
  },
  {
    restaurantImg: '/public/restaurant-img/Bab-Toma.jpeg',
    name: 'Bab Toma syrischer Imbiss',
    rating: {
      count: 50,
      average: 4.3
    },
    deliveryFee: 149,
    priceRange: '€€',
    categorie: 'Fast Food',
    newbie: false
  },
  {
    restaurantImg: '/public/restaurant-img/Sajcom.jpeg',
    name: 'Sajcom',
    rating: {
      count: 3,
      average: 4.4
    },
    deliveryFee: 149,
    priceRange: '€',
    categorie: 'Fast Food',
    newbie: true
  },
  {
    restaurantImg: '/public/restaurant-img/Scary-Donuts.jpeg',
    name: `Dunkin' Essen Hauptbahnhof`,
    rating: {
      count: 88,
      average: 4.2
    },
    deliveryFee: 149,
    priceRange: '€€',
    categorie: 'Dessert',
    newbie: false
  },
  {
    restaurantImg: '/public/restaurant-img/KFC.jpeg', 
    name: 'KFC Essen',
    rating: {
      count: 29,
      average: 4.4
    },
    deliveryFee: 449,
    priceRange: '€',
    categorie: 'Fast Food',
    newbie: false
  },
  {
    restaurantImg: '/public/restaurant-img/Five-Guys.jpeg',
    name: 'Five Guys Essen',
    rating: {
      count: 66,
      average: 4.6
    },
    deliveryFee: 149,
    priceRange: '€',
    categorie: 'Burger',
    newbie: false
  },
  {
    restaurantImg: '/public/restaurant-img/Dominos.jpeg',
    name: `Domino's Essen Stadtmitte`,
    rating: {
      count: null,
      average: null
    },
    deliveryFee: 0,
    priceRange: '€€',
    categorie: 'Pizza',
    newbie: false
  },
  {
    restaurantImg: '/public/restaurant-img/Starbucks.jpeg',
    name: 'Starbucks Essen Hauptbahnhof',
    rating: {
      count: 105,
      average: 4.7
    },
    deliveryFee: 149,
    priceRange: '€€€€',
    categorie: 'Allgemeines Zeug',
    newbie: false
  },
  {
    restaurantImg: '/public/restaurant-img/Han-Cup.jpeg', 
    name: 'Han Cup - Korean Street Food',
    rating: {
      count: 200,
      average: 4.7
    },
    deliveryFee: 149,
    priceRange: '€€',
    categorie: 'Koreanisch',
    newbie: false
  },
  {
    restaurantImg: '/public/restaurant-img/Chill-n-beef.jpeg',
    name: 'Chill n beef',
    rating: {
      count: 14,
      average: 3.8
    },
    deliveryFee: 399,
    priceRange: '€',
    categorie: 'Amerikanisch',
    newbie: true
  },
  {
    restaurantImg: '/public/restaurant-img/Opas-Haus-Restaurant.jpeg',
    name: 'Opas Haus Restaurant',
    rating: {
      count: 34,
      average: 4.1
    },
    deliveryFee: 149,
    priceRange: '€€',
    categorie: 'Bestes Essen',
    newbie: false
  },
  {
    restaurantImg: '/public/restaurant-img/Joud-Broasted.jpeg',
    name: 'Joud Broasted',
    rating: {
      count: 19,
      average: 4.2
    },
    deliveryFee: 149,
    priceRange: '€',
    categorie: 'Bestes Essen',
    newbie: false
  },
  {
    restaurantImg: '/public/restaurant-img/Traumkuh.jpeg', 
    name: 'Traumkuh - Burger & Poutine',
    rating: {
      count: 100,
      average: 4.5
    },
    deliveryFee: 449,
    priceRange: '€€',
    categorie: 'Burger',
    newbie: false
  },
  {
    restaurantImg: '/public/restaurant-img/Wonder-Waffel.jpeg',
    name: 'Wonder Waffel Essen',
    rating: {
      count: 27,
      average: 4.5
    },
    deliveryFee: 149,
    priceRange: '€',
    categorie: 'Dessert',
    newbie: false
  },
  {
    restaurantImg: '/public/restaurant-img/Mari-La-Mora.jpeg',
    name: 'Mari La Mora',
    rating: {
      count: 26,
      average: 4.2
    },
    deliveryFee: 149,
    priceRange: '€',
    categorie: 'Dessert',
    newbie: false
  },
  {
    restaurantImg: '/public/restaurant-img/City-Pizzaria.jpeg', 
    name: 'City Pizzaria',
    rating: {
      count: 10,
      average: 4.4
    },
    deliveryFee: 149,
    priceRange: '€€',
    categorie: 'Pizza',
    newbie: false
  },
  {
    restaurantImg: '/public/restaurant-img/Dude-Pizza.jpeg',
    name: 'Dude`s Pizza',
    rating: {
      count: 14,
      average: 4.3
    },
    deliveryFee: 0,
    priceRange: '€€',
    categorie: 'Pizza',
    newbie: false
  },
  {
    restaurantImg: '/public/restaurant-img/Classic-India.jpeg',
    name: 'Classic India',
    rating: {
      count: 45,
      average: 4.7
    },
    deliveryFee: 399,
    priceRange: '€€',
    categorie: 'Indisch',
    newbie: false
  },
  {
    restaurantImg: '/public/restaurant-img/Okinii.jpeg',
    name: 'Okinii Essen',
    rating: {
      count: null,
      average: null
    },
    deliveryFee: 149,
    priceRange: '€',
    categorie: 'Sushi',
    newbie: true
  },
  {
    restaurantImg: '/public/restaurant-img/Anisa-Food.jpeg',
    name: 'Anisa Food BD',
    rating: {
      count: 38,
      average: 4.4
    },
    deliveryFee: 149,
    priceRange: '€',
    categorie: 'Angebote',
    newbie: false
  },
  {
    restaurantImg: '/public/restaurant-img/DuoDuo.jpeg',
    name: 'DuoDuo ricenoodle',
    rating: {
      count: 4,
      average: 4.8
    },
    deliveryFee: 149,
    priceRange: '€',
    categorie: 'Asiatisch',
    newbie: false
  },
  {
    restaurantImg: '/public/restaurant-img/Taste-it-india.jpeg',
    name: 'Taste it India',
    rating: {
      count: 15,
      average: 4.1
    },
    deliveryFee: 149,
    priceRange: '€€',
    categorie: 'Indisch',
    newbie: false
  },
  {
    restaurantImg: '/public/restaurant-img/Asia-JoJi.jpeg',
    name: 'Asia JoJi',
    rating: {
      count: 90,
      average: 5.0
    },
    deliveryFee: 249,
    priceRange: '€',
    categorie: 'Asiatisch',
    newbie: false
  },
  {
    restaurantImg: '/public/restaurant-img/Pottsalat.jpeg', 
    name: 'Pottsalat',
    rating: {
      count: 60,
      average: 4.9
    },
    deliveryFee: 290,
    priceRange: '€',
    categorie: 'Gesundes',
    newbie: false
  }
];

export default restaurants;