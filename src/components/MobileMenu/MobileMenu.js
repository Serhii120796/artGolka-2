import { Menu, CloseButton, Icon, Text, Button } from './MobileMenu.styled';

export const MobileMenu = ({ abc, onCloseMenu, statusMenu }) => {
  const buttonTypes = ['rps', 'rss', 'bow', 'rvm'];

  const categories = {
    rps: 'Рушники великодні',
    rss: 'Рушники спасівські',
    bow: 'Банти',
    rvm: 'Рушники обрядові (малі)',
  };

  const handleClick = buttonType => {
    abc(buttonType);
    onCloseMenu();
  };

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
          <Button type="button" onClick={() => handleClick('tn')}>
            Термоналіпки
          </Button>
          <ul>
            <li>
              <Button type="button" onClick={() => handleClick('tnA5')}>
                А5
              </Button>
            </li>
            <li>
              <Button type="button" onClick={() => handleClick('tnA4')}>
                А4
              </Button>
            </li>
            <li>
              <Button type="button" onClick={() => handleClick('tnA3')}>
                А3
              </Button>
            </li>
            <li>
              <Button type="button" onClick={() => handleClick('tnA2')}>
                А2
              </Button>
            </li>
            <li>
              <Button type="button" onClick={() => handleClick('tnP2060')}>
                Панно
              </Button>
            </li>
          </ul>
        </li>
        {buttonTypes.map(type => (
          <li key={type}>
            <Button type="button" onClick={() => handleClick(type)}>
              {categories[type]}
            </Button>
          </li>
        ))}
      </ul>
    </Menu>
  );
};
