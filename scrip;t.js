'use strict'

// For the moving images I pictured it like a Toy box containing toys

// document - represents the whole web page
// addEventListener - asks the web page to listen for any event
// DOMContentLoaded-event



document.addEventListener("DOMContentLoaded", function(){
    // Looking for a toy box (adverts) that holds toys(pictures)
    const adverts = document.querySelector('.adverts');  

    // We are using the spread operator to take out all the toys(children elements) outside the box (adverts) and spread them in an array.

    const images= [...adverts.children];

    // Calculating the total width of the Images
    // Calculating how wide all the toys are when lined up side by side (Including a bit of extra space (20px) between each toy)

    // reduce - Method that adds up each toy's width plus some 20px for extra space
    // clientWidth - provides the inner width of an element i.e padding but not the margin


    const totalWidth = images.reduce((acc , img) => acc +img.clientWidth + 20 , 0);

    // cloning each image
    // Here we duplicate each toy and add it to the list
    images.forEach(img=> {
        const clone = img.cloneNode(true);
        adverts.appendChild(clone);

    });

        // Initialize the starting position of the scrolling content. Offset determines how far the element has moved to the left. So the content is initially in its starting position
        
      

        let offset = 0;
        const speed = 2;     // scrolling speed

        // Decrease offset by speed. This means if offset is 0 and speed is 2 then the new value of offset will be -2.This makes the  element to move further to the left
      

        function scroll(){
            offset-=speed;
            adverts.style.transform = `translateX(${offset}px)`;    // The horizontal position of the element is updated based on the current value of the offset
// Check if the absolute value of offset is greater or equal to the total width. If true, this means thar the first set of images has moved from set



            if(Math.abs(offset)>=totalWidth){
                offset+=totalWidth;    // Reset the offset by adding totalWidth to it bringing the scroll position back to the beginning of the set of images creating a scrolling effect
            }
           
            requestAnimationFrame(scroll);    // This method asks the browser to call the scroll function, update the scroll position and schedules the next call
        }
        scroll();

//         const hamburgerMenu = document.querySelector('.hamburger-menu');
// const navbar = document.querySelector('.navbar');

// hamburgerMenu.addEventListener('click', () => {
//   navbar.classList.toggle('active');
// });



// TEXT CHANGE ON HOVER
const buttons = document.querySelectorAll(' .manyButtons');
buttons.forEach(button => {
    const defaultText = button.getAttribute('data-default-text');
    const hoverText = button.getAttribute('data-hover-text');

    // calculating the initial width of the button before hover
    const initialWidth = button.offsetWidth;

    // setting the buttons size to the initial width
    button.style.width = initialWidth +'px';

    button.addEventListener('mouseover', () => {
        button.textContent = hoverText;
    });

    button.addEventListener('mouseout', () => {
        button.textContent = defaultText;
    });
});


    });







