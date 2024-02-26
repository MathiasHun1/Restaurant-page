import renderHome from './home.js'
import cleanContent from './cleanContent.js';

const content = document.querySelector('#content');
const homeButton = document.querySelector('.home');
const menuButton = document.querySelector('.menu');

// Load page
renderHome(content)




homeButton.addEventListener('click', () => {
    cleanContent(content);
    renderHome(content);
})

menuButton.addEventListener('click', () => {
    cleanContent(content)
})



