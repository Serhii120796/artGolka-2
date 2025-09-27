import React, { useState } from 'react';
import { Aside, Text, ListItem, Button } from './SideBar.styled';
import { categories } from '../../productCategories.js';

export const Sidebar = ({ abc }) => {
  const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = type => {
    setOpenCategory(prev => (prev === type ? null : type));
  };

  return (
    <Aside>
      <Text>Каталог товарів</Text>
      <ul>
        {Object.keys(categories).map(type => (
          <ListItem key={type}>
            <Button
              type="button"
              onClick={() => {
                abc(type);
                if (categories[type].list) {
                  // якщо є підпункти — розгортаємо/згортаємо
                  toggleCategory(type);
                } else {
                  // якщо нема підпунктів — викликати abc і ЗГОРНУТИ всі відкриті
                  setOpenCategory(null); // <— тут ми згортатимемо Термонаклейки
                }
              }}
            >
              {categories[type].name}
            </Button>
            {categories[type].list && openCategory === type && (
              <ul>
                {Object.keys(categories[type].list).map(subType => (
                  <ListItem key={subType} style={{ paddingLeft: '15px' }}>
                    <Button type="button" onClick={() => abc(subType)}>
                      {categories[type].list[subType]}
                    </Button>
                  </ListItem>
                ))}
              </ul>
            )}
          </ListItem>
        ))}
      </ul>
    </Aside>
  );
};
