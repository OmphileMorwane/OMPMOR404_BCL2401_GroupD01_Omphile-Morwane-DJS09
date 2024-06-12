//Import the LoyakyUser enum from the enumus module
import { LoyaltyUser } from "./enums";
// Import the Price and Country types from the types module
import { Price, Country } from "./types";

// Define and export an interface for a review
export interface Review {
  name: string;  // Name of the reviewer
  stars: number; // Number of stars given in the review
  loyaltyUser: LoyaltyUser; // Type of loyalty user who gave the review
  date: string; // Date of the review
}

// Define and export an interface for a property
export interface Property {
  image: string; // URL of the property image
  title: string; // Title of the property
  price: Price; // Price of the property (using the Price type)
  location: {  // Location details of the property
    firstLine: string; // First line of the property address
    city: string; // City of the property
    code: number | string; // Postal code of the property (number or string)
    country: Country; // Country of the property (using the Country type)
  };
  contact: [number, string]; // Contact information of the property owner (phone number and email)
  isAvailable: boolean;  // Availability status of the property
}
