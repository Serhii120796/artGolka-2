import { goods } from './products.js';
import { createMarkup } from './js/templatePLP.js';

const galleryList = document.querySelector('.gallery-list-js');
const filterList = document.querySelector('.filter-list-js');
filterList.addEventListener('click', handleClick);

let currentGalleryList = [...goods].sort((a, b) => b.date - a.date);
galleryList.insertAdjacentHTML('beforeend', createMarkup(currentGalleryList));

function handleClick(evt) {
  if (evt.target === evt.currentTarget) {
    return;
    }

    if (evt.target.getAttribute('data-filter') === 'novelty') {
        currentGalleryList = [...goods].sort((a, b) => b.date - a.date).splice(0, 40);
        galleryList.innerHTML = createMarkup(currentGalleryList);
        return;
    }
    
  currentGalleryList = goods.filter(
    ({ type }) => evt.target.getAttribute('data-filter').includes(type),
  ).reverse();
  galleryList.innerHTML = createMarkup(currentGalleryList);
}

goods.map(good => good.new = "")

console.log(goods);


