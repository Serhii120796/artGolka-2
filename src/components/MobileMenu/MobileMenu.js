import { Menu, CloseButton, Icon, Text, Button } from './MobileMenu.styled';

export const MobileMenu = ({ abc, onCloseMenu, statusMenu }) => {
  const butonTypes = ['rps', 'rss', 'bow', 'rvm',
  ];

  const categories = {
    rps: 'Рушники великодні',
    rss: 'Рушники спасівські',
    bow: 'Банти',
    rvm: 'Рушники обрядові (малі)',
  }

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
        {butonTypes.map(type => <li>
          <Button
            type="button"
            onClick={() => {
              abc(type);
              onCloseMenu();
            }}
          >
            {categories[type]}
          </Button>
        </li>)}
      </ul>
    </Menu>
  );
};
