import React, { useState } from 'react';
import { Menu, CloseButton, Icon, Link,ListItem, Button, IconDownArrow } from './MobileMenu.styled';
import { categories } from '../../productCategories.js';
import { useEffect, useRef } from 'react';


export const MobileMenu = ({ abc, onCloseMenu, statusMenu }) => {
  const windowRef = useRef(null);
  const [openCategory, setOpenCategory] = useState(null);
  const toggleCategory = type => {
    setOpenCategory(prev => (prev === type ? null : type));
  };

  useEffect(() => {
    const handleClickOutside = event => {
      if (
        windowRef.current &&
        !windowRef.current.contains(event.target) &&
        statusMenu
      ) {
        onCloseMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [windowRef, onCloseMenu, statusMenu]);

  const handleClick = buttonType => {
    abc(buttonType);
    
    if (categories[buttonType].subCtgs) {
      toggleCategory(buttonType);
    } else {
      setOpenCategory(null);
      onCloseMenu(); // Закриваємо меню, якщо немає підпунктів
    }
  };

  return (
    <Menu $status={statusMenu} ref={windowRef}>
      <CloseButton type="button" onClick={onCloseMenu}>
        <Icon width="24" height="24">
          <use
            href={`${process.env.PUBLIC_URL}/images/icons.svg#icon-close`}
          ></use>
        </Icon>
      </CloseButton>
      <Link to="/" onClick={onCloseMenu}>Каталог товарів</Link>
      <ul>
        {Object.keys(categories).map(type => (
          <ListItem key={type}>
            <Button type="button" onClick={() => handleClick(type)}>
              {categories[type].title}
            </Button>
            {categories[type].subCtgs && <IconDownArrow />}
            {categories[type].subCtgs && openCategory === type && (
              <ul>
                {Object.keys(categories[type].subCtgs).map(subType => (
                  <li key={subType}>
                    <Button type="button" onClick={() => {
                      abc(subType);
                      onCloseMenu(); 
                    }}>
                      {categories[type].subCtgs[subType]}
                    </Button>
                  </li>
                ))}
              </ul>
            )}
          </ListItem>
        ))}
      </ul>
    </Menu>
  );
};
