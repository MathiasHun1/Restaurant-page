
// menu item creation

const createMenuItem = (element) => {

    //container    
const itemCont = document.createElement('div');
itemCont.classList.add('item-container');
element.appendChild(itemCont)
    //item name
const itemName = document.createElement('h2');
itemName.classList.add('item-name');
itemCont.appendChild(itemName);
    //item description
const itemDescription = document.createElement('p');
itemDescription.classList.add('item-description');
itemCont.appendChild(itemDescription);

const addItemName = (name) => {
    itemName.textContent = name;
}

const addItemDescription = (description) => {
    itemDescription.textContent = description;
}

return {addItemName, addItemDescription}
}


export default createMenuItem;
