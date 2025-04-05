import css from 'styled-components';

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
