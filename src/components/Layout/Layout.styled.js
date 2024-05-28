import css from 'styled-components';

export const HeaderCss = css.header`
@media (max-width: 768px) {
  position: sticky;
  top: 0;
  z-index: 1;
  background: rgb(248, 241, 229);
}

`;

export const Container = css.div`
min-width: 320px;
max-width: 428px;
padding: 0 16px;
margin: 0 auto;
display: flex;
justify-content: space-between;
align-items: center;

@media (max-width: 768px) {
    gap: 10px;
}

@media (min-width: 768px) {
    max-width: 768px;
}

@media (min-width: 1260px) {
  max-width: 1260px;
  padding: 0 15px;
}
`;

export const Link = css.a`
display: none;

@media (min-width: 768px) {
    display: block;
    padding-top: 20px;
    padding-bottom: 20px;
    font-family: 'Raleway', sans-serif;
    font-weight: 800;
    font-size: 20px;
    line-height: 1.17;
    letter-spacing: 0.03em;
    color: var(--primary-text-color-theme-light);

    span {
    color: var(--logo-color);
    }
  }
`;

export const BurgerButton = css.button`
@media (min-width: 768px) {
    display: none;
}
`;

export const Icon = css.svg`
display: block;
fill: black;
`;

export const Contact = css.p`
font-size: 16px;
text-align: right;
background: linear-gradient(45deg, red, blue, green);
background-clip: text;
-webkit-background-clip: text;
color: transparent;

@media (min-width: 768px) {
    // padding-top: 20px;
    font-size: 20px;
}
`;
