//Import the review interface from the interface module
import { Review }  from './interfaces';

//Define and export the MainProperty class
export default class MainProperty {
        src: string // Property to hold the source URL of the main property image
        title: string // Property to hold the title of the main property
        reviews: Review[] // Property to hold an array of reviews for the main property

        // Constructor to initialize the MainProperty object
        constructor(src: string, title: string, reviews: Review[]) {
            this.src = src // Set the src property with the provided source URL
            this.title = title // Set the title property with the provided title
            this.reviews = reviews //Set the reviews property with the provided array of reviews
        }
    }