# Tablely- restaurant booking app


## Description
This is an application that enables users to browse their favourite cuisines and book the time, date and number of guests.

## Features
- Searching restaurants by name or with a dropdown menu
- Favouriting restaurants you like by clicking the heart symbol in the restaurant card. You can aslo un-favourite if you do not have interest in the restaurant anymore. When you favourite a restaurant it saves in the "favourites" section at the bottom of the page. When un-favourited that restaurant is removed from the list.
- A single page application which sends you to a section of a page when you click on the navigation button in the navbar. For example, clicking "my bookings" scrolls doen to the my bookings section in the page.
- For booking there is a form where you can choose your desired choices and confirm a reservation. This creates a little card under the "my bookings" section.

## How to run
- Download or clone the repository from GitHub.
- Open the project folder in Visual Studio Code.
- Locate and open index.html.
- Right-click index.html and select Open with Live Server.
- The application will launch in your default web browser.

## Github link
https://github.com/soubyron/Javascript-assignment

## Technologies used
- HTML 
- CSS
- Javascript

## Problems encountered
One of the first problems I had to deal with was the favourite button. After writing the JS code for this feature I realised it only affected the first card and not the other cards. It was there that I had to find a way to loop. 

```js
const heartButtons = document.querySelectorAll('.favourite-button');

heartButtons.forEach((heartButton) => {

    heartButton.addEventListener('click', () => {
        heartButton.classList.toggle('active');

        if (heartButton.classList.contains('active')) {
            heartButton.textContent = '♥';
        } else {
            heartButton.textContent = '♡';

        }
    });

});
```
This is the code that I used to loop through everything so it can affect all the cards.

Another problem I encountered was with the booking form where afteer entering the details and submitting, for the forms did not clear and the details entered were still in the fields. this is where `event.preventDefault();` helped me.

I also realised I had not written code for the "book a table" button to act as an event listener, so initially when i clicked, nothing happened. I corrected it by looping through al of those buttons and adding an event listener to them.

During testing of the booking form, I noticed that I could select past days which I did not want
```js
const today = new Date().toISOString().split('T')[0];

    if (restaurant === "" || date === "" || time === "" || guests === "") {
        bookingMessage.textContent = "Please fill in all fields."
        return;
    }

    if (date < today) {
        bookingMessage.textContent = "Please choose a future date.";
        return;
    }
```
This code helped preventing me from choosing past dates and only let me choose the current day or future days.

## AI Support
AI was used mostly to figure out the problems mentioned above. In some cases it helped me remember what I have to do and in some cases I was totally stuck (see screenshots in project folder to know how AI was used). The case of using `const today = new Date().toISOString().split('T') [0];` was discovered using AI as i did not know how to go about it.
*Most of the text in the cards and webpage was AI generated*

## Webpage link
https://soubyron.github.io/Javascript-assignment/


