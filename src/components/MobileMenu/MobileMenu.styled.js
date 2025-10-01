import { NavLink } from 'react-router-dom';
import css from 'styled-components';
import { RiArrowDownSFill } from 'react-icons/ri';

// export const Backdrop = css.div`
// position: fixed;
// z-index: 100;
// top: 0;
// left: 0;
// width: 100%;
// height: 100%;
// background-image: linear-gradient(
// rgba(75, 56, 21, 0.6),
// rgba(75, 56, 21, 0.6));
// overflow-y: scroll;
// opacity: 1;
// transition: visibility 250ms cubic-bezier(0.4, 0, 0.2, 1),
// opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
// `;

export const Menu = css.div`
@media (max-width: 768px) {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 220px;
  height: 100%;
  min-height: 400px;
  background-color: #1e1823;
  transform: translateX(${({ $status }) => ($status ? '0' : '-100%')});
  transition: transform var(--standart-transition);
  padding-top: 40px;
  overflow-y: scroll;
}

@media (min-width: 768px) {
 display: none;
}
`;

export const CloseButton = css.button`
position: absolute;
top: 10px;
right: 10px;
padding: 0;
line-height: 0;
background-color: transparent;
border: none;
color: var(--primary-text-color-theme-dark);
transform: scale(1);
transition: transform 800ms ease-out, color 500ms ease-out;
  
&:focus, &:active {
  transform: scale(1.43);
  color: var(--accent-color);
  }
`;

export const Icon = css.svg`
stroke: currentColor;
fill: currentColor;
`;

export const Link = css(NavLink)`
display: block;
margin-bottom: 20px;
text-align: center;
color: var(--primary-text-color-theme-dark);
`;

export const ListItem = css.li`
color: var(--primary-text-color-theme-dark);
`;

export const Button = css.button`
position: relative;
width: 100%;
padding: 5px;
border: none;
font-size: 16px;
font-weight: 500;
line-height: 1.14;
background-color: inherit;
color: inherit;

&:focus, &:active {
color: var(--accent-color);
letter-spacing: -0.01em;
}
`;

export const IconDownArrow = css(RiArrowDownSFill)`
// display: block;
  width: 20px;
  height: 20px;
  position: absolute;
  right: 0;
  top: 0;
  color: inherit;
`;
