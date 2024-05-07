import css from 'styled-components';

export const Aside = css.aside`
@media (max-width: 768px) {
  display: none;
  }

  @media (min-width: 768px) {
  width: 150px;
flex: none;
background-color: #ffffff; 
  }
`;

export const Text = css.p`
padding: 10px 5px;
text-align: center;
`;

export const ListItem = css.li`
border: 1px solid #dfdfdf;

`;

export const Button = css.button`
display: block;
width: 100%;
border: none;
padding: 2px 4px;
background-color: #ffffff;
color: #666666;

&:hover {
  background-color: #e6e6e6;
}

&:focus {
  color: var(--logo-color);
}
`;
