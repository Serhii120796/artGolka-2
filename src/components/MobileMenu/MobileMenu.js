import { Menu, CloseButton, Icon, Text, Button } from './MobileMenu.styled';
import { categories } from '../../productCategories.js';

export const MobileMenu = ({ abc, onCloseMenu, statusMenu }) => {
  const handleClick = buttonType => {
    abc(buttonType);
    onCloseMenu();
  };

  return (
    <Menu $status={statusMenu}>
      <CloseButton type="button" onClick={onCloseMenu}>
        <Icon width="24" height="24">
          <use href={`${process.env.PUBLIC_URL}/images/icons.svg#icon-close`}></use>
        </Icon>
      </CloseButton>
      <Text>Каталог товарів</Text>
      <ul>
        {Object.keys(categories).map(type => (
          <li key={type}>
            <Button type="button" onClick={() => handleClick(type)}>
              {categories[type].name}
            </Button>
            {categories[type].list && (
              <ul>
                {Object.keys(categories[type].list).map(subType => (
                  <li key={subType}>
                    <Button type="button" onClick={() => handleClick(subType)}>
                      {categories[type].list[subType]}
                    </Button>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </Menu>
  );
};
