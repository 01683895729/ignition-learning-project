const data = [
  {
    title: "Pizza Hut",
    imageUrl:
      "https://www.zilliondesigns.com/blog/wp-content/uploads/Dominos-Pizza-logo-2.jpg",
    foods: [
      {
        dishName: "Chicken Pizza",
        dishPic:
          "https://www.zilliondesigns.com/blog/wp-content/uploads/Dominos-Pizza-logo-2.jpg",
        price: 5,
      },
      {
        dishName: "Veg Cheese Pizza",
        dishPic:
          "https://www.zilliondesigns.com/blog/wp-content/uploads/Dominos-Pizza-logo-2.jpg",
        price: 4,
      },
    ],
    time: "9am to 9pm",
    pickup: true,
    delivery: true,
    isOpen: true,
    logoUrl:
      "https://www.zilliondesigns.com/blog/wp-content/uploads/Dominos-Pizza-logo-2.jpg",
    rating: 5,
    ratingCount: "234",
    code: "1234",
    coords: {
      id: "PZ001",
      latitude: 23.8103,
      latitudeDelta: 0.01,
      longitude: 90.4125,
      longitudeDelta: 0.01,
      address: "Dhaka, Bangladesh",
    },
  },

  {
    title: "Burger King",
    imageUrl:
      "https://1000logos.net/wp-content/uploads/2017/03/Burger-King-Logo.png",
    foods: [
      {
        dishName: "Whopper",
        dishPic:
          "https://1000logos.net/wp-content/uploads/2017/03/Burger-King-Logo.png",
        price: 6,
      },
      {
        dishName: "Crispy Chicken",
        dishPic:
          "https://1000logos.net/wp-content/uploads/2017/03/Burger-King-Logo.png",
        price: 4,
      },
    ],
    time: "10am to 10pm",
    pickup: true,
    delivery: false,
    isOpen: true,
    logoUrl:
      "https://1000logos.net/wp-content/uploads/2017/03/Burger-King-Logo.png",
    rating: 4.5,
    ratingCount: "189",
    code: "2345",
    coords: {
      id: "BK002",
      latitude: 19.076,
      latitudeDelta: 0.01,
      longitude: 72.8777,
      longitudeDelta: 0.01,
      address: "Mumbai, India",
    },
  },

  {
    title: "KFC",
    imageUrl: "https://1000logos.net/wp-content/uploads/2017/03/Kfc_logo.png",
    foods: [
      {
        dishName: "Fried Chicken Bucket",
        dishPic:
          "https://1000logos.net/wp-content/uploads/2017/03/Kfc_logo.png",
        price: 8,
      },
      {
        dishName: "Zinger Burger",
        dishPic:
          "https://1000logos.net/wp-content/uploads/2017/03/Kfc_logo.png",
        price: 5,
      },
    ],
    time: "11am to 11pm",
    pickup: true,
    delivery: true,
    isOpen: false,
    logoUrl: "https://1000logos.net/wp-content/uploads/2017/03/Kfc_logo.png",
    rating: 4.8,
    ratingCount: "321",
    code: "3456",
    coords: {
      id: "KFC003",
      latitude: 28.7041,
      latitudeDelta: 0.01,
      longitude: 77.1025,
      longitudeDelta: 0.01,
      address: "New Delhi, India",
    },
  },

  {
    title: "Starbucks",
    imageUrl:
      "https://1000logos.net/wp-content/uploads/2017/05/Starbucks-logo.png",
    foods: [
      {
        dishName: "Cappuccino",
        dishPic:
          "https://1000logos.net/wp-content/uploads/2017/05/Starbucks-logo.png",
        price: 3,
      },
      {
        dishName: "Mocha Latte",
        dishPic:
          "https://1000logos.net/wp-content/uploads/2017/05/Starbucks-logo.png",
        price: 4,
      },
    ],
    time: "7am to 10pm",
    pickup: true,
    delivery: false,
    isOpen: true,
    logoUrl:
      "https://1000logos.net/wp-content/uploads/2017/05/Starbucks-logo.png",
    rating: 4.2,
    ratingCount: "150",
    code: "4567",
    coords: {
      id: "ST004",
      latitude: 40.7128,
      latitudeDelta: 0.01,
      longitude: -74.006,
      longitudeDelta: 0.01,
      address: "New York, USA",
    },
  },

  {
    title: "Subway",
    imageUrl:
      "https://1000logos.net/wp-content/uploads/2017/03/Subway-Logo.png",
    foods: [
      {
        dishName: "Chicken Long Sub",
        dishPic:
          "https://1000logos.net/wp-content/uploads/2017/03/Subway-Logo.png",
        price: 5,
      },
      {
        dishName: "Veg Sub",
        dishPic:
          "https://1000logos.net/wp-content/uploads/2017/03/Subway-Logo.png",
        price: 4,
      },
    ],
    time: "8am to 9pm",
    pickup: false,
    delivery: true,
    isOpen: true,
    logoUrl: "https://1000logos.net/wp-content/uploads/2017/03/Subway-Logo.png",
    rating: 4.0,
    ratingCount: "112",
    code: "5678",
    coords: {
      id: "SW005",
      latitude: 51.5074,
      latitudeDelta: 0.01,
      longitude: -0.1278,
      longitudeDelta: 0.01,
      address: "London, UK",
    },
  },

  {
    title: "Domino's Pizza",
    imageUrl:
      "https://1000logos.net/wp-content/uploads/2018/03/Dominos-logo.png",
    foods: [
      {
        dishName: "Pepperoni Pizza",
        dishPic:
          "https://1000logos.net/wp-content/uploads/2018/03/Dominos-logo.png",
        price: 7,
      },
      {
        dishName: "Cheese Burst",
        dishPic:
          "https://1000logos.net/wp-content/uploads/2018/03/Dominos-logo.png",
        price: 6,
      },
    ],
    time: "9am to 8pm",
    pickup: true,
    delivery: true,
    isOpen: false,
    logoUrl:
      "https://1000logos.net/wp-content/uploads/2018/03/Dominos-logo.png",
    rating: 4.6,
    ratingCount: "410",
    code: "6789",
    coords: {
      id: "DM006",
      latitude: 34.0522,
      latitudeDelta: 0.01,
      longitude: -118.2437,
      longitudeDelta: 0.01,
      address: "Los Angeles, USA",
    },
  },
];

module.exports = data;
