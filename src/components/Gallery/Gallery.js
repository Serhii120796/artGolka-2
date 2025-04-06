import { GalleryItem } from '../GalleryItem/GalleryItem';
import { Sidebar } from '../SideBar/SideBar';
import { MobileMenu } from '../MobileMenu/MobileMenu.js';
import products from '../../products.json';
import { categoriesForSearch } from 'productCategories.js';
import { Container, GalleryWraper, GalleryList, Item, NoSearch } from './Gallery.styled';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useRef } from 'react';

export const Gallery = ({ statusMenu, onCloseMenu }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const productName = searchParams.get('search');
  const galleryRef = useRef(null); //використовується для отримання посилання на DOM-елемент галереї (GalleryList).
  // Це потрібно для автоматичного прокручування (scroll) сторінки вгору після зміни фільтра (query) або сторінки (page).

  const changeFilter = data => {
    setSearchParams({ query: data });
  };

  let currentGalleryList = [...products].sort(
    //products розпилено, щоб не змінювати оригінальний масив
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  if (query === 'tn') {
    currentGalleryList = currentGalleryList.filter(({ type }) =>
      type.includes(query)
    );
  } else if (query) {
    currentGalleryList = products
      .filter(({ type }) => type === query)
      .reverse(); //мутуючий метод, але після фільтрації масив не змінюється
  }

  // Фільтрація галереї за пошуковим запитом
  if (productName && productName.length > 2) {
    currentGalleryList = products
      .filter(({ article, type }) => {
        const isArticle = article
          .toLowerCase()
          .includes(productName.trim().toLowerCase());
        const isCategory = categoriesForSearch[type].includes(
          productName.trim().toLowerCase()
        );
        return isArticle || isCategory;
      })
      .reverse();
  }
  // Фільтрація галереї за пошуковим запитом

  // Прогортання галереї вверх при зміні фільтра
  useEffect(() => {
    const headerHeight = document.querySelector('header').offsetHeight; // Заміна 'header' на ваш селектор
    const galleryPosition =
      galleryRef.current.getBoundingClientRect().top +
      window.scrollY -
      headerHeight;
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
          <GalleryWraper>
          <GalleryList ref={galleryRef}>
            {currentGalleryList.map(product => (
              <Item key={product.id}>
                <GalleryItem item={product} />
              </Item>
            ))}
          </GalleryList>
            {!currentGalleryList.length && <NoSearch>За запитом <span>"{productName}"</span> нічого не знайдено</NoSearch>}
            </GalleryWraper>
        </Container>
      </section>
    </>
  );
};
