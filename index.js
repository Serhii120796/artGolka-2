import instruments from './products.json' assert { type: 'json' };
import { createMarkup } from './js/templatePLP.js';


const galleryList = document.querySelector('.gallery-list');

galleryList.insertAdjacentHTML('beforeend', createMarkup(instruments));