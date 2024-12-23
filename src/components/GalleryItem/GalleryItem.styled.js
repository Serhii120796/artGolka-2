import css from 'styled-components';

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

export const GalleryImgWrapper = css.div`
position: relative;
`;

export const GalleryWrapper = css.div`
  padding: 10px;
  text-align: center;
`;

export const Sketch = css.img`
position: absolute;
  bottom: 0%;
  left: 0%;
  /* transition: transform var(--animation-duration) var(--timing-function); */
  transition: width 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    /* transform: scale(5); */
    width: 300px;
  }
`;

export const Text = css.p`
font-size: 15px;
`;
