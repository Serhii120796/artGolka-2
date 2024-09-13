import { useState } from 'react';
import { GalleryItem } from '../GalleryItem/GalleryItem';
import { Sidebar } from '../SideBar/SideBar';
import { MobileMenu } from '../MobileMenu/MobileMenu.js';
import products from '../../products.json';
import { Container, GalleryList } from './Gallery.styled';
import { useSearchParams } from 'react-router-dom';

export const Gallery = ({statusMenu, onCloseMenu}) => {
  const [filter, setFilter] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");
  
  if (query !== filter) {
    setFilter(query);
      }

   const changeFilter = data => {
    setSearchParams({ query: data });
  };

  let currentGalleryList = [...products].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  if (filter === 'tn') {
    currentGalleryList = currentGalleryList.filter(({ type }) =>
      type.includes(filter)
    );
  } else if (filter) {
    currentGalleryList = products
      .filter(({ type }) => type === filter)
      .reverse();
  }

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
