import { GalleryItem } from '../GalleryItem/GalleryItem';
import { Sidebar } from '../SideBar/SideBar';
import { MobileMenu } from '../MobileMenu/MobileMenu.js';
import products from '../../products.json';
import { Container, GalleryList } from './Gallery.styled';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useRef } from 'react';

export const Gallery = ({ statusMenu, onCloseMenu }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const productName = searchParams.get('article');
  const galleryRef = useRef(null);

  const changeFilter = data => {
    setSearchParams({ query: data });
  };

  let currentGalleryList = [...products].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  if (query === 'tn') {
    currentGalleryList = currentGalleryList.filter(({ type }) =>
      type.includes(query)
    );
  } else if (query) {
    currentGalleryList = products
      .filter(({ type }) => type === query)
      .reverse();
  }

  // Фільтрація галереї за пошуковим запитом
  if (productName) {
    currentGalleryList = currentGalleryList.filter(({ article }) =>
      article
        .toLowerCase()
        .includes(productName.replace(/\s+/g, '').toLowerCase())
    );
  }
  // Фільтрація галереї за пошуковим запитом

  // Прогортання галереї вверх при зміні фільтра
  useEffect(() => {
  const headerHeight = document.querySelector('header').offsetHeight; // Заміна 'header' на ваш селектор
  const galleryPosition = galleryRef.current.getBoundingClientRect().top + window.scrollY - headerHeight;
  window.scrollTo({
    top: galleryPosition,
  });
}, [query]);
  // Прогортання галереї вверх при зміні фільтра

  return (
    <>
      <MobileMenu
        abc={changeFilter}
        onCloseMenu={onCloseMenu}
        statusMenu={statusMenu}
      />
      <section>
        <Container>
          <Sidebar abc={changeFilter} />
          <GalleryList ref={galleryRef}>
            {currentGalleryList.map(product => (
              <GalleryItem key={product.id} item={product} />
            ))}
          </GalleryList>
        </Container>
      </section>
    </>
  );
};
