const renderHome = (element) => {

    const restaurantName = document.createElement('h1');
    restaurantName.classList.add('name');
    restaurantName.textContent = "Csepel City Restaurant";

    const quote = document.createElement('p');
    quote.textContent = '"The only thing I like better than talking about food is eating." - John Walters';

    element.appendChild(restaurantName);
    element.appendChild(quote)
}

export default renderHome;