import "../index.css"; //Importing the CSS for styling

import {
  showReviewTotal,
  populateUser,
  showDetails,
  getTopTwoReviews,
} from "./utils"; //Importing utility functions from utils module
import { Permissions, LoyaltyUser } from "./enums"; //Importing enumirations for permissions and loyalty users
import { Review, Property } from "./interfaces"; //Importing interfaces for permissions ans loyalty users
import MainProperty from "./classes"; //Importing the MainProperty class

//Quering DOM elements and type asserting them as HTMLElemnts
const propertyContainer = document.querySelector(".properties") as HTMLElement;
const reviewContainer = document.querySelector(".reviews") as HTMLElement;
const container = document.querySelector(".container") as HTMLElement;
const button = document.querySelector("button") as HTMLElement;
const footer = document.querySelector(".footer") as HTMLElement;

let isLoggedIn: boolean; //Variable to track if a user is logged in
// Array of review Objects 
const reviews: Review[] = [
  {
    name: "Sheia",
    stars: 5,
    loyaltyUser: LoyaltyUser.GOLD_USER,
    date: "01-04-2021",
  },
  {
    name: "Andrzej",
    stars: 3,
    loyaltyUser: LoyaltyUser.BRONZE_USER,
    date: "28-03-2021",
  },
  {
    name: "Omar",
    stars: 4,
    loyaltyUser: LoyaltyUser.SILVER_USER,
    date: "27-03-2021",
  },
];
//User object with details
const you = {
  firstName: "Bobby",
  lastName: "Brown",
  permissions: Permissions.ADMIN,
  isReturning: true,
  age: 35,
  stayedAt: ["florida-home", "oman-flat", "tokyo-bungalow"],
};

// Array of Properties objects
const properties: Property[] = [
  {
    image: "images/colombia-property.jpg",
    title: "Colombian Shack",
    price: 45,
    location: {
      firstLine: "shack 37",
      city: "Bogota",
      code: 45632,
      country: "Colombia",
    },
    contact: [+112343823978921, "marywinkle@gmail.com"],
    isAvailable: true,
  },
  {
    image: "images/poland-property.jpg",
    title: "Polish Cottage",
    price: 30,
    location: {
      firstLine: "no 23",
      city: "Gdansk",
      code: 343903,
      country: "Poland",
    },
    contact: [+1298239028490830, "garydavis@hotmail.com"],
    isAvailable: false,
  },
  {
    image: "images/london-property.jpg",
    title: "London Flat",
    price: 25,
    location: {
      firstLine: "flat 15",
      city: "London",
      code: "SW4 5XW",
      country: "United Kingdom",
    },
    contact: [+34829374892553, "andyluger@aol.com"],
    isAvailable: true,
  },
  {
    image: "images/malaysian-hotel.jpeg",
    title: "Malia Hotel",
    price: 35,
    location: {
      firstLine: "Room 4",
      city: "Malia",
      code: 45334,
      country: "Malaysia",
    },
    contact: [+60349822083, "lee34@gmail.com"],
    isAvailable: false,
  },
];

// Functions to show the total number of reviews and details ofthe first review
showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser);
//function to populate user details
populateUser(you.isReturning, you.firstName);

// Add the property caerds to the DOM
for (let i = 0; i < properties.length; i++) {
  const card = document.createElement("div"); //Create a div element for the card
  card.classList.add("card"); //Add a class for styling
  card.innerHTML = properties[i].title; //Set the inner HTML to the property title
  const image = document.createElement("img"); //Create an img element
  image.setAttribute("src", properties[i].image); // Set the image source
  card.appendChild(image); //Append the image to the card
  showDetails(you.permissions, card, properties[i].price); //Show property details based on user permissions
  propertyContainer.appendChild(card); // Append the card to the property contsiner
}
//Counter to ensure reviews are added only ince
let count = 0;
// Funxction to add reviews to the DOM
function addReviews(array: Review[]): void {
  if (!count) { //  Check if reviews have not been added yet
    count++;
    const topTwo = getTopTwoReviews(array); //Get the top two reviews
    for (let i = 0; i < topTwo.length; i++) {
      const card = document.createElement("div"); //Create a div elements for the review card
      card.classList.add("review-card"); //Add class for styling
      card.innerHTML = topTwo[i].stars + " stars from " + topTwo[i].name; //Set tge review details
      reviewContainer.appendChild(card); //Append the review card to the review container
    }
    container.removeChild(button); //Remove the button after reviews are added
  }
}
//Add event listenenr to the button to add reviews on click
button.addEventListener("click", () => addReviews(reviews));
//Current location details
let currentLocation: [string, string, number] = ["Johannesburg", "15:29", 9];
//Update footer kwith current location details
footer.innerHTML =
  currentLocation[0] +
  " " +
  currentLocation[1] +
  " " +
  currentLocation[2] +
  "°";
//Main property object
let yourMainProperty = new MainProperty(
  "./images/italian-property.jpg",
  "Italian House",
  [
    {
      name: "Olive",
      stars: 5,
      loyaltyUser: LoyaltyUser.GOLD_USER,
      date: "12-04-2021",
    },
  ]
);
//Query the main image container and add the main property image
const mainImageContainer = document.querySelector(".main-image");
const image = document.createElement("img");
image.setAttribute("src", yourMainProperty.src);
mainImageContainer.appendChild(image);
