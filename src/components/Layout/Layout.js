import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import {
  HeaderCss,
  Container,
  Link,
  Contact,
  BurgerButton,
  Icon,
} from './Layout.styled.js';

export const Layout = ({ onOpenMenu }) => {
  return (
    <>
      <HeaderCss>
        <Container>
          <Link to="/">
            <span>Art</span>Golka
          </Link>
          <BurgerButton type="button" onClick={() => onOpenMenu()}>
            <Icon width="18" height="18">
              <use href={`${process.env.PUBLIC_URL}/images/icons.svg#burger-icon`}></use>
            </Icon>
          </BurgerButton>
          <Contact>
            Телефон для замовлень:<br></br>(097) 39 41 955
          </Contact>
        </Container>
      </HeaderCss>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};
