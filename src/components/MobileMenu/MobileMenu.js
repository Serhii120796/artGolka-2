import { Menu, CloseButton, Icon, Text, Button } from './MobileMenu.styled';

export const MobileMenu = ({ abc, onCloseMenu, statusMenu }) => {
  return (
    <Menu $status={statusMenu}>
      <CloseButton type="button" onClick={onCloseMenu}>
        <Icon width="24" height="24">
          <use href="./images/icons.svg#icon-close"></use>
        </Icon>
      </CloseButton>
      <Text>Каталог товарів</Text>
      <ul>
        <li>
          <Button
            type="button"
            onClick={() => {
              abc('tn');
              onCloseMenu();
            }}
          >
            Термоналіпки
          </Button>
          <ul>
            <li>
              <Button
                type="button"
                onClick={() => {
                  abc('tnA5');
                  onCloseMenu();
                }}
              >
                А5
              </Button>
            </li>
            <li>
              <Button
                type="button"
                onClick={() => {
                  abc('tnA4');
                  onCloseMenu();
                }}
              >
                А4
              </Button>
            </li>
            <li>
              <Button
                type="button"
                onClick={() => {
                  abc('tnA3');
                  onCloseMenu();
                }}
              >
                А3
              </Button>
            </li>
            <li>
              <Button
                type="button"
                onClick={() => {
                  abc('tnA2');
                  onCloseMenu();
                }}
              >
                А2
              </Button>
            </li>
            <li>
              <Button
                type="button"
                onClick={() => {
                  abc('tnP2060');
                  onCloseMenu();
                }}
              >
                Панно
              </Button>
            </li>
          </ul>
        </li>
        <li>
          <Button
            type="button"
            onClick={() => {
              abc('rps');
              onCloseMenu();
            }}
          >
            Рушники великодні
          </Button>
        </li>
        <li>
          <Button
            type="button"
            onClick={() => {
              abc('rss');
              onCloseMenu();
            }}
          >
            Рушники спасівські
          </Button>
        </li>
        <li>
          <Button
            type="button"
            onClick={() => {
              abc('bow');
              onCloseMenu();
            }}
          >
            Банти
          </Button>
        </li>
        <li>
          <Button
            type="button"
            onClick={() => {
              abc('rvm');
              onCloseMenu();
            }}
          >
            Рушники обрядові (малі)
          </Button>
        </li>
      </ul>
    </Menu>
  );
};
