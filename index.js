import {goods} from './products.js';
import { createMarkup } from './js/templatePLP.js';


const galleryList = document.querySelector('.gallery-list');

galleryList.innerHTML = createMarkup(goods);
// galleryList.insertAdjacentHTML('beforeend', createMarkup(instruments));

