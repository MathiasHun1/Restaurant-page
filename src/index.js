import renderHome from './home.js';
import cleanContent from './cleanContent.js';
import createMenuItem from './menu.js';

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
    cleanContent(content);
    
    const item1 = createMenuItem(content);
    item1.addItemName('Classic Hamburger');
    item1.addItemDescription(
        'marhahúspogácsa, házi készítésű hamburger szósz, jégsaláta, uborka, hagyma, káposzta, lilahagyma, ketchup, mustár');
    
    const item2 = createMenuItem(content);
    item2.addItemName('CheeeseBurger');
    item2.addItemDescription(
        'marhahúspogácsa, sajt, házi készítésű hamburger szósz, jégsaláta, uborka, hagyma, káposzta, lilahagyma, ketchup, mustár');

    const item3 = createMenuItem(content);
    item3.addItemName('Cheddar burger');
    item3.addItemDescription(
        'marhahúspogácsa, házi készítésű hamburger szósz, cheddar sajt, jégsaláta, ubokra, hagyma, káposzta, lilahahagyma, ketchup, mustár'
    );

    const item4 = createMenuItem(content);
    item4.addItemName('Lyoni burger');
    item4.addItemDescription(
        'marhahúspogácsa, házi készítésű hamburger szósz, pirított hagyma, jégsaláta, uborka, káposzta, lilahagyma, ketchup, mustár');

    const item5 = createMenuItem(content);
    item5.addItemName('Haspók burger');
    item5.addItemDescription(
        'marhahúspogácsa, haspók ragu, házi készítésű hamburger szósz, sajt, jégsaláta, uborka, káposzta, hagyma, lilahagyma, ketchup, mustár'
    );

    const item6 = createMenuItem(content);
    item6.addItemName('Funghi burger');
    item6.addItemDescription(
        'marhahúspogácsa, pirított gomba, házi készítésű hamburger szósz, jégsaláta, uborka, káposzta, hagyma, lilahagyma, ketchup, mustár'
    );

    const item7 = createMenuItem(content);
    item7.addItemName('Vega burger');
    item7.addItemDescription(
        'grilelzett camambert sajt, házi készítésű hamburger szósz, áfonyamártás, jégsaláta, hagyma, lilahagyma, uborka, ketchup, mustár'
    );

})




