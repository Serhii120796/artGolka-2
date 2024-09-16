import { useSearchParams } from "react-router-dom";
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { SearchBox } from 'components/SearchBox/SearchBox.js';
import {
  HeaderCss,
  Container,
  Link,
  Contact,
  BurgerButton,
  Icon,
} from './Layout.styled.js';

export const Layout = ({ onOpenMenu }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const productName = searchParams.get("article") ?? "";

  const updateQueryString = (article) => {
    const nextParams = article !== "" ? { article } : {};
    setSearchParams(nextParams);
  };

  return (
    <>
      <HeaderCss>
        <Container>
          <Link to="/">ArtGolka</Link>
          <BurgerButton type="button" onClick={() => onOpenMenu()}>
            <Icon width="18" height="18">
              <use href={`${process.env.PUBLIC_URL}/images/icons.svg#burger-icon`}></use>
            </Icon>
          </BurgerButton>
          <SearchBox value={productName} onChange={updateQueryString} />
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
