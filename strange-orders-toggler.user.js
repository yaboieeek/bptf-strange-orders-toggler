// ==UserScript==
// @name         Strange unusuals toggler
// @namespace   eeek
// @version      1.0.1
// @description  i cant see shit ffs remove stranges
// @author       eeek
// @match        https://backpack.tf/stats/Unusual/*/Tradable/Craftable/*
// @match        https://backpack.tf/classifieds?*&quality=5&tradable=1*&particle=*
// @downloadURL https://github.com/yaboieeek/bptf-strange-orders-toggler/raw/refs/heads/main/strange-orders-toggler.user.js
// @updateURL https://github.com/yaboieeek/bptf-strange-orders-toggler/raw/refs/heads/main/strange-orders-toggler.user.js
// @icon         https://www.google.com/s2/favicons?sz=64&domain=backpack.tf
// ==/UserScript==

const buyOrdersContainer = document.querySelectorAll('.media-list')[1]|| [];
const buyOrderCollection = buyOrdersContainer.querySelectorAll('li');

const buyOrderToggler = document.createElement('button');
const strangeBuyOrderCollection = [];
// const buyOrderLoader = document.createElement('button');
// buyOrderLoader.innerText = 'Load more orders via API';

let strangeOrdersCounter = 0;
for (const buyOrder of buyOrderCollection) {
    const title = buyOrder.querySelector('h5');
    if (!title.innerText.toLowerCase().includes('strange')) continue;
    strangeOrdersCounter++;
    buyOrder.classList.add('strange-buyorder', 'inactive');
    strangeBuyOrderCollection.push(buyOrder);
}

buyOrderToggler.innerText = `Toggle ${strangeOrdersCounter} strange orders`;

console.log(buyOrdersContainer, buyOrderToggler)
buyOrdersContainer.prepend(buyOrderToggler);

buyOrderToggler.addEventListener('click', function () {
    strangeBuyOrderCollection.forEach(buyOrder => buyOrder.classList.toggle('inactive'));
})

const styling = `
    .inactive {
        display: none
    }
`
const style = document.createElement('style');
style.innerHTML = styling
document.head.append(style)
