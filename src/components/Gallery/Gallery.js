import { useState } from 'react';
import { GalleryItem } from '../GalleryItem/GalleryItem';
import { Sidebar } from '../SideBar/SideBar';
import { MobileMenu } from '../MobileMenu/MobileMenu.js';
import products from '../../products.json';
import { Container, GalleryList } from './Gallery.styled';

export const Gallery = ({statusMenu, onCloseMenu}) => {
  const [filter, setFilter] = useState('');

  // Переробити алгоритм роботи фільтрів

  const changeFilter = data => setFilter(data);

  let currentGalleryList = [...products].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  if (filter === 'tn') {
    currentGalleryList = currentGalleryList.filter(({ type }) =>
      type.includes(filter)
    );
  }

  if (filter && filter !== 'tn') {
    currentGalleryList = products
      .filter(({ type }) => type.includes(filter))
      .reverse();
  }

  // Переробити алгоритм роботи фільтрів

  return (<>
    <MobileMenu abc={changeFilter} onCloseMenu={onCloseMenu} statusMenu={ statusMenu} />
    <section>
      <Container>
        <Sidebar abc={changeFilter} />
        <GalleryList>
          {currentGalleryList.map(product => (
            <GalleryItem key={product.id} item={product} />
          ))}
        </GalleryList>
      </Container>
    </section>
    </>
  );
};
