const reviewTotalDisplay = document.querySelector('#reviews')
const returningUserDisplay = document.querySelector('#returning-user')
const userNameDisplay = document.querySelector('#user')

export function showReviewTotal(value: number, reviewer: string, isLoyalty: boolean) {
    const iconDisplay = isLoyalty ? '⭐' : ''
    reviewTotalDisplay.innerHTML = 'review total ' + value.toString() + '| last reviewed by ' + reviewer + ' ' + iconDisplay
}

export function populateUser(isReturning : boolean, userName: string ) {
    if (isReturning == true){
        returningUserDisplay.innerHTML = 'back'
    }
    userNameDisplay.innerHTML = userName
}

export function showDetails(value: boolean | Permissions, element : HTMLDivElement, price: number) {
    if (value) {
        const priceDisplay = document.createElement('div')
        priceDisplay.innerHTML = price.toString() + '/night'
        element.appendChild(priceDisplay)
    }
}


export function makeMultiple(value: number) : string {
    if (value > 1) {
        return 's'
    } else return ''
}

export function getTopTwoReviews(reviews: {
    name: string;
    stars: number;
    loyaltyUser: LoyaltyUser;
    date: string;
}[]) : {
    name: string;
    stars: number;
    loyaltyUser: LoyaltyUser;
    date: string;

}[]  {
 const sortedReviews = reviews.sort((a, b) => b.stars - a.stars)
 return sortedReviews.slice(0,2)
}
