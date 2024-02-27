const renderHome = (element) => {

    const homeCont = document.createElement('div');
    homeCont.classList.add('home-container');

    const restaurantName = document.createElement('h1');
    restaurantName.classList.add('name');
    restaurantName.textContent = "Csepel City Restaurant";

    const quote = document.createElement('p');
    quote.classList.add('quote');
    quote.textContent = '"The only thing I like better than talking about food is eating." - John Walters';
    
    element.appendChild(homeCont);
    homeCont.appendChild(restaurantName);
    homeCont.appendChild(quote);
}

export default renderHome;