const propertyContainer = document.querySelector('.properties')
import { showReviewTotal, populateUser } from './utils'

let isOpen : boolean

const reviews : {
    name: string;
    stars: number;
    loyaltyUser : boolean;
    date: string;
}[] = [
  {
    name: "Sheia",
    stars: 5,
    loyaltyUser: true,
    date: "01-04-2021",
  },
  {
    name: "Andrzej",
    stars: 3,
    loyaltyUser: false,
    date: "28-03-2021",
  },
  {
    name: "Omar",
    stars: 4,
    loyaltyUser: true,
    date: "27-03-2021",
  },
];


const you = {
    firstName: string;
    lastName: string;
    isReturning: boolean;
    age: number;
    stayedAt: (string)[];
}  = {
    firstName: 'Bobby',
    lastName: 'Brown',
    isReturning: true,
    age: 35
    stayedAt: ['florida-home', 'oman-flat'. 'tokyo-bungalow']

}

const properties : {
    image: string;
    title: string;
    price: number;
    location: {
        firstLine: string;
        city: number;
        country: string;  
    };
    contact: string;
    isAvailable: boolean;
}[] = [
    {
        image: '',
        title: 'Colombian Shack',
        price: 45,
        location: {
            firstLine: 'shack 37',
            city: 'Bogota',
            code: 45632,
            country: 'Colombia'
        },
        contact: 'TankayaSue@gmail.com',
        isAvailable: true

    },
    {
        image: '',
        title: 'Polish Cottage',
        price: 34,
        location: {
            firstLine: 'no 23',
            city: 'Gdansk',
            code: 99567,
            country: 'Poland'
        },
        contact: 'Garymavsk@hotmail.com',
        isAvailable: false

    }
    {
        image: '',
        title: 'London Flat',
        price: 23,
        location: {
            firstLine: 'flat 15',
            city: 'London',
            code: 354333,
            country: 'United Kingdom'
        },
        contact: 'TomCruiz@hotmail.com',
        isAvailable: true

    }
]
showReviewTotal('two', reviews[0].name, reviews[0].loyaltyUser)

populateUser(you.isReturning, you.firstName)

for (let i=0; i < propertiers.length; i++) {
    const card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = properties[i].title
    const image = document.createElement('img')
    image.setAttribute('src', properties[i].image)
    card.appendChild(image)
    propertyContainer.appendChild(card)
