import css from 'styled-components';

export const Container = css.div`
min-width: 320px;
max-width: 428px;
padding: 0 16px;
margin: 0 auto;
padding: 0 15px;

@media (min-width: 768px) {
  max-width: 768px;
  display: flex;
  gap: 10px;
}

@media (min-width: 1260px) {
  max-width: 1260px;
}
`;

export const GalleryWraper = css.div`
  width: 100%;
  `;

export const GalleryList = css.ul`
display: flex;
flex-wrap: wrap;
gap: 20px 10px;
width: 100%;

//   Центрує зображення на телефоні через різні розміри зображень
// @media (max-width: 1158px) {
//     justify-content: center;
//   }

//   @media (min-width: 1260px) {

// }
`;

export const Item = css.li`
  /* Для вирівнювання артикулів товару через різні розміри фото */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* /Для вирівнювання артикулів товару через різні розміри фото */
  background-color: #ffffff;
  width: 300px;
  
  @media (max-width: 768px) {
  margin: 0 auto;
  }

  @media (min-width: 768px) {
  width: calc((100% - 1 * 10px) / 2);
  }

  @media (min-width: 1260px) {
  width: calc((100% - 3 * 10px) / 4);
}
`;

export const NoSearch = css.p`
margin-top: 20px;
font-size: 20px;
text-align: center;
`;