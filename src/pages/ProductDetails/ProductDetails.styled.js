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

export const DetailsWraper = css.div`
display: flex;
gap: 20px;

// @media (min-width: 768px) {
//   max-width: 768px;
//   display: flex;
//   gap: 10px;
// }

// @media (min-width: 1260px) {
//   max-width: 1260px;
// }
`;

export const ImgWraper = css.div`
padding: 20px;
background-color: var(--primary-text-color-theme-dark);
border-radius: 10px;
`;

export const DescWraper = css.div`
width: 550px;
padding: 20px;
border-radius: 10px;
background: var(--primary-text-color-theme-dark)
`;

export const ProductTitle = css.h1`
font-size: 30px;
line-height: 1.1;
`;

export const SubTitle = css.h2`

`;

export const H3 = css.h3`

`;

export const Description = css.p`

`;
