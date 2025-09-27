import React, { useState } from 'react';
import { Menu, CloseButton, Icon, Text, Button } from './MobileMenu.styled';
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
    
    if (categories[buttonType].list) {
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
      <Text>Каталог товарів</Text>
      <ul>
        {Object.keys(categories).map(type => (
          <li key={type}>
            <Button type="button" onClick={() => handleClick(type)}>
              {categories[type].title}
            </Button>
            {categories[type].list && openCategory === type && (
              <ul>
                {Object.keys(categories[type].list).map(subType => (
                  <li key={subType}>
                    <Button type="button" onClick={() => {
                      abc(subType);
                      onCloseMenu(); 
                    }}>
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
