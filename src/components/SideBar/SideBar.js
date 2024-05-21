import { Aside, Text, ListItem, Button } from './SideBar.styled';
import { categories } from '../../productCategories.js';

export const Sidebar = ({ abc }) => {
  return (
    <Aside>
      <Text>Каталог товарів</Text>
      <ul>
        {Object.keys(categories).map(type => (
          <ListItem key={type}>
            <Button type="button" onClick={() => abc(type)}>
              {categories[type].name}
            </Button>
            {categories[type].list && (
              <ul>
                {Object.keys(categories[type].list).map(subType => (
                  <ListItem key={subType}>
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
