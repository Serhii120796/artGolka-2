import React, { useState } from 'react';
import { Aside, Text, ListItem, Button, IconDownArrow } from './SideBar.styled';
import { categories } from '../../productCategories.js';

export const Sidebar = ({ changeFilter }) => {
  const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = type => {
    setOpenCategory(prev => (prev === type ? null : type));
  };

  const handleClick = type => {
    changeFilter(type);
    toggleCategory(type);
  };

  return (
    <Aside>
      <Text>Каталог товарів</Text>
      <ul>
        {Object.keys(categories).map(type => (
          <ListItem key={type}>
            <Button type="button" onClick={() => handleClick(type)}>
              {categories[type].title}
              {categories[type].subCtgs && <IconDownArrow />}
            </Button>
            {categories[type].subCtgs && openCategory === type && (
              <ul>
                {Object.keys(categories[type].subCtgs).map(subType => (
                  <ListItem key={subType} style={{ paddingLeft: '15px' }}>
                    <Button type="button" onClick={() => changeFilter(subType)}>
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
