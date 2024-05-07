import {
  HeaderCss,
  Container,
  Link,
  Contact,
  BurgerButton,
  Icon,
} from './Header.styled.js';

export const Header = ({onOpenMenu}) => {
  return (
    <HeaderCss>
      <Container>
        <Link href="./index.html">
          <span>Art</span>Golka
        </Link>
        <BurgerButton type="button" onClick={() => onOpenMenu()}>
          <Icon width="18" height="18">
            <use href="./images/icons.svg#burger-icon"></use>
          </Icon>
        </BurgerButton>
        <Contact>Телефон для замовлень:<br></br>(097) 39 41 955</Contact>
      </Container>
    </HeaderCss>
  );
};
