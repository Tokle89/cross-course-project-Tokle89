# Rainy Days

Created a web application for a web shop called Rainy Days in my cross course project in school.

## Description

Was tasked with designing and creating a web application called Rainy Days. A online shop selling men`s  and women`s rain jackets.
Created a web application using html, css and javascript. The user has to be able teh site easily. be able to add a jacket or jackets to the shopping cart, type in his information on the checkout page adn complete the purchase.

Site architecture:

- Home page
- Collection page (page with the list og products)
- Details page ( showing the specific jacket the user clicked on)
- Checkout page
- A checkout success page
- About us page
- Contact us page

The products is saved in Wordpress Cms, and fetched trough api calls and rendered to the page.

In order to get let the user save jackets in the shopping cart, i made a createCart function in the cart.js that if a cart array does not exist in localstorage. Creates a empty cart array. So when the user adds a jacket, the jacket gets saved in local storage.
After a purchase is complete, the local storage is cleared.

Also created a function thats checks and updates the total price accordingly when a user ands or removes a jacket from the cart.

In order to create a dynamic details page, a Query string is used go get the products id. and fetch and render that product on the details page.

## Built With

- Html
- Css
- javascript

## Getting Started

### Installing

This is where you list how to get the project started. It typically just includes telling a person to clone the repo and then to install the dependencies e.g.

1. Clone the repo:

```bash
git clone git@github.com: Tokle89/cross-course-project-Tokle89.git
```

### Running

To run the app, run the following commands:

```bash
npm run start
```

## Contact

This is where you can leave your social links for people to contact you, such as a LinkedIn profile or Twitter link e.g.

[My LinkedIn page](https://www.linkedin.com/in/fredrik-tokle-0994a023b/)
