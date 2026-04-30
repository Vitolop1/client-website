# Intro to Web Dev Final Report Content

Name: Vito Loprestti

Date: April 30, 2026

Final Program Share Link from the IDE: https://github.com/Vitolop1/client-website

## Introduction

Client name: ABC Fitness Studio

This report presents the final website for ABC Fitness Studio, a small fitness business focused on strength training, personal coaching, and member engagement. The website includes a Home page, Gallery page, About Us/Contact page, and a custom Classes and Events page. The purpose of the site is to promote gym services, encourage visitors to learn about membership options, and make it easy for potential customers to contact the gym.

The selected logo is a barbell icon, which clearly communicates strength, training, and fitness. The color palette uses dark navy, red, green, white, and light gray. Dark navy creates a professional and strong brand identity, red communicates energy and intensity, green suggests health and progress, and the light background improves readability.

The font color choices support accessibility and contrast. Dark navy text is used on light backgrounds, while white text is used on dark header and footer sections. The typography uses a clean sans-serif font, Arial/Helvetica, because it is readable, modern, and appropriate for a gym website.

## Wireframes

Mobile Wireframes: Insert the screenshot showing the mobile wireframes for the Home page, Gallery page, About Us/Contact page, and custom Classes and Events page.

Desktop Wireframes: Insert the screenshot showing the desktop wireframes for the Home page, Gallery page, About Us/Contact page, and custom Classes and Events page.

## Website Structure and Content

The website uses a consistent structure across all four pages. Each page includes a header with the gym logo, site name, tagline, and navigation bar. Each page also includes a main content area and a footer with copyright information and a Subscribe form.

1. Home Page: https://vitolop1.github.io/client-website/

The Home page introduces ABC Fitness Studio and explains the gym's focus on strength, coaching, and member support. It includes a hero section and three information cards for training programs, personal coaching, and member community.

2. Gallery Page: https://vitolop1.github.io/client-website/gallery.html

The Gallery page presents the gym's main services in product-style cards. The services include a monthly gym membership, personal training session, and nutrition coaching plan. Each service includes a title, description, price, and Add to Cart button. The page also includes a View Cart button and a shopping cart modal.

3. About Us Page: https://vitolop1.github.io/client-website/contact.html

The About Us/Contact page describes the gym's mission and includes a contact form. The form collects the visitor's name, email, and message or custom training request. Required fields use built-in browser validation.

4. Custom Page: https://vitolop1.github.io/client-website/custom.html

The custom page is a Classes and Events page. It includes information about group training, a 30-day fitness challenge, and customer testimonials. This page supports the client goal of engagement by showing community-based gym activities.

## Website Design and Styling

### Overall Design

The website design follows the strong and energetic theme of ABC Fitness Studio. The header uses dark navy with white text to create contrast and a professional look. Red is used for active navigation states and primary buttons because it suggests energy and motivation. Green is used in visual accents and pricing to connect the design to health and progress. The body uses a light gray background with white cards, making the content easy to scan and read.

The layout is consistent across pages. The navigation bar, header, footer, buttons, cards, and forms all use the same styling rules from the shared CSS file. This creates a unified user experience and makes the website feel like one complete business site.

### Accessibility

The website follows several accessibility practices. First, the color contrast between text and backgrounds is strong. For example, dark navy text on a white or light gray background is easy to read, and white text on the dark header/footer creates clear contrast. Second, form fields use visible labels so users know what information to enter. Third, the logo image includes descriptive alt text, and buttons use clear action-based text such as Add to Cart, View Cart, Clear Cart, and Process Order.

The website also uses browser-based validation for required fields. This helps users identify missing information before submitting forms. I checked the main color combinations using Adobe Color accessibility tools and selected combinations that support readability.

### Responsive Web Design

The website includes responsive design features. First, the main content width uses flexible sizing so the layout can adjust to different screen widths. Second, the card layout uses CSS Grid with `auto-fit` and `minmax`, allowing cards to move from multiple columns on desktop to fewer columns on smaller screens. Third, the navigation bar uses flexbox and wraps when the screen becomes narrow. A media query also reduces spacing and heading size on smaller screens so the layout remains readable on mobile devices.

## Website Functionality

### Navigation Bar

The navigation bar appears on every page and allows users to move between the Home, Gallery, About Us/Contact, and Classes and Events pages. The active page is highlighted, helping users understand where they are in the site.

### Subscribe Feature

Each page includes a Subscribe form in the footer. The email field is required and uses built-in HTML validation. When the user enters a valid email and submits the form, JavaScript displays the alert message, "Thank you for subscribing."

### Add to Cart Feature

On the Gallery page, each service has an Add to Cart button. JavaScript reads the service name and price from the button's data attributes, saves the item to the cart, and displays the alert message, "Item added to the cart."

### View Cart Feature

The View Cart button opens a modal window. The modal reads items from sessionStorage and displays the selected services with their prices and total cost.

### Contact Us Feature

The About Us/Contact page includes a contact form for customer questions and custom training requests. When the form is submitted with valid input, JavaScript saves the information to localStorage and displays the alert message, "Thank you for your message."

## Web Data Storage

The website uses web storage to support the shopping cart and contact form features.

### Shopping Cart Feature

The shopping cart uses sessionStorage. When a user clicks Add to Cart, the selected service name and price are saved under the key `abcFitnessCart`. When the user clicks View Cart, JavaScript retrieves the stored cart data from sessionStorage and displays it in the cart modal. The Clear Cart and Process Order buttons remove the cart data from sessionStorage. This is appropriate because shopping cart data only needs to last during the current browsing session.

### Contact Us Feature

The Contact Us feature uses localStorage. When the user submits the form, JavaScript saves the user's name, email, message, and submission time under the key `abcFitnessCustomRequests`. localStorage is used because the submitted information remains available after a page refresh or browser restart.

## Customization

The custom fourth page is the Classes and Events page. This page supports the gym's engagement goal by showing community events, group workouts, fitness challenges, and testimonials. It relates to the rest of the site because it encourages visitors to see ABC Fitness Studio as more than a place to work out; it presents the gym as a supportive fitness community.

## Screenshots of Rendered Webpages

Homepage: Insert screenshot of the Home page.

Subscribe feature: Insert screenshot after entering an email and clicking Subscribe.

Subscribe feature input validation: Insert screenshot after clicking Subscribe with the email field empty.

Gallery page: Insert screenshot of the Gallery page.

Shopping cart - Add Item: Insert screenshot of the "Item added to the cart." alert.

Shopping cart - View Cart after adding an item: Insert screenshot of the cart modal with one service.

Shopping cart - View Cart after adding multiple items: Insert screenshot of the cart modal with multiple services.

Shopping cart - Clear Cart alert: Insert screenshot of the "Cart cleared." alert.

Shopping cart - Process Order alert: Insert screenshot of the "Thank you for your order." alert.

Shopping cart - Process Order after already processed: Insert screenshot of the "Your order has already been processed." alert.

Shopping cart - Clear Cart empty cart: Insert screenshot of the modal showing "Your shopping cart is empty."

SessionStorage before processing order: Insert screenshot showing `abcFitnessCart` in Session Storage.

SessionStorage after processing order: Insert screenshot showing that `abcFitnessCart` has been removed.

About Us page: Insert screenshot of the About Us/Contact page.

Contact Us form: Insert screenshot of the completed contact form.

LocalStorage after form submission: Insert screenshot showing `abcFitnessCustomRequests` in Local Storage.

Contact Us form input validation: Insert screenshot after attempting to submit the form with required fields empty.

Custom Page: Insert screenshot of the Classes and Events page.

## Description of Issues

During testing, I noticed that the Gallery page originally had repeated cart action buttons. I fixed this by keeping the View Cart button on the main Gallery page and placing the Clear Cart and Process Order buttons inside the shopping cart modal. I also updated the Subscribe feature so it uses a required email field and browser validation. After these corrections, the navigation, forms, alerts, sessionStorage, and localStorage features worked as expected.

