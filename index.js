import {goods} from './products.js';
import { createMarkup } from './js/templatePLP.js';


const galleryList = document.querySelector('.gallery-list');

galleryList.innerHTML = createMarkup(goods);
// galleryList.insertAdjacentHTML('beforeend', createMarkup(instruments));


// Брався до сортування масиву
// const goodsSortedByDate = goods
// const log = goods.filter(({date}) => date).sort((a, b) => b.date - a.date);
