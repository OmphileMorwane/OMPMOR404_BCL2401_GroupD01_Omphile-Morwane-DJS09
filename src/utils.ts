// Select the element with id "reviews" to display review total
const reviewTotalDisplay = document.querySelector("#reviews");
// Select the element with id "returning-user" to display returning user status
const returningUserDisplay = document.querySelector("#returning-user");
// Select the element with id "user" to display user name
const userNameDisplay = document.querySelector("#user");
// Import necessary enums and interfaces
import { LoyaltyUser, Permissions } from "./enums";
import { Review } from "./interfaces";

// Function to display review total
export function showReviewTotal(
  value: number, //Total number of reviews
  reviewer: string, //Name of the reviewer
  isLoyalty: LoyaltyUser //Loyalty status of the reviewer
) {
  // Display loyalty icon if the reviewer is a gold user
  const iconDisplay = LoyaltyUser.GOLD_USER ? "⭐" : "";
  // Update the HTML content to show review total and last reviewer details
  reviewTotalDisplay.innerHTML =
    value.toString() +
    " review" +
    makeMultiple(value) +
    " | last reviewed by " +
    reviewer +
    " " +
    iconDisplay;
}

// Function to display user information
export function populateUser(isReturning: boolean, userName: string) {
  // Display "back" if the user is returning
  if (isReturning == true) {
    returningUserDisplay.innerHTML = "back";
  }
  // Display user name
  userNameDisplay.innerHTML = userName;
}

// Function to show additional details based on user permissions
export function showDetails(
  value: boolean | Permissions, //Value representing permissions
  element: HTMLDivElement, //HTML element to append detaisl
  price: number //Price of the property
) {
  // If user has permissions or value is true, display price per night
  if (value) {
    const priceDisplay = document.createElement("div");
    priceDisplay.innerHTML = price.toString() + "/night";
    element.appendChild(priceDisplay);
  }
}

// Function to make plural if value is greater than 1 or equal to 0
export function makeMultiple(value: number): string {
  if (value > 1 || value == 0) {
    return "s";
  } else return "";
}

// Function to get top two reviews
export function getTopTwoReviews(reviews: Review[]): Review[] {
  const sortedReviews = reviews.sort((a, b) => b.stars - a.stars);
  return sortedReviews.slice(0, 2);
}
