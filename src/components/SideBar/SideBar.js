import React, { useState } from 'react';
import { Aside, Text, ListItem, Button, IconDownArrow} from './SideBar.styled';
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
                if (categories[type].subCtgs) {
                  // якщо є підпункти — розгортаємо/згортаємо
                  toggleCategory(type);
                } else {
                  // якщо нема підпунктів — ЗГОРНУТИ всі відкриті
                  setOpenCategory(null); // <— тут ми згортатимемо всі відкриті
                }
              }}
            >
              {categories[type].title}
            </Button>
            {categories[type].subCtgs && <IconDownArrow />}
            {categories[type].subCtgs && openCategory === type && (
              <ul>
                {Object.keys(categories[type].subCtgs).map(subType => (
                  <ListItem key={subType} style={{ paddingLeft: '15px' }}>
                    <Button type="button" onClick={() => abc(subType)}>
                      {categories[type].subCtgs[subType]}
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
